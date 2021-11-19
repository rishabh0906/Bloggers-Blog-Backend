let express = require("express");

const blogRouter = express.Router();
let BlogModel = require("../Models/BlogModel");
const ProtectRoute = require("./ProtectRoute");

let getBlogs = async (req, res) => {
  let blogs = await BlogModel.find();
  blogs = blogs.map((blog) => {
    return { title: blog.title, blog: blog.blog, category: blog.category };
  });

  res.send({ blogs });
};

let createBlog = async (req, res) => {
  console.log(req.cookies);
  let { title, category, blog } = req.body;

  let createdBlog = await BlogModel.create({ title:title, category:category, blog:blog });
  res.send({ status: "success", info: { title, id: createdBlog["_id"] } });
};

blogRouter.get("/allblogs", getBlogs);
blogRouter
  .post("/create", ProtectRoute,createBlog)
  // .post("/update", ProtectRoute, updateBlog)
  // .post("/delete", ProtectRoute, deleteBlog);

module.exports = blogRouter;
