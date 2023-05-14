const mongoose = require("mongoose");
let userdetails = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  job: {
    type: String,
    required: true,
    
  }
  
});
module.exports = mongoose.model("userdetails", userdetails); 