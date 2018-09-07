import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';

class Footer extends Component {
  constructor(){
     super();
     this.route = this.route.bind(this);
  }
  route(path){
     this.props.history.push('/'+path);
  }
  render() {
    return (
      <footer className="footer-area">
        <div className="footer-top bg-1">
          <div className="container">
            <div className="row">
              <div className="col-lg-5 col-sm-6 col-12">
                <div className="footer-widget footer-logo">
                  <img style={{width:'200px'}} src="assets/images/logo.png" alt />
                  <p>Flush door & Furniture Manufacturing Interior designing & 3d Visualization Timber & Plywood Wholesale Supplier PVC Laminats Wholesale & Retail</p>
                  <h4>Working Hours: </h4>
                  <span>Mon - Sat 8:00 - 18:00 (Sunday off)</span>
                  <ul>
                    <li><a href="#"><i className="fa fa-facebook" /></a></li>
                    <li><a href="#"><i className="fa fa-twitter" /></a></li>
                    <li><a href="#"><i className="fa fa-linkedin" /></a></li>
                    <li><a href="#"><i className="fa fa-google-plus" /></a></li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-4 col-sm-6 col-12">
                <div className="footer-widget footer-contact">
                  <h4 className="widget-title">GET IN TOUCH</h4>
                  <ul>
                    <li><i className="fa fa-home" /> Workshop: Pendurthi, Visakhaptnam, Andhra Pradesh, INDIA</li>
                    <li><i className="fa fa-phone" />Sales: +91-7730915052</li>
                    <li><i className="fa fa-fax" /> Support: +91-9121097659</li>
                    <li><i className="fa fa-envelope" /> support@areneword.com</li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6 col-12">
                <div className="footer-widget footer-menu">
                  <h4 className="widget-title">Services</h4>
                  <ul>
                    <li><a style={{cursor:'pointer'}} onClick={this.route.bind(this,'')}>Home</a></li>
                    <li><a style={{cursor:'pointer'}} onClick={this.route.bind(this,'about')}>About Us</a></li>
                    <li><a style={{cursor:'pointer'}} onClick={this.route.bind(this,'project')}>Our Works</a></li>
                    <li><a style={{cursor:'pointer'}} onClick={this.route.bind(this,'team')}>Team</a></li>
                    <li><a style={{cursor:'pointer'}} onClick={this.route.bind(this,'contact')}>Contact</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bootem">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <p>©  Copyright © All rights reserved </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default withRouter(Footer);
