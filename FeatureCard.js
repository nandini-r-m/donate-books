// src/FeatureCard.js
import React from "react";
import "./FeatureCard.css"; // Import the CSS for styling

const FeatureCard = ({ title, description }) => {
  return (
    <div className="feature-card">
      <h3 className="feature-title">{title}</h3>
      <p className="feature-description">{description}</p>
    </div>
  );console.log('FeatureCard component rendered');
};

export default FeatureCard;
