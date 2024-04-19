const express=require("express");
const app=express();
require("dotenv").config();
const cors=require("cors");
const dbConnection=require("./config/dbConnection");
dbConnection();
const port=process.env.PORT||3000;
app.use(cors());
app.use(express.json());
app.use("/",require("./Routes/Routes"))
app.use(require("./errorController/errorController"));
app.listen(port,()=>console.log(`Server is listening in ${port}`));
