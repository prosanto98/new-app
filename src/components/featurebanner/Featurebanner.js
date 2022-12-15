import React from 'react'
import "./featurebanner.css"
const Featurebanner = () => {
  return (
    <section className="banner">
        <div className="container main-banner">
            <div className="banner-text">
                <div className="banner-heading">
                    <h1>All the features </h1>
                    <h1>you need</h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
                    </p>
                    <p>
                        eiusmod tempor incididunt.
                    </p>
                    <div className="btn">
                        <a href="#view-pricing" className="view">View Pricing</a>
                        
                    </div>
                </div>
                <div className="banner-logo">
                    <img src="images/featurebanner.png" alt="banner-imag"/>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Featurebanner