import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

const Blog = () => {
  // Sample blog post data
  const blogPosts = [
    {
      id: 1,
      title: 'The Importance of Time Management',
      author: 'Alice Johnson',
      date: 'April 15, 2024',
      image: 'https://via.placeholder.com/300x200',
      content: 'Effective time management is crucial for success in both personal and professional life. It helps individuals prioritize tasks, allocate resources efficiently, and achieve their goals. In this blog post, we explore various strategies and tools for improving time management skills.',
    },
    {
      id: 2,
      title: 'The Art of Problem Solving',
      author: 'Bob Smith',
      date: 'April 14, 2024',
      image: 'https://via.placeholder.com/300x200',
      content: 'Problem-solving is an essential skill in all aspects of life, from resolving conflicts to overcoming challenges in the workplace. This blog post delves into the problem-solving process, including identifying issues, brainstorming solutions, and implementing effective strategies.',
    },
    {
      id: 3,
      title: 'Exploring Nature: Benefits for Mind and Body',
      author: 'Emily Brown',
      date: 'April 13, 2024',
      image: 'https://via.placeholder.com/300x200',
      content: 'Spending time in nature has numerous benefits for mental and physical well-being. From reducing stress levels to improving cognitive function, nature has a profound impact on our overall health. In this blog post, we discuss the therapeutic effects of nature and ways to incorporate outdoor activities into our daily lives.',
    },
    {
      id: 4,
      title: 'The Power of Positive Thinking',
      author: 'David Wilson',
      date: 'April 12, 2024',
      image: 'https://via.placeholder.com/300x200',
      content: 'Positive thinking can transform our outlook on life and help us overcome obstacles with resilience and optimism. By cultivating a positive mindset, we can increase our self-confidence, enhance our relationships, and achieve greater success. This blog post explores the science behind positive thinking and offers practical tips for fostering a positive attitude.',
    },
    {
      id: 5,
      title: 'Tips for Effective Communication',
      author: 'Sophia Rodriguez',
      date: 'April 11, 2024',
      image: 'https://via.placeholder.com/300x200',
      content: 'Effective communication is essential for building strong relationships, both personally and professionally. This blog post provides practical tips for improving communication skills, including active listening, nonverbal cues, and conflict resolution techniques.',
    },
    {
      id: 6,
      title: 'The Benefits of Regular Exercise',
      author: 'Michael Thompson',
      date: 'April 10, 2024',
      image: 'https://via.placeholder.com/300x200',
      content: 'Regular exercise is vital for maintaining physical health and mental well-being. From reducing the risk of chronic diseases to boosting mood and energy levels, exercise offers a wide range of benefits. In this blog post, we explore the advantages of incorporating regular physical activity into our daily routines.',
    },
    {
      id: 7,
      title: 'Healthy Eating Habits for a Balanced Lifestyle',
      author: 'Olivia Davis',
      date: 'April 9, 2024',
      image: 'https://via.placeholder.com/300x200',
      content: 'A balanced diet is essential for overall health and vitality. By adopting healthy eating habits, we can fuel our bodies with the nutrients they need to function optimally. This blog post discusses the importance of balanced nutrition and offers practical tips for making healthier food choices.',
    },
    {
      id: 8,
      title: 'The Impact of Technology on Society',
      author: 'Daniel Martinez',
      date: 'April 8, 2024',
      image: 'https://via.placeholder.com/300x200',
      content: 'Technology plays a significant role in shaping modern society, influencing how we work, communicate, and live our daily lives. This blog post explores the impact of technology on various aspects of society, from the economy to education, and examines both the benefits and challenges of technological advancement.',
    },
  ];

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 3;

  // Pagination logic
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = blogPosts.slice(indexOfFirstPost, indexOfLastPost);

  // Change page
  const paginate = pageNumber => setCurrentPage(pageNumber);

  // Search state and function
  const [searchTerm, setSearchTerm] = useState('');

  const searchHandler = event => {
    setSearchTerm(event.target.value);
    setCurrentPage(1); // Reset pagination when searching
  };

  // Filter blog posts based on search term
  const filteredPosts = blogPosts.filter(post =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Calculate number of pages
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);

  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto pt-20 px-6">
        <h1 className="text-3xl font-bold text-center mb-6">Welcome to Our Blog</h1>

        {/* Search box */}
        <input
          type="text"
          placeholder="Search blogs..."
          className="w-full mb-6 p-3 rounded-md border border-gray-300 focus:outline-none focus:border-red-500"
          value={searchTerm}
          onChange={searchHandler} // Bind the searchHandler function to the onChange event
        />

        {/* Blog posts */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {currentPosts.map(post => (
            <div key={post.id} className="bg-white shadow-md rounded-md">
              <img src={post.image} alt={post.title} className="w-full h-40 object-cover rounded-t-md" />
              <div className="p-6">
                <h2 className="text-xl font-semibold mb-4">{post.title}</h2>
                <p className="text-gray-600 mb-4">Author: {post.author}</p>
                <p className="text-gray-600 mb-4">Date: {post.date}</p>
                <p className="text-gray-800">{post.content}</p>
                <Link to={`/readmore/${post.id}`}>
                  <button className="mt-4 text-white bg-gradient-to-r from-red-500 to-red-800 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 font-semibold px-4 py-2 rounded-md transition duration-300 ease-in-out">Read more</button>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center mt-8">
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index}
              onClick={() => paginate(index + 1)}
              className={`mx-1 px-4 py-2 rounded-md focus:outline-none ${currentPage === index + 1 ? 'bg-red-500 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
            >
              {index + 1}
            </button>
          ))}
        </div>

        <Footer />
      </div>
    </>
  );
};

export default Blog
