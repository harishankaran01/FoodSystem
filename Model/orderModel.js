const mongoose=require("mongoose");

const waiterSchema=mongoose.Schema({
    WaiterID:{
        type:String,
        required:[true,"Please Enter the WaiterID "]
    },
    tableNumber:{
        type:String,
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
