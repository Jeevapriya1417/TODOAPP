import mongoose from "mongoose";


const userschema = new mongoose.Schema(
    {
        username:{type:String,  required:true },
        email:{type:String, unique:true, lowercase:true, required:true },
        password:{type:String , required:true}
    },{timestamps:true});

export default mongoose.model('TodoUser',userschema) 