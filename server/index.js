const express = require("express");
const cors = require("cors");
const app = express();
const port =  3000;
const router = require("./routes/route.js"); // Adjust the path as necessary
require("dotenv").config();
const { connectDB } = require("./connection.js"); // Adjust the path as necessary
const cookieParser = require("cookie-parser");

// connect to the database
connectDB(); // Call the function to connect to the database

// middlewares
app.use(express.json()); // for parsing application/json
app.use(cors({ origin: process.env.CLIENT_URL, credentials: true })); // for enabling
app.use(cookieParser()); // for parsing cookies

//routes
app.use("/api", router); // Use the routes defined in routes.js
app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
