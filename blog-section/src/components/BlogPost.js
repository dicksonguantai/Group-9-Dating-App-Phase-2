import React from 'react';

const BlogPost = ({ title, content, author, publicationDate }) => {
  return (
    <div>
      <h2>{title}</h2>
      <p>{content}</p>
      <p>Author: {author}</p>
      <p>Published: {publicationDate}</p>
    </div>
  );
};

export default BlogPost;
