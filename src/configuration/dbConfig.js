const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://atifobjects:mn14K2zHIoHALbrN@cluster0.s7rhz.mongodb.net/");

mongoose.connection.on("connected",()=>{
    console.log("Connected to MongoDB");
});

mongoose.connection.on("error", (err) => {
    console.log(`MongDB connection error: ${err}`)
})

module.exports = mongoose;