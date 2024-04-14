const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const bcrypt = require("bcrypt");
const cors = require("cors");
const app = express();
const port = 3001;

mongoose.connect("mongodb+srv://shivastephy45:JcEszzOl9ggKvOWR@cluster1.mjjyzd8.mongodb.net/?retryWrites=true&w=majority&appName=Cluster1", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.json());

const FormData = mongoose.model("FormData", {
    Email: String,
    Password: String,
    userID: String
  });

  const UserAddData = mongoose.model("UserAddData", {
    Name: String,
    Age: Number,
  });

  app.get("/api/evaluatePassword/:email", async (req, res) => {
    try {
      const formDataId = req.params.email;
      const formData = await FormData.findOne({ Email: formDataId });
      if (!formData) {
        return res.status(404).json({ error: "Form data not found" });
      }
      
      const password = formData.password;
      const evaluation = evaluatePasswordStrength(password);
      res.status(200).json({ evaluation });
    } catch (error) {
      res.status(500).json({ error: "Error evaluating password" });
    }
  });
  
  
  function evaluatePasswordStrength(password) {
    const criteria = {
      fantastic: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{20,}$/,
      good: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{12,19}$/,
      okay: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d@$!%*?&]{8,11}$/,
      poor: /^(?=.*[a-z])(?=.*\d)[A-Za-z\d@$!%*?&]{1,7}$/
    };
  
    for (const strength in criteria) {
      if (criteria[strength].test(password)) {
        return strength;
      }
    }

    return "poor";
  }
  
  
  app.post("/api/submitCredentials/:username", async (req, res) => {
    try {
      const userId = req.params.username;
      const { Email, Password } = req.body;
  
      // Check if email and password are provided
      if (!Email || !Password) {
        return res.status(400).json({ error: "Email and password are required" });
      }
  
      // Find the user by ID
      const user = await UserAddData.findOne({Name:userId});
      if (!user) {
        return res.status(404).json({ error: "User not found" });
      }
  
      // Save the email and password to a different FormData
      const formData = new FormData({
        Email,
        Password,
        userId: user._id // Reference to the user who owns this email and password
      });
      await formData.save();
  
      res.status(200).json({ message: "Credentials submitted successfully" });
    } catch (error) {
      res.status(500).json({ error: "Error submitting credentials" });
    }
  });
  

  app.post("/api/newUser", async (req, res) => {
    try {
      const userAddData = new UserAddData(req.body);
      await userAddData.save();
      res.status(201).json({ message: "User added successfully"   });
    } catch (error) {
      res.status(500).json({ error: "Error adding user" });  
    }
  });


  app.get("/api/getUser/:username", async (req, res) => {
    try {
      const username = req.params.username;
      const user = await UserAddData.findOne({ Name: username });
      if (!user) {
        return res.status(404).json({ error: "User not found" });
      }
      res.status(200).json(user);
    } catch (error) {
      res.status(500).json({ error: "Error fetching user" });
    }
  });
  

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});