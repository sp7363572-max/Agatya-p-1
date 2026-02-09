import React from "react";
import "./contact.css";

function Contact() {
  return (
    <section className="contact-section">
      <div
        className="image"
        style={{
          backgroundImage:
            'url("https://i.pinimg.com/1200x/62/68/01/6268010786a08faeabd443f7a4ed31dd.jpg")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          height: "400px",
        }}
      >
        <div className="image-content">
          <h1>Contact Us</h1>
          <p>We’d love to hear from you. Get in touch with us anytime.</p>
        </div>
      </div>
      <div className="contact-container">

        {/* <div className="map-full">
          <img src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d121059.04711156077!2d73.78056543154413!3d18.524598599502376!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf2e67461101%3A0x828d43bf9d9ee343!2sPune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1770373708069!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" 
          alt="Map"
           />
        </div> */}


        {/* LEFT section  */}
        <div className="contact-left fade-left">
          <h1>We’d Love to Hear From You!</h1>
          <p>
            Whether you have a question, need a product quote, or want to
            discuss a bulk order — our team is ready to assist you. Reach out
            using the form below or contact us directly through phone or email.
          </p>

          <div className="divider"></div>

          <div className="info-item">
            <div className="icon-circle">
              <img
                width="30"
                height="30"
                src="https://img.icons8.com/3d-fluency/94/map-pin.png"
                alt="map-pin"
              />
            </div>
            <div>
              <h4>Our Office</h4>
              <span>
                35- Shilpankunj Sadhu vaswani Road Near. University Road Rajkot
                360005
              </span>
            </div>
          </div>

          <div className="info-item">
            <div className="icon-circle">
              <img
                width="25"
                height="25"
                src="https://img.icons8.com/ios/50/email-open.png"
                alt="email-open"
              />
            </div>
            <div>
              <h4>Email us</h4>
              <span>Sales@dailybitesexport.com</span>
            </div>
          </div>

          <div className="info-item">
            <div className="icon-circle"><img 
            width="25" 
            height="25" 
            src="https://img.icons8.com/color/48/outgoing-call.png"
             alt="outgoing-call"
             />
             </div>
            <div>
              <h4>Call us</h4>
              <span>+91 90331 09154</span>
            </div>
          </div>
        </div>

        {/* RIGHT section */}
        <div className="contact-right fade-right">
          <div className="form-card">
            <h2>Send us a message</h2>
            <p>
              Have a question or need a quote? Send us a message and we’ll get
              back to you shortly!
            </p>

            <form>
              <label>Name</label>
              <input type="text" placeholder="Name" />

              <label>Email</label>
              <input type="email" placeholder="Email" />

              <label>Contact Number</label>
              <input type="tel" placeholder="Contact Number" />

              <label>City</label>
              <input type="text" placeholder="City" />

              <label>Message</label>
              <textarea placeholder="Message"></textarea>

              <button type="submit">Send Message</button>
            </form>
          </div>
        </div>
      </div>
      {/* MAP SECTION */}
<div className="map-section">
  <h2>Find Us on Map</h2>

  <div className="map-container">
    <iframe
      src="https://www.google.com/maps?q=Pune,India&output=embed"
      width="100%"
      height="350"
      style={{ border: 0 }}
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      title="Office Location"
    ></iframe>
  </div>
</div>

    </section>
    
  );
}

export default Contact;
