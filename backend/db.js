
const mongoose = require("mongoose");
const path = require("path");
require("dotenv").config({
    path: path.resolve(__dirname, "../.env")
});

mongoose.connect(process.env.MONGO_URL)
    .then(() => console.log("MongoDB connected successfully - db.js"))
    .catch((err) => console.error("MongoDB connection error: - db.js", err));

const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
});

const todo = mongoose.model("todos", todoSchema);

module.exports = {
    todo
};
