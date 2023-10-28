import express from "express";
import mongoose from "mongoose";
import router from "./routes/user-routes.js";
import blogRouter from "./routes/blog-routes.js";

const app = express();
app.use(express.json());

app.use("/api/user", router);
app.use("/api/blog", blogRouter);
mongoose.
connect(
    "mongodb+srv://omermohammedabbas99:5UZmKnYEWEN8YFFI@cluster0.aho3kn6.mongodb.net/?retryWrites=true&w=majority"
    )
    .then(()=>app.listen(5000))
    .then(()=>
    console.log("Connected to DB & listeing to Localhost")
    )
    .catch((err)=>console.log(err));
