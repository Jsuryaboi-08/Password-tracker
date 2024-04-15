const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const bcrypt = require("bcrypt");
const cors = require("cors");
const app = express();
const port = 3001;
const crypto = require('crypto');


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

  const FilesSchema = new mongoose.Schema({
    Email: String,
    Password: String,
    Website: String,
    // Add any other fields relevant to the files
  });
  
  const Files = mongoose.model("Files", FilesSchema);
  
  const UserAddDataSchema = new mongoose.Schema({
    Name: String,
    Age: Number,
    files: [{ type: mongoose.Schema.Types.ObjectId, ref: "Files" }] // Reference to Files schema
  });
  
  const UserAddData = mongoose.model("UserAddData", UserAddDataSchema);
  
  // const UserAddData = mongoose.model("UserAddData", {
  //   Name: String,
  //   Age: Number,
  // });

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
  

  app.get("/api/files/:userId", async (req, res) => {
    try {
      const userId = req.params.userId;
  
      const user = await UserAddData.findOne({Name:userId}).populate("files");
      if (!user) {
        return res.status(404).json({ error: "User not found" });
      }
  
      const files = user.files.map(file => ({
        Email: file.Email,
        Password: file.Password,
        Website: file.Website
      }));
  
      res.status(200).json(files);
    } catch (error) {
      res.status(500).json({ error: "Error retrieving files" });
    }
  });
  
  app.post("/api/uploadFile/:userId", async (req, res) => {
    try {
      const userId = req.params.userId;
      const { Email, Password, Website } = req.body;
      
      const hashedPassword = await bcrypt.hash(Password, 10);

      // Encrypt the hashed password using AES
      const encryptionKey = crypto.randomBytes(32);
      const iv = crypto.randomBytes(16);
      const aesCipher = crypto.createCipheriv('aes-256-cbc', encryptionKey, iv);
      let encryptedPassword = aesCipher.update(hashedPassword, 'utf-8', 'hex');
      encryptedPassword += aesCipher.final('hex');
      // Create a new file document
      const file = new Files({ Email, Password:encryptedPassword, Website });
      await file.save();
   
      // Find the user by ID and associate the file with the user
      const user = await UserAddData.findOne({Name:userId});
      if (!user) {
        return res.status(404).json({ error: "User not found" });
      }
  
      user.files.push(file._id);
      await user.save();
  
      res.status(200).json({ message: "File uploaded and associated with user successfully" });
    } catch (error) {
      res.status(500).json({ error: "Error uploading file and associating with user" });
    }
  });
  
  
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
      console.log("Hey");
    } catch (error) {
      res.status(500).json({ error: "Error adding user" });  
    }
  });

  app.get("/api/usernames", async (req, res) => {
    try { 
      const users = await UserAddData.find({}, 'Name'); // Retrieve only the 'Name' field
      const usernames = users.map(user => user.Name); // Extract usernames from user objects
      res.status(200).json(usernames);
    } catch (error) {
      res.status(500).json({ error: "Error fetching usernames" });
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