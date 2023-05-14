const express = require("express");
const mongoose = require("mongoose");
const userdetails = require("./model.js");
const jwt = require("jsonwebtoken");

const app = express();
app.use(express.json());
const cors = require('cors');

const { findOne } = require("./model.js");
const port = 5000;


mongoose
  .connect(
    "mongodb+srv://Navya:Navya@cluster0.f2flhy9.mongodb.net/?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => console.log("mongo db connected"));

app.use(cors({
  origin:'*', 
}))
app.get('/',(re,res)=>{
  res.send("Hiiii you are on")
})
app.post('/login',async (req,res)=>{
    const {username,job}=req.body;
    console.log("in server after login username is:",username,"job is:",job);
    let newuser=new userdetails({
        username,
        job
    })
    userdetails.save();
    const token=jwt.sign({username,job},"Navya61@");
    res.send({
        status:"success",
        user:token,
        message:"user logged in successfully"
    })

})
app.listen(port, () => {
    console.log("server is listening to port", port);
  });


