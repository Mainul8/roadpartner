const {createHmac,randomBytes}=require("crypto");
const {Schema,model}=require("mongoose");
const { createTokenForUser } = require("../services/authentication");

const userSchema=new Schema({
    firstName:{
        type:String,
        required:true,
    },
    lastName:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    //password hashing
    salt:{
        type:String,
        
    },
    password:{
        type:String,
        required:true,
    },
    
},{timestamps:true}
);



userSchema.pre('save',function (next){
    const user=this;

    if(!user.isModified("password")) return;

    //here we will use hash
    const salt=randomBytes(16).toString();
    const hashedPassword = createHmac('sha256',salt) //algorithm-sha256 and key-salt
    .update(user.password)
    .digest("hex");

    this.salt=salt;
    this.password=hashedPassword;

    next();
});


userSchema.static('matchPasswordAndGenerateToken', 
   async function(email,password){
    const user=await this.findOne({email});
    if(!user) throw new Error ('User not found!');

    const salt=user.salt;
    const hashedPassword=user.password;

    const userProvidedHash=createHmac("sha256",salt)
      .update(password)
      .digest("hex");

    if(hashedPassword!==userProvidedHash)
     throw new Error ('Invalid Username or Password');
    const token=createTokenForUser(user);
    return token;
});
const User=model('user',userSchema);


module.exports=User;