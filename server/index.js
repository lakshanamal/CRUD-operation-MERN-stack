const express=require('express');
const mongoose=require('mongoose');

// import model food before using this
const FoodModel=require('./model/Food');

mongoose.connect('mongodb://localhost:27017/CRUD',{
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const app=express();

app.use(express.json());

// api 

app.get('/',(req,res)=>{
    const food=new FoodModel({
        foodName:"Apple",
        daysSinceIAte:3
    })   /// create new food item 
    food.save().then(()=>res.json("Sucessfull added...")).catch(err=>res.status(400).json('Error :'+err))
    
})

app.listen(3001,()=>
   {console.log("Sever start on port 3001")
});