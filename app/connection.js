const mongoose = require("mongoose");

function connectDB(){
  console.log("connecting..")
  
    mongoose.connect(
    "mongodb://localhost:27017/mongooseLearning", //mongooseLearning is the name of database
    {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    }
  );

  //After connection
  mongoose.connection
    .once("open", () => {
      console.log("Successfully Connected!");
    })
    .on("error", (error) => console.log("The error: ", error));

}

module.exports=connectDB