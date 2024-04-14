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
    //_id: {type: String , unique: true },
    email: String,
    password: String,
  });

  const UserAddData = mongoose.model("UserAddData", {
    //_id: {type: String , unique: true },
    Name: String,
    Age: Number,
  });

  app.post("/api/saveFormData", async (req, res) => {
    try {
      const formData = new FormData(req.body);
      await formData.save();
      res.status(201).json({ message: "Form data saved successfully"   });
    } catch (error) {
      res.status(500).json({ error: "Error saving form data" });  
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



app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});