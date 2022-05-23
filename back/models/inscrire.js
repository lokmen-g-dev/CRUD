const mongoose = require("mongoose");
const opts = { toJSON: { virtuals: true } };
const inscrireSchema = new mongoose.Schema({
 nom:{
    type: String,

 },
  email: {
    type: String,
  },
  password: {
    type: String,
  },
  tel: {
    type: String,
  },
  
},opts);

const user = mongoose.model("user", inscrireSchema);

module.exports = user;
