import React, { useEffect, useState } from 'react';

const BlogCategories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    // Fetch categories data from a JSON file
    fetch('path/to/blogPost.json')
      .then(response => response.json())
      .then(data => {
        // Set the fetched categories data to state
        setCategories(data.categories);
      })
      .catch(error => console.log(error));
  }, []);

  return (
    <div>
      <h1>Blog Categories</h1>
      <ul>
        {/* Render a list of categories */}
        {categories.map((category, index) => (
          <li key={index}>{category}</li>
        ))}
      </ul>
    </div>
  );
};

export default BlogCategories;
