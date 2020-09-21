const mongoose=require("mongoose")
const Schema=mongoose.Schema
// const { Schema } = mongoose;

//making the schema(structure/rule) of the document
const studentSchema=new Schema({
  name:String,
  company:String,
  email:String,
  phone:Number,
  msg:String
  
})

//Student(students in MongoDB) is the name of collection
const Student=mongoose.model("Student",studentSchema) 

module.exports=Student