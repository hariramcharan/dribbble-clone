import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-column">
          <h4>For designers</h4>
          <ul>
            <li>Hire talent</li>
            <li>Inspiration</li>
            <li>Advertising</li>
            <li>Blog</li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>About</h4>
          <ul>
            <li>Careers</li>
            <li>Support</li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2024 Dribbble</p>
        <div className="footer-links">
          <a href="#">Terms</a>
          <a href="#">Privacy</a>
          <a href="#">Cookies</a>
          <a href="#">Jobs</a>
          <a href="#">Designers</a>
          <a href="#">Freelancers</a>
          <a href="#">Tags</a>
          <a href="#">Places</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
