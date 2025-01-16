
const express = require("express");
const dotenv = require("dotenv").config();  
// const errorHandler = require("./middleware/errorHandler")
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
app.use("/api/products",require("./routes/productRoutes"))
// app.use(errorHandler);

app.listen(port,()=>{
    console.log(`port : ${port}`);
});

console.log("server running");