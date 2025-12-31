import React from "react";
import { useParams } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./PropertyPage.css";
import propertiesData from "../../data/properties.json"; // Ensure this path is correct

const PropertyPage = () => {
  const { id } = useParams(); // Get property ID from URL
  const property = propertiesData.properties.find((prop) => prop.id === id);

  console.log("Property ID from URL:", id); // Debugging
  console.log("Fetched Property:", property); // Debugging

  if (!property) {
    return <div className="property-error">Property not found.</div>;
  }

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="property-page">
      {/* Header */}
      <header className="property-header">
        <h1>{property.type}</h1>
        <p>{property.location}</p>
      </header>

      {/* Image Slider */}
      <section className="property-slider">
        <Slider {...sliderSettings}>
          {property.pictures?.map((picture, index) => (
            <div key={index}>
              <img src={picture} alt={`Property ${index + 1}`} />
            </div>
          ))}
        </Slider>
      </section>

      {/* Property Details */}
      <section className="property-details">
        <h2>Property Details</h2>
        <ul>
          <li>
            <strong>Price:</strong> {property.price?.toLocaleString()} USD
          </li>
          <li>
            <strong>Type:</strong> {property.type || "N/A"}
          </li>
          <li>
            <strong>Bedrooms:</strong> {property.bedrooms || "N/A"}
          </li>
          <li>
            <strong>Tenure:</strong> {property.tenure || "N/A"}
          </li>
          <li>
            <strong>Added on:</strong> {`${property.added?.day} ${property.added?.month} ${property.added?.year}`}
          </li>
          <li>
            <strong>Postal Code:</strong> {property.postalCode || "N/A"}
          </li>
        </ul>
      </section>

      {/* Property Description */}
      <section className="property-description">
        <h2>About This Property</h2>
        <p>{property.description || "No description available."}</p>
      </section>

      {/* Location */}
      <section className="property-location">
        <h2>Location</h2>
        <iframe
          title="Property Location"
          src={property.map}
          allowFullScreen
          loading="lazy"
        ></iframe>
      </section>

      {/* Footer */}
      <footer className="property-footer">
        <p>&copy; 2026 PropFind . All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default PropertyPage;
