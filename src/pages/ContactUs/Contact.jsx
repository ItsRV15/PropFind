
import React from "react";
import "./contact.css";

export default function Contact() {
  return (
    <div className="page-wrapper">
      <div className="main-content">
        <div className="contact-container">
          <h1 className="contact-heading">Contact Us</h1>
          <p className="contact-subheading">
            Have questions or feedback? We'd love to hear from you!
          </p>
          <form className="contact-form">
            {/* Name Field */}
            <div className="form-group">
              <label htmlFor="name" className="form-label">Name</label>
              <input
                type="text"
                id="name"
                className="form-input"
                placeholder="Enter your name"
                required
              />
            </div>

            {/* Phone Number Field */}
            <div className="form-group">
              <label htmlFor="phone" className="form-label">Phone Number</label>
              <input
                type="tel"
                id="phone"
                className="form-input"
                placeholder="Enter your phone number"
                required
                pattern="[0-9]*"
                onKeyPress={(e) => {
                  if (!/[0-9]/.test(e.key)) {
                    e.preventDefault(); // Prevent non-numeric input
                  }
                }}
              />
            </div>

            {/* Email Field */}
            <div className="form-group">
              <label htmlFor="email" className="form-label">Email</label>
              <input
                type="email"
                id="email"
                className="form-input"
                placeholder="Enter your email"
                required
              />
            </div>

            {/* Message Field */}
            <div className="form-group">
              <label htmlFor="message" className="form-label">Message</label>
              <textarea
                id="message"
                className="form-input"
                placeholder="Enter your message"
                rows="4"
                required
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="form-group">
              <button type="submit" className="submit-button">Submit</button>
            </div>
          </form>
          {/* Additional Info */}
          <div className="additional-info">
            <h2>Our Address</h2>
            <p>220  PropFind Blvd, Suite 101<br />Citytown, ST 56789</p>
            <h2>Customer Support</h2>
            <p>Email: <a href="mailto:support@propfind.com">support@propfind.com</a></p>
            <p>Phone: <a href="tel:+1234567890">+1 (234) 567-890</a></p>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <footer className="contact-footer">
        <p>&copy; 2026 PropFind. All rights reserved.</p>
        <p>
          Follow us on{" "}
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            Facebook
          </a>{" "}
          |{" "}
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            Twitter
          </a>{" "}
          |{" "}
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            Instagram
          </a>
        </p>
      </footer>
    </div>
  );
}
