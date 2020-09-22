const express = require("express")
const path = require("path")
const bodyParser=require("body-parser")
const createDocument=require("./app/create")

const app=express()

const PORT=process.env.PORT || 3000

app.use(express.static(path.join(__dirname,"public")))
app.use(bodyParser.urlencoded({ extended: false }))

app.get("/",(req,res)=>{
    res.sendFile("index.html")
})

//if you wanna use GET method 
// app.get("/home",(req,res)=>{
//     console.log(req.query)
//     res.sendFile(__dirname+"/public/index.html")
// })


app.post("/",(req,res)=>{
    console.log(req.body)
    //sending the data to createDocument file to insert the document into MongoDB 
    createDocument(req.body)
    res.sendFile(__dirname+"/public/index.html")
})

app.listen(PORT,()=>{
    console.log(`Server is running on http://localhost:${PORT}`)
})
