import React from "react";
import "./home.css";
import d from "../../assets/images/product images/desert.png"
import veg1 from "../../assets/images/product images/veg1.jpg"
import nonveg1 from "../../assets/images/product images/nonveg1.jpg"
import vid from "../../assets/video/gt.mp4"

import logo from "../../assets/brands/agatyai.jpeg"

function Home() {
  return (
    <div>
      <section className="home-banner">     
        <div className="overflow" style={{position:"absolute", overflow:"hidden", height:"100%",width:"100%", zIndex:"0"}}>
        <div className="overlay">
        
        </div>
        </div>

        <div className="container" style={{ position: "relative", zIndex: 2 }}>
          <div className="row">
            <div className="col-lg-6 col-md-10">

              <p className="wel" style={{
                color:"rgb(255, 255, 255)",fontSize:"20px"
              }} >
                WELCOME TO AGATYA
              </p>

              <h1 className="hero-title" style={
                {color:"rgb(94, 51, 13)"}
              }>
                A Healthy <br />
                and Testy
                Bites.
              </h1>

              <p className="hero-desc display-6 fw-semibold" style={
                {color:"rgb(255, 255, 255)"}
              }>
                Agatya Foods is a trusted premium-quality solutions.
              </p>

              <button className="btn buttonc fw-bold px-4 py-2" style={{position:"relative"}} >
                Explore Products
              </button>

            </div>
          </div>
        </div>
      </section>
      <section className="products-ui">
  <div className="container-fluid">

    {/* Heading UI */}
    <div className="ui-header">
      <h2 className="ui-title-text">Where Healthy Bites Meet Tasty Bites</h2>
      <p className="ui-subtitle-text">
        Crafted dishes for every craving
      </p>
    </div>

    {/* Two Big Cards */}
    <div className="ui-grid two-cards">

      {/* Healthy Bites */}
      <div className="ui-card ui-card-lg">
        <div className="ui-image veg">
          <img src={veg1} alt="" />
        </div>
        <h3 className="ui-title-sm-text">Healthy Bites</h3>
        <p className="ui-text">
        Healthy Bites are thoughtfully prepared meals made to nourish your body without compromising on taste.
        At Agatya, we focus on balance — using fresh, natural ingredients, mindful cooking techniques, and carefully curated flavours to create food that supports a healthier lifestyle.
        </p>
        <div className="ui-button">View Menu</div>
      </div>

      {/* Tasty Bites */}
      <div className="ui-card ui-card-lg ui-highlight">
        <div className="ui-image nonveg">
          <img src={d} alt="" />
        </div>
        <h3 className="ui-title-sm-text">Tasty Bites</h3>
        <p className="ui-text">
        Tasty Bites are crafted for those moments when flavour takes the spotlight. At Agatya, we believe indulgence should be rich, satisfying, and memorable while still maintaining quality and freshness
        </p>
        <div className="ui-button">View Menu</div>
      </div>
       </div>
  </div>
</section>

<section className="split-hero">
  <div className="split-container">

    {/* LEFT CONTENT */}
    <div className="split-text">
      <h2 className="split-title">
      Nourishing Taste <br />
        Crafted with Care.
      </h2>

      <p className="split-desc">
      From farm-fresh vegan and vegetarian delights to rich, authentic non-veg creations —
      Agatya Foods delivers quality you can trust and flavour you’ll remember.
      </p>

      <button className="split-btn">
        Discover <br /> More
      </button>
    </div>

    {/* RIGHT VIDEO */}
    <div className="split-media">
      <video
        className="split-video"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src={vid} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

    </div>
  
  </div>
  
</section>

{/* Agatya Moto – Enhanced */}
<section className="agatya-moto">
  <div className="container-fluid">
    <div className="moto-grid">

      {/* Left Accent */}
      <div className="moto-accent">
        <img src={logo} alt="" />
      </div>

      {/* Right Content */}
      <div className="moto-content">
        <p className="moto-eyebrow">Our Philosophy</p>

        <h2 className="moto-heading">
          Where Healthy Bites <br />
          Meet Tasty Bites
        </h2>

        <p className="moto-description">
          At Agatya, food is crafted with purpose. From mindful sourcing to
          balanced flavours, every dish is designed to nourish your body
          while satisfying your cravings. Honest ingredients, thoughtful
          preparation, and taste you’ll remember.
        </p>

        <div className="moto-statement">
          <span></span>
          <p>
            Conscious cooking for a healthier, happier lifestyle.
          </p>
        </div>
      </div>

    </div>
  </div>
</section>



<section className="home-about">
  <div className="about-wrapper">

    <div className="about-image">
      <img
        src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c"
        alt="Healthy and tasty food"
      />
    </div>

    <div className="about-content">
      <h2>About Us</h2>

      <p>
        We believe good food should nourish the body and delight the soul.
        Every dish we create is rooted in quality, balance, and care.
      </p>

      <p>
        By combining fresh ingredients, mindful cooking, and bold flavours,
        we bring together <strong>healthy bites</strong> and
        <strong> tasty bites</strong> for modern lifestyles.
      </p>

      <p>
        Our mission is to support a
        <strong> healthy, tasty, and sustainable lifestyle</strong>.
      </p>

      {/* Owner Info */}
      <div className="owner-info">
        <img
          src="https://images.unsplash.com/photo-1607746882042-944635dfe10e"
          alt="Owner"
          className="owner-image"
        />

        <div className="owner-text">
          <span className="owner-label">Founded by</span>
          <h4 className="owner-name">Agatya Foods</h4>
          <p className="owner-role">
            Passion for food, wellness & mindful living
          </p>
        </div>
      </div>

      <a href="/about" className="about-btn">
        Learn More About Us
      </a>
    </div>

  </div>
</section>






    </div>
  );
}

export default Home;
