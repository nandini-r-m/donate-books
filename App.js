// App.js
import React from "react";
import Navbar from "./Navbar";
import Slider from "react-slick";
import FeatureCard from "./FeatureCard";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import "./App.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Image1 from "./1.png";
import Image2 from "./2.png";
import Image3 from "./3.png";
import Image4 from "./4.png";
import Image5 from "./5.png";

// Custom Arrow Components (define these first)
const SampleNextArrow = ({ className, style, onClick }) => (
  <div
    className={className}
    style={{ ...style, display: "flex", justifyContent: "center", alignItems: "center", background: "black", borderRadius: "50%", width: "40px", height: "40px", color: "white", zIndex: 1 }}
    onClick={onClick}
  >
    <FaArrowRight />
  </div>
);

const SamplePrevArrow = ({ className, style, onClick }) => (
  <div
    className={className}
    style={{ ...style, display: "flex", justifyContent: "center", alignItems: "center", background: "black", borderRadius: "50%", width: "40px", height: "40px", color: "white", zIndex: 1 }}
    onClick={onClick}
  >
    <FaArrowLeft />
  </div>
);
function App() {
  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  const images = [
    Image1,
    Image2,
    Image3,
    Image4,
    Image5
  ];

  return (
    <div>
      <Navbar />

      {/* Carousel */}
      <Slider {...sliderSettings}>
        {images.map((image, index) => (
          <div key={index}>
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              className="slider-image"
            />
          </div>
        ))}
      </Slider>

      {/* Main Content */}
      <div className="app-container">
        <section id="about" className="section about-section">
          <h1>The book exchange program always seeks for good books.</h1>
          <p>
            Books4You is a vibrant community of young readers who love to share
            and exchange books. Whether you're a fantasy enthusiast, a romance
            novel lover, or a mystery solver, there's something here for
            everyone. Books can make anyone's life enjoyable and that is what
            has happened. Women and men have found their fictional friends as
            well as real-life friends because of this wonderful book exchange
            program. Fill in the form to get a book at your doorstep according
            to your reading habits. We have full faith that you will fall in
            love with the annotated books or even new books.
          </p>
        </section>

        <button
          className="donate-button"
          onClick={() => alert("Thank you for your interest in donating!")}
        >
          Donate Now
        </button>

        {/* Feature Cards Section */}
        <section id="services" className="section feature-cards-container">
          <h2>Our Services</h2>
          <div className="service-cards">
          {[
            {
              title: "🔄 Exchange Books",
              description:
                "Trade your finished books for new adventures! Our simple point system makes exchanging fair and fun.",
            },
            {
              title: "👥 Meet Book Lovers",
              description:
                "Connect with other readers in your area and discover your next favorite book through recommendations.",
            },
            {
              title: "📱 Easy to Use",
              description:
                "List your books, browse available titles, and arrange exchanges - all through our simple platform.",
            },
          ].map((feature, index) => (
            <FeatureCard
              key={index}
              title={feature.title}
              description={feature.description}
            />
          ))}
          </div>
        </section>

        {/* Testimonial Section */}
        <section id="testimonials" className="section testimonials-section">
          <h2>What Our Users Say</h2>
          <div className="testimonials">
            {[
              {
                quote:
                  "Books4You has completely changed the way I read! I love being able to exchange books and connect with other readers.",
                author: "Jane Doe",
              },
              {
                quote:
                  "An amazing platform! I’ve found so many great books and made friends along the way.",
                author: "John Smith",
              },
            ].map((testimonial, index) => (
              <blockquote key={index}>
                {testimonial.quote}
                <cite>- {testimonial.author}</cite>
              </blockquote>
            ))}
          </div>
        </section>

        {/* Blog Section */}
        <section id="blog" className="section blog-section">
          <h2>From Our Blog</h2>
          <div className="blogs">
            {[
              {
                title: "How to Make the Most of Book Exchanges",
                description:
                  "Discover tips and tricks to find the best books and connect with fellow readers.",
              },
              {
                title: "Top 10 Must-Read Books This Year",
                description:
                  "Check out our curated list of the top 10 books that you shouldn’t miss this year.",
              },
              {
                title: "Classics You Must Not Ignore",
                description: 
                "Suzy describes her experience with Gatsby, Little Women, Malgudi Days, and Animal Farm."
              },
            ].map((blog, index) => (
              <div key={index} className="blog-card">
                <h3>{blog.title}</h3>
                <p>{blog.description}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
