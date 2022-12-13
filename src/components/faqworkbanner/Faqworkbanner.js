import React from 'react'
import "./faqworkbanner.css"
const Faqworkbanner = () => {
  return (
    <section className="work-banner">
    <div className="container">
        <div className="work-details">
            <div className="p">
                <p>What we created</p>
            </div>
            <div className="p-t">
                <h2>Our Work Portfolio</h2>
                <p>
                    We help teams create great digital products by providing them with tools and technology <br/> to make the design-to-code process universally accessible.
                </p>
                <div className="social">
                    <i className="fa-brands media-fb-1 fa-facebook"></i>
                <i className="fa-brands media-link-1 fa-square-twitter"></i>
                <i className="fa-brands media-link-1 fa-instagram"></i>
                <i className="fa-brands media-link-1 fa-linkedin"></i>
                </div>
            </div>
        </div>
    </div>
</section>
  )
}

export default Faqworkbanner