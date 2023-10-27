import express from "express";
import mongoose from "mongoose";

const app = express();

app.use("/api", (req, res, next) =>{
    res.send("Hello, World")
})

mongoose.
connect(
    "mongodb+srv://omermohammedabbas99:5UZmKnYEWEN8YFFI@cluster0.aho3kn6.mongodb.net/?retryWrites=true&w=majority"
    )
    .then(()=>app.listen(5000))
    .then(()=>
    console.log("Connected to DB & listeing to Localhost")
    )
    .catch((err)=>console.log(err));
//P43NNYTKcB57US4G  