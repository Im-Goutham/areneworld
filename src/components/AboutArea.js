import React, { Component } from 'react';


class AboutArea extends Component {
  render() {
    return (
      <div className="about-area ptb-120">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-12">
              <div className="about-wrap">
                <h2>WELCOME TO ARENE INTERIOR</h2>
                <h3>We Are The Leader In The Architectural</h3>
                <p>Flush door & Furniture Manufacturing Interior designing & 3d Visualization Timber & Plywood Wholesale Supplier PVC Laminats Wholesale & Retail</p>
                <div className="row">
                  <div className="col-md-4 col-sm-6 col-12">
                    <div className="about-content">
                      <h4><span className="counter">5</span><span> + </span></h4>
                      <p>Experience Years</p>
                    </div>
                  </div>
                  <div className="col-md-4 col-sm-6 col-12">
                    <div className="about-content">
                      <h4><span className="counter">45</span><span> + </span></h4>
                      <p>Projects</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 d-none d-lg-block">
              <div className="about-img">
                <img src="assets/images/about/1.jpg" alt />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AboutArea;
