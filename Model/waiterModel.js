const mongoose=require("mongoose");

const waiterSchema=mongoose.Schema({
    Name:{
        type:String,
        required:[true,"Please Enter the Name"],
    },
    WaiterID:{
        type:String,
        required:[true,"Please Enter the WaiterID "]
    },
    contactNumber:{
        type:Number,
        required:[true,"Please Enter the Your contact Number"],
    },
    gmail:{
        type:String,
        required:[true,"Please Enter the Gmail"]
    },
    password:{
        type:String,
        required:[true,"Please Enter the Password"]
    }
    }
)


module.exports=mongoose.model("waiters",waiterSchema)
