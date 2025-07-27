const express = require("express");
const app = express();
const zod = require("zod");
const cors = require("cors");
app.use(cors());
app.use(express.json());
const {postSchema,putSchema} = require("./inputValidation");
const {todoDB} = require("./db");

app.post("/todos", async (req,res)=>{
    const  title= req.body.title;
    const description = req.body.description;
    const verify = postSchema.safeParse({
        title: title,
        description: description
    })
    if(!verify.success) {
        res.status(400).send("invalid input");
        return;
    }
    const response = await todoDB.create({
        title: title,
        description: description,
        completed: false
    })        
    
    res.json({
        msg: "todo created",
        id: response._id
    })
})

app.get("/todos", async (req,res)=>{
    const response = await todoDB.find({});
    res.json({
        todos: response
    })
})

app.put("/completed",async (req,res)=>{
    const id = req.body.id;
    const verify2 = putSchema.safeParse({
        id: id
    })
    if(!verify2.success) {
        res.json({
            msg:"you sent wrong inputs"
        })
        return;
    }
    await todoDB.updateOne({
        _id: id
    },{
        completed: true
    })
    res.json({
        msg: "todo is marked as done"
    })

})

app.listen(3000,()=>{
    console.log(`app running on port 3000`);
})