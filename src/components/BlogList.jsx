import React from "react";
import BlogThumbnail from "./BlogThumbnail";
import { blogPosts } from "../blogData";

const BlogList = () => {
  return (
    <div className="bg-blog-sec-bg mx-auto h-screen bg-cover flex flex-col gap-16 md:pb-16 items-center pb-8">
      {/* <h1 className='text-secondary drop-shadow-2xl uppercase mx-auto text-6xl tracking-widest pt-8'>BLOG</h1> */}
      <div className='bg-primary md:bg-white text-6xl md:text-black text-tertiary mix-blend-darken md:mix-blend-screen px-8 py-4 mt-16 tracking-wider	 rounded-lg'>BLOG</div>

      {blogPosts.map((post) => (
        <BlogThumbnail
          key={post.id}
          // id={blog.id}
          // title={blog.title}
          // summary={blog.summary}
          post={post}
        />
      ))}
    </div>
  );
};

export default BlogList;
