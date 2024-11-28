import React from "react";
import "./style.css";

const About = () => {
  return (
    <div class= "all">
        <div class="cont">
        
        
    <h1 style= {{borderBottom: "2px solid #000", paddingBottom: "5px"}} class= "titel">About Global Post News</h1>
    <p>
      Welcome to <strong>Global Post News</strong>! Our mission is to keep you updated with the latest and most reliable news from around the globe, across various categories.
    </p>

    <h2>Features</h2>
    <ul>
      <li><strong>Real-Time News Updates:</strong> Stay informed with breaking news and updates from trusted sources.</li>
      <li><strong>Category-Wise Segmentation:</strong> Explore news across various categories, including:
        <ul>
          <li>Business</li>
          <li>Entertainment</li>
          <li>Health</li>
          <li>Science</li>
          <li>Sports</li>
          <li>Technology</li>
        </ul>
      </li>
      <li><strong>User Authentication:</strong> Register and log in to access personalized features.</li>
      <li><strong>Search Functionality:</strong> Easily find news articles by keywords.</li>
      <li><strong>Responsive Design:</strong> Access news on any device, whether it's a phone, tablet, or desktop.</li>
      <li><strong>Bookmarking:</strong> Save articles to read later (coming soon).</li>
    </ul>

    <h2>How It Works</h2>
    <ol>
      <li><strong>Log In/Register:</strong> Start by creating an account or logging into your existing account.</li>
      <li><strong>Navigate Categories:</strong> Use the navbar to explore news by category.</li>
      <li><strong>Read and Stay Updated:</strong> Click on articles to read full stories from trusted sources.</li>
      <li><strong>Logout:</strong> Securely log out when you're done browsing.</li>
    </ol>

    <h2>Why Choose Us?</h2>
    <p>
      Global Post News offers a clean, user-friendly interface with up-to-date information across various domains. Whether you’re interested in financial news, scientific breakthroughs, or the latest entertainment buzz, we’ve got you covered!
    </p>

    <footer>
      <p>&copy; 2024 Global Post News. All Rights Reserved.</p>
      <p>AnuragVishwakarma || FalgunSharma || AshwinPatel </p>
    </footer>
  </div>
    </div>
    
    
  );
};

export default About;
