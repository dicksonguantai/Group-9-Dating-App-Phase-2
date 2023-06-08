const fs = require('fs');

// First blog post
const blogPost1 = {
    title: "Unleash Your Potential: The Path to Self-Improvement & Personal Growth in Dating",
    author: "TechLover",
    date: "2023-06-07",
    categories: ["Self-improvement & Personal Growth"],
    tags: ["Peace, Self-Love"],
    content: "In the world of dating, personal growth and self-improvement play a pivotal role in building meaningful connections and finding long-lasting relationships. Engaging in self-reflection, setting goals, and working on oneself can enhance not only your dating life but also your overall well-being. In this blog post, we will explore the importance of self-improvement and personal growth in the context of dating and provide actionable tips to help you embark on a transformative journey.",
    image: "file:///C:/Users/Hp/Downloads/6-Tips-For-Choosing-Swipe-Right-Worthy-Photos%20(1).svg"
  };
  
  // Second blog post
  const blogPost2 = {
    title: "Crack the Code of Love Languages: Unleash Your Passion Potential!",
    author: "TechLover",
    date: "2023-06-08",
    categories: ["Dating Tips"],
    tags: ["Love"],
    content: "Welcome, lovebirds and romance seekers, to another sizzling edition of our dating app blog section! Today, we're diving deep into the enigmatic world of love languages. Just like a secret recipe, understanding your partner's love language is the key to unlocking a connection that sizzles with passion and romance. So, get ready to ignite the flames of desire as we decode the mysteries of love languages!",
    image: "file:///C:/Users/Hp/Downloads/Online-Dating-Photography-_-Photos-for-Dating-Apps%20(2).svg"
  };
  
  // Third blog post
  const blogPost3 = {
    title: "The Dating Landscape Unveiled: Exploring the Latest Trends & Insights",
    author: "Techlover",
    date: "2023-06-09",
    categories: ["Dating Trends & Insights"],
    tags: ["tips"],
    content: "In the ever-evolving world of dating, staying informed about the latest trends and insights is crucial for success. From digital advancements to shifting societal norms, understanding the dynamics of modern dating can empower you to make informed choices and navigate the dating landscape with confidence. In this blog post, we will delve into the exciting realm of dating trends and provide valuable insights to help you stay ahead of the game.",
    image: "file:///C:/Users/Hp/Downloads/Online-Dating-Photography-_-Photos-for-Dating-Apps-_1_%20(2).svg"
  };
  
  // Fourth blog post
  const blogPost4 = {
    title: "Building Strong Foundations: Essential Relationship Advice for Lasting Love",
    author: "TechLover",
    date: "2023-06-10",
    categories: ["Relationdship Advice"],
    tags: ["Love, Tips"],
    content: "Relationships are an intricate dance between two individuals, requiring effort, understanding, and commitment. Whether you're in the early stages of a new relationship or seeking to strengthen an existing one, relationship advice can serve as a guiding light. In this blog post, we will delve into the realm of relationship advice and provide essential insights to help you build strong foundations for lasting love.",
    image: "file:///C:/Users/Hp/Downloads/The-Perfect-Dating-App-For-Your-Zodiac-Sign_-According-To-Astrology%20(2).svg"
  };

// Convert the object to a JSON string
const jsonString = JSON.stringify(blogPost, null, 4);

// Write the JSON data to a file
fs.writeFileSync('blogPost.json', jsonString);

console.log('JSON data written to file: blogPost.json');

// Read the contents of the file
const fileData = fs.readFileSync('blogPost.json', 'utf-8');

// Parse the JSON data
const parsedData = JSON.parse(fileData);

// Display the parsed JSON data
console.log('JSON data from file:');
console.log(parsedData);
