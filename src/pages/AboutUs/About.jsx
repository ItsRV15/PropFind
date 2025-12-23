import React from "react";
import "./About.css";

export default function AboutUs() {
  const teamMembers = [
    { name: "Jane Doe", role: "Founder & CEO", image: "AboutUs/image1.jpg" },
    { name: "John Smith", role: "Head of Operations", image: "AboutUs/image2.jpg" },
    { name: "Alan White", role: "Customer Support Lead", image: "AboutUs/image3.jpg" },
    { name: "David Josh", role: "Customer Support Assistant Lead", image: "AboutUs/image4.jpg" }
  ];

  return (
    <div className="about-page">
      
      <header className="about-header">
  {/* Background Video */}
  <video
    className="header-video"
    autoPlay
    muted
    loop
    playsInline
  >
    <source src="/AboutUs.mp4" type="video/mp4" />
    Your browser does not support the video tag.
  </video>

  {/* Overlay Content */}
  <div className="header-overlay">
    <div className="container">
      <h1>Welcome to PropFind</h1>
      <p>Your journey to finding the perfect property starts here</p>
    </div>
  </div>
</header>


      <section className="about-content">
        <div className="container">
          <div className="about-cards">
            <div className="card">
              <h2>Who We Are</h2>
              <p>
                PropFind is a modern real estate platform dedicated to bridging the gap between dreams and reality. 
                Whether you're buying, renting, or investing, we provide a seamless experience tailored to your needs.
              </p>
            </div>
            <div className="card">
              <h2>Our Mission</h2>
              <p>
                To empower individuals and businesses with the tools, insights, and opportunities to make confident property decisions.
              </p>
            </div>
            <div className="card">
              <h2>Our Values</h2>
              <p>
                Transparency, trust, and innovation define who we are. We prioritize our customers, ensuring a smooth and secure experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="why-us-section">
        <div className="container">
          <h2>Why Choose propFind?</h2>
          <div className="features-grid">
            <div className="feature">
              <i className="fas fa-home"></i>
              <h3>Extensive Listings</h3>
              <p>
                Discover verified properties with rich details, from high-quality images to comprehensive descriptions.
              </p>
            </div>
            <div className="feature">
              <i className="fas fa-search"></i>
              <h3>Advanced Search Tools</h3>
              <p>
                Filter properties by location, type, budget, and more, tailored to meet your exact preferences.
              </p>
            </div>
            <div className="feature">
              <i className="fas fa-headset"></i>
              <h3>Exceptional Support</h3>
              <p>
                Our team is ready to assist you every step of the way, ensuring a smooth and delightful experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="team-section">
        <div className="container">
          <h2>Meet Our Team</h2>
          <div className="team-grid">
            {teamMembers.map((member, index) => (
              <div key={index} className="team-member">
                <img src={member.image} alt={member.name} />
                <h3>{member.name}</h3>
                <p>{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="contact-footer">
        <p>&copy; 2025 PropFind. All rights reserved.</p>
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
