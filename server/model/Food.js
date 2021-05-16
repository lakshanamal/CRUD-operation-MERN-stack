const mongoose=requre('mongoose');

const FoodSchema= new mangoose.Schema({
    foodName={
        type:String ,
        required:true,
    },
    daysSinceIAte:{
        type:Number,
        required:true
    }
});

const Food=mongoose.model("FoodDate",FoodSchema);

module.exports=Food;