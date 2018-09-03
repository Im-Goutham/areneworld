import React, { Component } from 'react';


class HeaderComponent extends Component {

  constructor(){
      super();
      this.state = {
          loading: true
      }
  }

  componentDidMount(){
      this.setState({loading:false})
  }
  render() {
        return (
            <header id="hero-area" data-stellar-background-ratio="0.5">
            {/* Navbar Start */}
            <nav className="navbar navbar-expand-lg fixed-top scrolling-navbar indigo">
              <div className="container">
                {/* Brand and toggle get grouped for better mobile display */}
                <div className="navbar-header">
                  <a href="/" className="navbar-brand"><img className="img-fulid" src="img/logo.jpg" style={{width: 150}} alt /></a>
                  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#main-navbar" aria-controls="main-navbar" aria-expanded="false" aria-label="Toggle navigation">
                    <i className="lnr lnr-menu" />
                  </button>
                </div>
                <div className="collapse navbar-collapse" id="main-navbar">
                  <ul className="navbar-nav mr-auto w-100 justify-content-end">
                    <li className="nav-item">
                      <a className="nav-link page-scroll" href="#hero-area">Home</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link page-scroll" href="#services">Services</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link page-scroll" href="#features">Features</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link page-scroll" href="#portfolios">Works</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link page-scroll" href="#pricing">Pricing</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link page-scroll" href="#team">Team</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link page-scroll" href="#contact">Contact</a>
                    </li>
                  </ul>
                </div>
              </div>
              {/* Mobile Menu Start */}
              <ul className="mobile-menu">
                <li>
                  <a className="page-scroll" href="#hero-area">Home</a>
                </li>
                <li>
                  <a className="page-scroll" href="#services">Services</a>
                </li>
                <li>
                  <a className="page-scroll" href="#features">Features</a>
                </li>
                <li>
                  <a className="page-scroll" href="#portfolios">Works</a>
                </li>
                <li>
                  <a className="page-scroll" href="#pricing">Pricing</a>
                </li>
                <li>
                  <a className="page-scroll" href="#team">Team</a>
                </li>
                <li>
                  <a className="page-scroll" href="#blog">Blog</a>
                </li>
                <li>
                  <a className="page-scroll" href="#contact">Contact</a>
                </li>
              </ul>
              {/* Mobile Menu End */}
            </nav>
            {/* Navbar End */}
            <div className="container">
              <div className="row justify-content-md-center">
                <div className="col-md-10">
                  <div className="contents text-center">
                    <h1 className="wow fadeInDown" data-wow-duration="1000ms" data-wow-delay="0.3s">Creating your space. Detail by detail.</h1>
                    <p className="lead  wow fadeIn" data-wow-duration="1000ms" data-wow-delay="400ms"> </p>

                  </div>
                </div>
              </div>
            </div>
          </header>
        );


  }
}

export default HeaderComponent;
