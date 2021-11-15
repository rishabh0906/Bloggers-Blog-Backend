let express = require("express");

const blogRouter = express.Router();
let BlogModel = require("../Models/BlogModel");


let getBlogs = (req, res) => {
  let blogs = await BlogModel.find();
  blogs = blogs.map((blog) => {
    return { title: blog.Title, blog: blog.blog, category: blog.category };
  });

  res.send({ blogs });
};

blogRouter.get("allblogs", getBlogs);

module.exports = blogRouter;
