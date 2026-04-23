require("dotenv").config();
const express =require("express");
const mongoose = require("mongoose")
const app = express();
const cors = require("cors");

const PORT = 2468;

app.get("/", (req, res) => {
    res.send("Welcome To Backend");
});

app.use(cors());
app.use(express.json());



app.use((req, res, next) => {
    console.log(`${req.method} request made to ${req.url}`);
    next();
});

// router
const userRoute = require("./Route/userRoutes");
const { config } = require("dotenv");
app.use("/users", userRoute);

const people = ["4k", "Favour"]

//connect to database locally
mongoose
.connect(process.env.MONGODB_URI)
.then(() => console.log("MongoDB connected successfully"))
.catch((err) => console.log("MongoDB connection error:", err))

app.get("/about", (req, res) => {
    res.send("Welcome To The About Page");
});

//POST REQUEST
app.post("/login", (req, res) => {
    res.send("You Just Submitted a Login")
});

app.listen(PORT, () => {
    console.log(`This page is already running $(PORT)`);
});