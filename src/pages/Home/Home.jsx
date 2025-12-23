import Header from "../../components/Header/Header";
import "./home.css";
import propertiesData from '../../data/properties.json';
import PropertySlider from "../../components/PropertySlider/PropertySlider";

const properties = propertiesData.properties;
// HomePage Component
const HomePage = () => {
  return (
    <div className="homepage">
      {/* Header Section */}
      {/* Displays the site header */}
      <Header />

    <section className="hero">
        {/* Background Video */}
        <video
          className="hero-video"
          autoPlay
          muted
          loop
          playsInline
          >
          <source src="/home-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Overlay Content */}
       <div className="hero-overlay">
        <div className="hero-content">
          <h1>Find Your Dream Home</h1>
          <p>
            Explore the best properties at unbeatable prices. Whether you're looking for
            a house, flat, or apartment, we've got you covered.
          </p>
        </div>
       </div>
</section>



      {/* Main Content */}
      <div className="slider-content-container">
        {/* Property Slider Section */}
        {/* Displays a slider showcasing property images */}
        <div className="slider-section">
          <PropertySlider properties={properties} />
        </div>

        {/* Content Section */}
        {/* Highlights the benefits of using the platform */}
        <div className="content-section">
          <h2>Why Choose Us?</h2>
          <p>
            Discover your dream property with our exclusive listings. Whether you're looking for a cozy home or a luxury estate, we have something for everyone.
          </p>
          <ul>
            <li>Wide range of properties</li> {/* Benefit 1 */}
            <li>Expert advice</li> {/* Benefit 2 */}
            <li>Exceptional customer service</li> {/* Benefit 3 */}
          </ul>
        </div>
      </div>

      {/* Footer Section */}
      <footer className="footer">
        <div className="footer-content">
          {/* Footer Text */}
          <p>&copy; 2025 EstateEase. All Rights Reserved.</p>
          <p>Follow us on:</p>
          {/* Social Media Links */}
          <div className="social-icons">
            <a href="#">Facebook</a> | <a href="#">Twitter</a> | <a href="#">Instagram</a>
          </div>
        </div>
      </footer>
      



      
      
      


      </div>
  );
}

export default HomePage;