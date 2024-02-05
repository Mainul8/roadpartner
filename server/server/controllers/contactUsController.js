const ContactUs = require("../models/contactUs.js");
const contactUsController={
    contactus :async (req,res)=>{
        const{name,email,subject,message}=req.body;
        await ContactUs.create({
            name,email,subject,message
        })
        .then(contactUs=>res.json(contactUs))
        .catch(err=>res.json(err))
    },
    
}

    

module.exports=contactUsController;
