require("dotenv").config();
const portatilesRouter = require("./src/api/routes/portatil");
const { connectDB } = require("./src/config/db");
const { scrapper } = require("./src/utils/scrapper");
const express = require ("express");


const app = express();
connectDB();

app.use("/api/v1/portatiles", portatilesRouter);

app.use("*", (req,res,next)=> {
    return res.status(404).json("Route not found");
})

app.listen(3000, ()=>{
    console.log("http://localhost:3000");
})
/*scrapper("https://www.pccomponentes.com/portatiles");*/