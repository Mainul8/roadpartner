const User = require("../models/user.js");
const userController={
    userHome:(req,res)=>{
        res.render("home");
    },
    signup :async (req,res)=>{
        const{firstName,lastName,email,password}=req.body;
        await User.create({
            firstName,lastName,email,password,
        })
        .then(user=>res.json(user))
        .catch(err=>res.json(err));
        
    },

    login:async(req,res)=>{
       const{email,password}=req.body;
       try {
        const token=await User.matchPasswordAndGenerateToken(email,password);
        return res.json("sucess")
        
       } catch (error) {
        return res.json(error);
       }
    },

    logout:async(req,res)=>{
        res.clearCookie("token").redirect("/");
    },
    
}

    

module.exports=userController;
