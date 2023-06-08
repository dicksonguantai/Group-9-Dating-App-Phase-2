import React from 'react';

const BlogList = () => {
    const [blogPosts, setBlogPosts] = useState([]);

    useEffect(() => {
      // Simulating fetching data from an API
      fetch('https://api.example.com/blog/posts')
        .then(response => response.json())
        .then(data => setBlogPosts(data))
        .catch(error => console.log(error));
    }, []);

  return (
    <div>
      <h1>Blog List</h1>
      {blogPosts.map(post => (
        <div key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.content}</p>
    </div>
      ))};
    </div>
  );
};

export default BlogList;
