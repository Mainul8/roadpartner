const {Schema,model}=require("mongoose");
const serviceSchema=new Schema({
    name:{
        type:String,
        required:true,
    },
},{timestamps:true}
);
const Service=model('service',serviceSchema)
module.exports=Service;