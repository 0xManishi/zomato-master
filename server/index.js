
import express from "express";
const zomato = express();

zomato.get("/home", (req,res) => res.json({message: "SetUp Success Yay!!"}));

zomato.listen(4000, ()=> console.log("Server is up and running"));