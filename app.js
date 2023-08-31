const express = require("express");
const cors = require("cors");
require("dotenv").config({ path: "./config/.env" });
require("./config/db");

const authRoute = require("./router/authRoutes");
const productRoute= require ("./router/productRoutes")
const app = express();


app.use(cors());
app.use(express.json());
//port 
const port = process.env.PORT || 5000

// route
//http://localhost:5000/auth*
app.use("/auth", authRoute);
app.use ("/product" , productRoute)
app.listen(port, () => {
    console.log(`server is renning on ${port}...`);
});
