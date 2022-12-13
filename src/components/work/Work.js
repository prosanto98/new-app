import React from 'react'
import "./work.css"
function Work() {
  return (
    <div className="work">
    <div className="container">
        <div className="work-details change-work">
            <div className="we-work">
                <h2>How we work</h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
                </p>
                    
                <div className="touch-1">
                    <a href="#get-touch">Get in touch with us</a>
                    <i className="fa-solid arrow fa-arrow-right"></i>
                </div>
            </div>
            <div className="work-section">
                <div className="card-1">
                    <img src="images/pointer 1.png" alt=""/>
                    <h5>Strategy</h5>
                    <p>Euismod faucibus turpis eu gravida <br/> mi. Pellentesque et velit aliquam .</p>
                </div>
                <div className="card-2 card">
                    <img src="images/pointer 2.png" alt=""/>
                    <h5>Wireframing</h5>
                    <p>Euismod faucibus turpis eu gravida <br/> mi. Pellentesque et velit aliquam .</p>
                </div>
                <div className="card-3 gap">
                    <img src="images/pointer 3.png" alt=""/>
                    <h5>Wireframing</h5>
                    <p>Euismod faucibus turpis eu gravida <br/> mi. Pellentesque et velit aliquam .</p>
                </div>
                <div className="card-4 gap card">
                    <img src="images/pointer 4.png" alt=""/>
                    <h5>Wireframing</h5>
                    <p>Euismod faucibus turpis eu gravida <br/> mi. Pellentesque et velit aliquam .</p>
                </div>
            </div>
        </div>
    </div>
</div>
  )
}

export default Work