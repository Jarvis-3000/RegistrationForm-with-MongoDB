const express=require("express")
const expressLayouts=require("express-ejs-layouts")
const app=express()

app.use(express.static("public"))
app.set("layout","layouts/render")
app.use(expressLayouts)
app.set("view engine","ejs")

//Navigation
app.get("/",(req,res)=>{
    res.render("body",{title:"EJS"})
})

app.get("/about",(req,res)=>{
    res.render("about",{title:"EJS"})
})

app.listen(3000)