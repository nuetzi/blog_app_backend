const express = require("express");
const router = express.Router();
const Blogs = require("../models/blogs");


// Index Route
router.get("/", (req, res) => {
    Blogs.find({}, (err, foundBlogs) => {
        res.json(foundBlogs);
    });
});

// Create Route
router.post("/", (req, res) => {
    Blogs.create(req.body, (err, createdBlog) => {
        res.json(createdBlog);
    });
});

// Show Route
router.get("/:id", (req, res) => {
    Blogs.findById(req.params.id, (err, foundBlog) => {
        res.json(foundBlog);
    });
});

// Delete Route
router.delete("/:id", (req, res) => {
    Blogs.findByIdAndRemove(req.params.id, (err, deletedBlog) => {
        res.json(deletedBlog);
    })
});

// Update Route
router.put("/:id", (req, res) => {
    Blogs.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err, updatedBlog) => {
        res.json(updatedBlog);
    });    
});

module.exports = router;