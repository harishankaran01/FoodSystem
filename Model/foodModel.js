const mongoose = require("mongoose");

const foodSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please Enter the Food"],
    },
    status: {
        type: String,
        required: [true, "Please Enter the Status for food"],
    },
    amount:{
        type: Number,
        required: [true, "Please Enter the amount of food"],
    }
}
)


module.exports = mongoose.model("Food", foodSchema)
