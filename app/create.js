const Student = require("../app/student");
const connectDB=require("../app/connection")
const mongoose = require("mongoose");

// function oldDataFlush(){
//   mongoose.connection.collections.students.drop();
// }

function createDocument(data) {
  console.log("creating...")

  //called connection file
  connectDB()

  // oldDataFlush()

  //inserting a document into the MongoDB 
  Student.insertMany(
    [
      {
        name: data.name,
        company: data.company,
        email: data.email,
        phone: data.phone,
        msg: data.msg,
      }
    ],

    (err, result) => {
      if (!err) {
        console.log("Created and Saved!");
      } else {
        console.log("Error occurred", err);
      }
    }
  );
}

module.exports=createDocument