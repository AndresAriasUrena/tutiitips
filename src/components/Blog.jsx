import React from "react";
import { useParams } from "react-router-dom";
import { blogPosts } from "../blogData";

const Blog = () => {
  const { id } = useParams();
  const post = blogPosts.find((post) => post.id === parseInt(id));

  return (
    <div className="blog-entry">
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </div>
  );
};

export default Blog;
