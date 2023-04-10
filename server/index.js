const express = require('express')
require('dotenv').config()
const apiKey = process.env.REACT_APP_API_KEY;

const app = express()

app.get("/api",(req,res)=>{
    res.json({"Users":[apiKey]})
})

app.listen(5000, ()=>{
    console.log('Server Started on Port 5000')
})