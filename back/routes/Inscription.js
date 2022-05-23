const express = require("express");
const bcrypt= require("bcryptjs")
const router = express.Router();
const user = require("../models/inscrire")
const jwt=require("jsonwebtoken");



router.post("/signin", async (req, res) => {
    ///validate all the incoming data in the body
    //const { error } = InscrireSchema.validate(req.body);
    const emailcheck = await user.findOne({
        email: req.body.email
      });
console.log(emailcheck)    
if (emailcheck) return res.status(400).send("Email already exists");

    const salt = await bcrypt.genSalt(10);
    const hashedpassword = await bcrypt.hash(req.body.password, salt);
    const client = new user({
      name: req.body.name,
      email: req.body.email,
      password: hashedpassword,
      tel: req.body.tel,
      operateur: req.body.operateur,
    });
  
    try {
      const savedclient = await client.save();
  
      // OTP
  
      const veriftoken = jwt.sign(
        { Client: savedclient._id },
        process.env.ACCESS_TOKEN
      );
  
  
      res.send({ token: veriftoken, id: savedclient._id });
    } catch (err) {
      res.send({ message: err });
    }
  });
  //gett 
  router.get("/overview", async (req, res) => {
    try {
      const operateur = await user.find();
      res.send(operateur);
    } catch (err) {
      res.json({ message: err });
    }
  });



///login
router.post("/login",async(req,res)=>{

    /////VALIDATE INCOMING ADMIN DATA
    const { error } = loginschema.validate(req.body); ///validate all the incoming data in the body
    if (error) return res.status(403).send(error.details[0].message);
  
  
    try{
      const User= await user.findOne({email:req.body.email})
      if (!User) return res.status(403).send("Account doesn't exists");
  
     
      const validpassword = await bcrypt.compare(
        req.body.password,
        User.password
      );
      //console.log(validpassword);
      if (!validpassword) return res.status(400).send("password is incorrect");
      const access_token = jwt.sign(
        { user: User._id },
        process.env.ACCESS_TOKEN
      );
      res.send(access_token)
    } catch(err){
      res.send({message:err}) 
    }
  })

  //delet 
  router.delete("/delete/:id", async (req, res) => {
    try {
      const deletedOperateur = await user.findByIdAndDelete({
        _id: req.params.id,
      });
      console.log(deletedOperateur);
      res.send("deleted");
    } catch (err) {
      res.json({ message: err });
    }
  });
  

  module.exports = router;
  