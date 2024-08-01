const mongoose=require("mongoose");

mongoose.connect("mongodb://localhost:27017/paytm");

const userSchema=mongoose.Schema({
    userName:String,
    firstName:String,
    secondName:String,
    password:String
});

const User=mongoose.model("User",userSchema);

module.exports={
    User
}