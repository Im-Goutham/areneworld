import React, { Component } from 'react';


class Blog extends Component {
  render() {
    return (
      <div>
          {/* header-area start */}
          <header className="header-area bg-1" id="sticky-header">
            <div className="container">
              <div className="row">
                <div className="col-lg-3 col-md-9 col-sm-8 col-6">
                  <div className="logo">
                    <a href="index.html"><img src="assets/images/logo.png" alt /></a>
                  </div>
                </div>
                <div className="col-lg-8 d-none d-lg-block">
                  <div className="mainmenu">
                    <ul id="navigation">
                      <li><a href="javascript:void(0);">Home <i className="fa fa-angle-down" /></a>
                        <ul>
                          <li><a href="index.html">Home One</a></li>
                          <li><a href="index2.html">Home Two</a></li>
                          <li><a href="index3.html">Home Three</a></li>
                        </ul>
                      </li>
                      <li><a href="javascript:void(0);">About <i className="fa fa-angle-down" /></a>
                        <ul>
                          <li><a href="about.html">About One</a></li>
                          <li><a href="about2.html">About Two</a></li>
                          <li><a href="about3.html">About Three</a></li>
                          <li><a href="about4.html">About Four</a></li>
                        </ul>
                      </li>
                      <li><a href="javascript:void(0);">Projects <i className="fa fa-angle-down" /></a>
                        <ul>
                          <li><a href="project.html">Project One</a></li>
                          <li><a href="project2.html">Project Two</a></li>
                          <li><a href="project3.html">Project Three</a></li>
                          <li><a href="project4.html">Project Four</a></li>
                        </ul>
                      </li>
                      <li className="active"><a href="javascript:void(0);">Bolg <i className="fa fa-angle-down" /></a>
                        <ul>
                          <li><a href="blog.html">Blog Page</a></li>
                          <li><a href="blog2.html">Blog Two</a></li>
                          <li><a href="blog-left.html">Blog Left</a></li>
                          <li><a href="blog-right.html">Blog Right</a></li>
                          <li><a href="blog-detsils.html">Blog Detsils</a></li>
                        </ul>
                      </li>
                      <li><a href="javascript:void(0);">Pages <i className="fa fa-angle-down" /></a>
                        <ul>
                          <li><a href="service.html">Service One</a></li>
                          <li><a href="team.html">Team Page</a></li>
                          <li><a href="testmonial.html">Testmonial One</a></li>
                          <li><a href="testmonial2.html">Testmonial Two</a></li>
                          {/* <li><a href="404.html">404 Pages</a></li> */}
                        </ul>
                      </li>
                      <li><a href="contact.html">Contact</a></li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-1 col-md-2 col-sm-3 col-4">
                  <div className="search-wrapper">
                    <ul>
                      <li><a href="javascript:void(0);"><i className="fa fa-search" /></a>
                        <ul>
                          <li>
                            <form action="#">
                              <input type="text" placeholder="Search Here..." />
                              <button><i className="fa fa-search" /></button>
                            </form>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-md-1 col-sm-1 col-2 d-lg-none d-sm-block">
                  <div className="responsive-menu-wrap floatright" />
                </div>
              </div>
            </div>
          </header>
          {/* header-area end */}
          {/* breadcumb-area start */}
          <div className="breadcumb-area black-opacity bg-img-6">
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <div className="breadcumb-wrap">
                    <h2>Our Blog</h2>
                    <ul>
                      <li><a href="index.html">Home</a></li>
                      <li>/</li>
                      <li>Blog</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* breadcumb-area end */}
          {/* blog-area start */}
          <div className="blog-area">
            <div className="container">
              <div className="row">
                <div className="col-lg-4 col-sm-6 col-12">
                  <div className="blog-wrap">
                    <div className="blog-img">
                      <img src="assets/images/blog/1.jpg" alt />
                    </div>
                    <div className="blog-content">
                      <ul className="blog-meta">
                        <li><a href="#">20 September 2017</a></li>
                        <li>|</li>
                        <li><a href="#">BY HERMAN MILLER</a></li>
                      </ul>
                      <h4><a href="blog-details.html">I like the body. I like to design everything.</a></h4>
                      <p>There are many variations of passages of Lorem Ipsum gool available, the majority have suffered alteration in some form…</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-sm-6 col-12">
                  <div className="blog-wrap">
                    <div className="blog-img">
                      <img src="assets/images/blog/2.jpg" alt />
                    </div>
                    <div className="blog-content">
                      <ul className="blog-meta">
                        <li><a href="#">25 March 2017</a></li>
                        <li>|</li>
                        <li><a href="#">BY HERMAN MILLER</a></li>
                      </ul>
                      <h4><a href="blog-details.html">MINIMAL &amp; MODULAR YOUR NEXT MODULAR</a></h4>
                      <p>There are many variations of passages of Lorem Ipsum gool available, the majority have suffered alteration in some form…</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-sm-6 col-12">
                  <div className="blog-wrap">
                    <div className="blog-img">
                      <img src="assets/images/blog/3.jpg" alt />
                    </div>
                    <div className="blog-content">
                      <ul className="blog-meta">
                        <li><a href="#">20 April 2017</a></li>
                        <li>|</li>
                        <li><a href="#">BY HERMAN MILLER</a></li>
                      </ul>
                      <h4><a href="blog-details.html">Graphic Design and Editorial: Drope.</a></h4>
                      <p>There are many variations of passages of Lorem Ipsum gool available, the majority have suffered alteration in some form…</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-sm-6 col-12">
                  <div className="blog-wrap">
                    <div className="blog-img">
                      <img src="assets/images/blog/1.jpg" alt />
                    </div>
                    <div className="blog-content">
                      <ul className="blog-meta">
                        <li><a href="#">20 September 2017</a></li>
                        <li>|</li>
                        <li><a href="#">BY HERMAN MILLER</a></li>
                      </ul>
                      <h4><a href="blog-details.html">I like the body. I like to design everything.</a></h4>
                      <p>There are many variations of passages of Lorem Ipsum gool available, the majority have suffered alteration in some form…</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-sm-6 col-12">
                  <div className="blog-wrap">
                    <div className="blog-img">
                      <img src="assets/images/blog/2.jpg" alt />
                    </div>
                    <div className="blog-content">
                      <ul className="blog-meta">
                        <li><a href="#">25 March 2017</a></li>
                        <li>|</li>
                        <li><a href="#">BY HERMAN MILLER</a></li>
                      </ul>
                      <h4><a href="blog-details.html">MINIMAL &amp; MODULAR YOUR NEXT MODULAR</a></h4>
                      <p>There are many variations of passages of Lorem Ipsum gool available, the majority have suffered alteration in some form…</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-sm-6 col-12">
                  <div className="blog-wrap">
                    <div className="blog-img">
                      <img src="assets/images/blog/3.jpg" alt />
                    </div>
                    <div className="blog-content">
                      <ul className="blog-meta">
                        <li><a href="#">20 April 2017</a></li>
                        <li>|</li>
                        <li><a href="#">BY HERMAN MILLER</a></li>
                      </ul>
                      <h4><a href="blog-details.html">Graphic Design and Editorial: Drope.</a></h4>
                      <p>There are many variations of passages of Lorem Ipsum gool available, the majority have suffered alteration in some form…</p>
                    </div>
                  </div>
                </div>
                <div className="col-12">
                  <div className="pagination-wrap text-center">
                    <ul>
                      <li><a href="#"><i className="fa fa-angle-left" /></a></li>
                      <li><a href="#">1</a></li>
                      <li><a href="#">2</a></li>
                      <li> <span>3</span></li>
                      <li><a href="#">4</a></li>
                      <li><a href="#"><i className="fa fa-angle-right" /></a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* blog-area end */}
          {/* footer-area start */}
          <footer className="footer-area">
            <div className="footer-top bg-1">
              <div className="container">
                <div className="row">
                  <div className="col-lg-4 col-sm-6 col-12">
                    <div className="footer-widget footer-logo">
                      <img src="assets/images/logo.png" alt />
                      <p>Lorem Ipsum available but the arran majority have suffered alteration in some form by injected humour.</p>
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
                  <div className="col-lg-3 col-sm-6 col-12">
                    <div className="footer-widget footer-contact">
                      <h4 className="widget-title">GET IN TOUCH</h4>
                      <ul>
                        <li><i className="fa fa-home" /> 1265 North Avenue LukeLane South Bend, IN 3600025</li>
                        <li><i className="fa fa-phone" /> +012 549 594</li>
                        <li><i className="fa fa-fax" /> support@email.com</li>
                        <li><i className="fa fa-envelope" /> support@email.com</li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-lg-2 col-sm-6 col-12">
                    <div className="footer-widget footer-menu">
                      <h4 className="widget-title">Services</h4>
                      <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="about.html">About Us</a></li>
                        <li><a href="service.html">Our Works</a></li>
                        <li><a href="contact.html">Contact</a></li>
                        <li><a href="#">News</a></li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-lg-3 col-sm-6 col-12">
                    <div className="footer-widget newsletter">
                      <h4 className="widget-title">newsletter</h4>
                      <p>Lorem Ipsum available, but the majority the have suffered alteration some.</p>
                      <form action="#">
                        <input type="text" placeholder="Enter Your Email" />
                        <button>subscribe</button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="footer-bootem">
              <div className="container">
                <div className="row">
                  <div className="col-12">
                    <p>© {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
                      Copyright © All rights reserved | This template is made with <i className="fa fa-heart-o" aria-hidden="true" /> by <a href="https://colorlib.com" target="_blank">Colorlib</a>
                      {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}</p>
                  </div>
                </div>
              </div>
            </div>
          </footer>
          {/* footer-area start */}
        </div>
    );
  }
}

export default Blog;
