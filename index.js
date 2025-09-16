const express = require("express");
const dotenv = require("dotenv");
const connectmongodb = require("./config/db.js");
const personRoutes = require("./routes/Person");  // ✅ Import routes, not model

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Routes
app.use("/person",personRoutes);   // ✅ mount router here

// Connect DB
connectmongodb();

app.listen(PORT, () => console.log("server connected successfully"));
