const foodModel = require("../Model/foodModel");

const foodStatus = async (req, res, next) => {
    try {
        req.body.map(async (prev) => {
            let user = await foodModel.findOne({ name: prev.name });
            console.log(user);
        })
    }
    catch (err) {
        res.statusCode = 500;
        return (next({ message: "Error raised in Mongo DB" }));
    }
    res.json(
        {
            Message: "Food Status Updated",
        }
    );
}
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



module.exports = {
    foodStatus,
    foodEntry
};
