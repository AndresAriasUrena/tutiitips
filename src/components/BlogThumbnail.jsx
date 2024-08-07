import React from "react";
import { Link } from "react-router-dom";

const BlogThumbnail = ({ post }) => {
  return (
    <div className="blog-thumbnail bg-customGray bg-opacity-80 p-10 flex flex-col-reverse md:flex-row items-center gap-12">
      <div className="flex flex-col items-center justify-around gap-6">
        <p className="text-center text-[#3E3E3E]">{post.summary}</p>
        <h2 className="text-xl font-bold text-[#6E4637]">{post.title}</h2>
        <Link to={`/blog/${post.id}`} className='relative bottom-0 py-2 px-6 w-max rounded-full bg-secondary hover:bg-verdeclaro text-verdeoscuro hover:text-secondary'>Leer más</Link>
      </div>
      <div className="thumbnail-image">
        <img src={post.thumbnail} alt={post.title} className="w-40 h-40 object-cover rounded-md" />
      </div>
    </div>
  );
};

export default BlogThumbnail;

