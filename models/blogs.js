const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema({
    name: {type: String, required: true},
    message: {type: String, required: true}
});

const blogSchema = new mongoose.Schema({
    title: {type: String, required: true},
    body: {type: String, required: true},
    comments: [commentSchema]
});

const Blogs = mongoose.model("Blog", blogSchema);

module.exports = Blogs;