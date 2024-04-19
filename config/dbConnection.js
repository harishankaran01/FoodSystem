const mongoose=require("mongoose");
require("dotenv").config();
const dbConnenction=async()=>{
try{
    const connect=await mongoose.connect(process.env.CONNECTION_STRING, 
        //CONNECTION_STRING=mongodb+srv://Hari:hari3004@cluster0.k7rewxf.mongodb.net/FoodSystem?retryWrites=true&w=majority&appName=Cluster0
        {
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