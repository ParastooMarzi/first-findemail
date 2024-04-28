import React from 'react';
import { useParams } from 'react-router-dom';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const ReadMore = ({ blogPosts }) => {
  const { id } = useParams();
  const post = blogPosts.find(post => post.id === parseInt(id, 10)); // Ensure to parse id as base 10

  if (!post) {
    return (
      <>
        <Navbar />
        <div className="max-w-7xl mx-auto pt-20 px-6">
          <div className="text-center text-gray-800">
            <h1 className="text-4xl font-bold mb-4">Post not found!</h1>
            <p className="text-lg">Sorry, the post you are looking for does not exist.</p>
          </div>
          <Footer />
        </div>
      </>
    );
  }

  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto pt-20 px-6">
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <img src={post.image} alt={post.title} className="w-full h-64 object-cover object-center rounded-t-lg" />
          <div className="p-6">
            <h2 className="text-3xl font-semibold mb-4 text-gray-800">{post.title}</h2>
            <p className="text-sm text-gray-600 mb-2">By {post.author} on {post.date}</p>
            <p className="text-gray-700 leading-relaxed">{post.content}</p>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default ReadMore;
