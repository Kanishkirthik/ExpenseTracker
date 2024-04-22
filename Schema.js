const mongoose =require('mongoose')
const details=new mongoose.Schema({
    amount:{type:Number ,required:true},
    category:{type:String,requied:true},
    date:{type:String},
    userId:{type:String},
},{versionKey:false});
const expence=mongoose.model("Expences",details)
const userdetails=new mongoose.Schema(
{   name : { type: String , requied:true},
    email:{type:String,requied:true},
    password:{type:String,required:true}
},{versionKey:false})
const user=mongoose.model("UserDetails",userdetails)
module.exports={expence,user};