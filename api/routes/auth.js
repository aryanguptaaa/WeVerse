const router = require('express').Router();
const User = require("../models/User");
const CryptoJS = require("crypto-js");
const jwt = require('jsonwebtoken');

//Registration
router.post('/register',async (req,res)=>{
    const newUser = new User({
        username:req.body.username,
        email:req.body.email,
        password:CryptoJS.AES.encrypt(req.body.password, process.env.KEY).toString(),
    });

    try{
    const user =await newUser.save();
    res.status(201).json(user);
    }catch(err){
        res.status(500).json(err);
    }
});

//Login 
router.post("/login",async (req,res)=> {
    try{
        const user =await User.findOne({email: req.body.email });
        !user && res.status(401).json('Wrong username. Username does not exist.');

        const decrypted = CryptoJS.AES.decrypt(user.password, process.env.KEY);
        const originalPassword = decrypted.toString(CryptoJS.enc.Utf8);

        originalPassword !== req.body.password && 
        res.status(401).json("Wrong password.");

        const accessToken = jwt.sign({id: user.id, isAdmin: user.isAdmin},
            process.env.KEY,{expiresIn:"31d" }
            );
        
        const {password, ...info } = user._doc;   // password wont be sent this way

        res.status(200).json({...info, accessToken });

    }catch(err){
        res.status(500).json(err);
    }
});

module.exports = router;