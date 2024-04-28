import React from 'react';
import ReactDOM from 'react-dom/client'; // Import ReactDOM
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import App from './App'; // Import your main App component
import SignIn from './scenes/SignIn';
import Blog from './scenes/Blog';
import SignUp from './scenes/SignUp';
import ReadMore from './scenes/ReadMore';
import ContactUs from './scenes/ContactUs';
import './index.css';
import SearchDomain from './scenes/SearchDomain';
import SearchLeak from './scenes/SearchLeak';
import SearchLogs from './scenes/SearchLogs';
import Pricingin from './scenes/Pricingin';
import Profile from './scenes/Profile';
import Indexed from './scenes/Indexed';

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

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="" element={<Navigate to="/home" />} />
        <Route path="home" element={<App />} />
        <Route path="signin" element={<SignIn />} />
        <Route path='signup' element={<SignUp />} />
        <Route path='blog' element={<Blog />} />
        <Route path='readmore/:id' element={<ReadMore blogPosts={blogPosts} />} />
        <Route path='contactus' element={<ContactUs />} />
        <Route path='domain-search' element={<SearchDomain />} />
        <Route path='leak-search' element={<SearchLeak />} />
        <Route path='logs-search' element={<SearchLogs />} />
        <Route path='pricing' element={<Pricingin />} />
        <Route path='profile' element={<Profile />} />
        <Route path='indexed' element={<Indexed />} />
      </Routes>
    </Router>
  </React.StrictMode>,
);
