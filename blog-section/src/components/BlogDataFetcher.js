import React, { useEffect, useState } from 'react';
import FetchedBlogData from './BlogDataFetcher';  // Change the name here
import axios from 'axios';

const BlogDataFetcher = () => {
  const [blogData, setBlogData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://api.example.com/blog');
        setBlogData(response.data);
      } catch (error) {
        console.error('Error fetching blog data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {blogData.map((blog) => (
        <div key={blog.id}>
          <h2>{blog.title}</h2>
          <p>{blog.content}</p>
        </div>
      ))}
    </div>
  );
};

export default BlogDataFetcher;
