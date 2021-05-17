const express=require('express');
const mongoose=require('mongoose');
const cors =require('cors');
const app=express();

// import model food before using this
const FoodModel=require('./model/Food');

app.use(express.json());
app.use(cors()); 

mongoose.connect('mongodb://localhost:27017/CRUD',{
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// api 

app.post('/add',(req,res)=>{

    const foodName=req.body.foodName;
    const days=req.body.days;
    const food=new FoodModel({
        foodName:foodName,
        daysSinceIAte:days
    })   /// create new food item 
    food.save().then(()=>res.json("Sucessfull added...")).catch(err=>res.status(400).json('Error :'+err))
    
})
app.get('/',(req,res)=>{
       
    FoodModel.find().then((result)=>res.json(result)).catch(err=>res.status(400).json('Error :'+err))
    
});

app.put('/update', (req,res)=>{
    const id=req.body.id;
    const newFoodName=req.body.foodName;
     FoodModel.findById(id,(err,result)=>{
        result.foodName=newFoodName;
        result.save();
        res.send("Update");
    });
});

app.delete('/delete/:id',(req,res)=>{
    const id=req.params.id;
    console.log(req.params);
    FoodModel.findByIdAndDelete(id,(err,result)=>{
        res.send("elemetn deleted");
    }
        )
})

app.listen(3001,()=>
   {console.log("Sever start on port 3001")
});