const mongoose=require("mongoose");
require("dotenv").config();
const dbConnenction=async()=>{
try{
    const connect=await mongoose.connect(process.env.CONNECTION_STRING, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
    console.log(connect.connection.name);

}
catch(err){
    console.log(`Mongoose Error:${err}`);
    console.log("connection lost");

}

}
module.exports=dbConnenction;