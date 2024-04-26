const foodModel = require("../Model/foodModel");
const expressAsyncHandler=require("express-async-handler")
const foodStatus = expressAsyncHandler(async (req, res, next) => {
    console.log(req.url);
        let item = await foodModel.findOne({ name: req.body.name });
        if (!item)
            throw new Error("No Items Found");

        let updatedItem = await foodModel.findByIdAndUpdate(req.params.id,req.body, { new: true });
        
        if (!updatedItem)
            throw new Error("Failed to update item");
        
        res.json({
            message: "Food Status Updated",
            updatedItem: updatedItem 
        });
});

const foodEntry = async (req, res, next) => {
    try {
        req.body.map(async (prev) => {
            let item = await foodModel.findOne({ name: prev.name });
            if(item){
                res.statusCode=403;
            //   res.json({
            //     message: `${user.name} Already Exist`
            //   })
             throw new Error(`${item.name} Already Exists`);
            }
            if(!prev.name||!prev.status||!prev.amount){
                res.statusCode=404;
                return (next({ message: "Data Not Found" }));
            }
            try{
                let item=await foodModel.create({
                    name:prev.name,
                    status:prev.status,
                    amount:prev.amount
                })
            }
            catch(err){
                res.statusCode = 500;
                return (next({ message: "Error raised in Mongo DB" }));
            }
        })
    }
    catch (err) {
        res.statusCode = 500;
        return (next({ message: "Give inputs in array" }));
    }
    res.json(
        {
            Message: "Food Added Successfully",
        }
    );
}
const getAllFood=expressAsyncHandler(async(req,res)=>{
    let availableItems=await foodModel.find();
    if(!availableItems){
        res.statusCode=201;
        throw new Error("All Items are unavailable");
    }
    res.status(200).json(availableItems)
})
module.exports = {
    foodStatus,
    foodEntry,
    getAllFood
};
