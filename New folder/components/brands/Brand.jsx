import React from 'react'
import "./brand.css"
import ca from "../../assets/brands/ca.jpg"
import mdh from "../../assets/brands/mdh.png"
import ev from "../../assets/brands/ev.png"
import bd from "../../assets/brands/bd.jpg"
import ram from "../../assets/brands/ram.png"
import tata from "../../assets/brands/tata.png"
import es from "../../assets/brands/es.jpeg"
import ac from "../../assets/brands/ac.jpg"
function Brand() {
  return (
    <div>
      <section className="spice-slider">
      <h3 className="slider-title">Trusted Indian Spice Brands</h3>

      <div className="slider">
        <div className="slide-track">

          <div className="slide">
            <img src={mdh} alt="MDH" />
          </div>

          <div className="slide">
            <img src={ev} alt="Everest" />
          </div>

          <div className="slide">
            <img src={ca} alt="Catch" />
          </div>

          <div className="slide">
            <img src={bd} alt="Badshah" />
          </div>

          <div className="slide">
            <img src={tata} alt="Tata Sampann" />
          </div>

          <div className="slide">
            <img src={ram} alt="Ramdev" />
          </div>

          <div className="slide">
            <img src={es} alt="Eastern" />
          </div>

          <div className="slide">
            <img src={ac} alt="Aachi" />
          </div>

          {/* Duplicate for smooth loop */}
          <div className="slide">
            <img src={mdh} alt="MDH" />
          </div>

          <div className="slide">
            <img src={ev} alt="Everest" />
          </div>

        </div>
      </div>
    </section>

    </div>
  )
}

export default Brand
