import React, { Component } from 'react';
import AboutArea from '../components/AboutArea';
import TeamMembers from '../components/TeamMembers';
import Banner from '../components/Banner';


class Home extends Component {
  componentDidMount() {
  window.scrollTo(0, 0)
}
 render() {
   return (
     <div>
            {/* header-area end */}
            {/* slider-area start */}
            <Banner/>
            {/* slider-area end */}
            {/* ablout-area start */}
            <AboutArea/>
            {/* ablout-area end */}
            {/* spacial-area start */}
            <div className="spacial-area ptb-120 bg-1">
              <div className="container">
                <div className="row">
                  <div className="col-12">
                    <div className="section-title text-center">
                      <h2>OUR SPECIALIZATION</h2>
                      <h3>A wall for our project glory and a place to find more</h3>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-6 d-lg-block d-none ">
                    <div className="spacial-img">
                      <img src="assets/images/spacial/1.jpg" alt />
                    </div>
                  </div>
                  <div className="col-lg-6 col-12">
                    <div className="spacial-wrap">
                      <div className="row">
                        <div className="col-md-4 col-sm-6 col-12">
                          <div className="spacial-item">
                            <span className="flaticon-house-3" />
                            <h4>Architecture</h4>
                          </div>
                        </div>
                        <div className="col-md-4 col-sm-6 col-12">
                          <div className="spacial-item">
                            <span className="flaticon-house" />
                            <h4>Interior Design</h4>
                          </div>
                        </div>
                        <div className="col-md-4 col-sm-6 col-12">
                          <div className="spacial-item">
                            <span className="flaticon-cityscape" />
                            <h4>Building Design</h4>
                          </div>
                        </div>
                        <div className="col-md-4 col-sm-6 col-12">
                          <div className="spacial-item">
                            <span className="flaticon-house-1" />
                            <h4>Art Design</h4>
                          </div>
                        </div>
                        <div className="col-md-4 col-sm-6 col-12">
                          <div className="spacial-item">
                            <span className="flaticon-house-4" />
                            <h4>Home Design</h4>
                          </div>
                        </div>
                        <div className="col-md-4 col-sm-6 col-12">
                          <div className="spacial-item">
                            <span className="flaticon-home" />
                            <h4>Hotel design</h4>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* spacial-area end */}
            {/* .project-area start */}
            <div className="project-area">
              <div className="container">
                <div className="row">
                  <div className="col-lg-4 col-12">
                    <div className="section-title">
                      <h2>Latest Projects</h2>
                    </div>
                  </div>
                  <div className="col-lg-8 col-12">
                    <div className="project-menu text-right">
                      <button className="active" data-filter="*">View All</button>
                      <button data-filter=".cat1">Residential</button>
                      <button data-filter=".cat2">Corporate</button>
                      <button data-filter=".cat3">Restaurent</button>
                      <button data-filter=".cat4">Industrial</button>
                    </div>
                  </div>
                </div>
                <div className="row grid">
                  <div className="col-lg-4 col-sm-6 col-12 project cat2 cat3">
                    <div className="project-wrap">
                      <img src="assets/images/project/1.jpg" alt />
                      <div className="project-content">
                        <a href="assets/images/project/1.jpg" className="popup"><i className="fa fa-search" /></a>
                        <h3>Architecture Building</h3>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-sm-6 col-12 project cat3 cat4">
                    <div className="project-wrap">
                      <img src="assets/images/project/2.jpg" alt />
                      <div className="project-content">
                        <a href="assets/images/project/2.jpg" className="popup"><i className="fa fa-search" /></a>
                        <h3>Architecture Building</h3>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-sm-6 col-12 project cat4 cat2">
                    <div className="project-wrap">
                      <img src="assets/images/project/3.jpg" alt />
                      <div className="project-content">
                        <a href="assets/images/project/3.jpg" className="popup"><i className="fa fa-search" /></a>
                        <h3>Architecture Building</h3>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-sm-6 col-12 project cat1 cat2 ">
                    <div className="project-wrap">
                      <img src="assets/images/project/5.jpg" alt />
                      <div className="project-content">
                        <a href="assets/images/project/5.jpg" className="popup"><i className="fa fa-search" /></a>
                        <h3>Architecture Building</h3>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-sm-6 col-12 project cat3 cat1">
                    <div className="project-wrap">
                      <img src="assets/images/project/4.jpg" alt />
                      <div className="project-content">
                        <a href="assets/images/project/4.jpg" className="popup"><i className="fa fa-search" /></a>
                        <h3>Architecture Building</h3>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-sm-6 col-12 project cat2 cat4">
                    <div className="project-wrap">
                      <img src="assets/images/project/6.jpg" alt />
                      <div className="project-content">
                        <a href="assets/images/project/6.jpg" className="popup"><i className="fa fa-search" /></a>
                        <h3>Architecture Building</h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* .project-area end */}
            {/* service-area start */}
            <div className="service-area bg-1">
              <div className="container">
                <div className="row">
                  <div className="col-12">
                    <div className="section-title text-center">
                      <h2>Service We Do</h2>
                      <h3>A wall for our project glory and a place to find more</h3>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-6 col-12 col-lg-4">
                    <div className="service-wrap">
                      <div className="service-img">
                        <img src="assets/images/service/1.jpg" alt />
                      </div>
                      <div className="service-content">
                        <h4>Residential Design</h4>
                        <p>It has survived not only five centui but the leap into electronic typesetting remain essentially unchanged.</p>
                        <a href="servic-details.html">Read More</a>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 col-12 col-lg-4">
                    <div className="service-wrap">
                      <div className="service-img">
                        <img src="assets/images/service/2.jpg" alt />
                      </div>
                      <div className="service-content">
                        <h4>corporate Design</h4>
                        <p>It has survived not only five centui but the leap into electronic typesetting remain essentially unchanged.</p>
                        <a href="servic-details.html">Read More</a>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 col-12 col-lg-4">
                    <div className="service-wrap">
                      <div className="service-img">
                        <img src="assets/images/service/3.jpg" alt />
                      </div>
                      <div className="service-content">
                        <h4>Commercial design</h4>
                        <p>It has survived not only five centui but the leap into electronic typesetting remain essentially unchanged.</p>
                        <a href="servic-details.html">Read More</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* service-area end */}
            {/* fanfact-area start */}
            <div className="fanfact-area bg-img-1 black-opacity">
              <div className="container">
                <div className="row">
                  <div className="col-md-3 col-sm-3 col-6">
                    <div className="funfact-wrap">
                      <h2 className="counter">16</h2>
                      <p>Years</p>
                    </div>
                  </div>
                  <div className="col-md-3 col-sm-3 col-6">
                    <div className="funfact-wrap">
                      <h2 className="counter">75</h2>
                      <p>Projects</p>
                    </div>
                  </div>
                  <div className="col-md-3 col-sm-3 col-6">
                    <div className="funfact-wrap">
                      <h2 className="counter">18</h2>
                      <p>Members</p>
                    </div>
                  </div>
                  <div className="col-md-3 col-sm-3 col-6">
                    <div className="funfact-wrap">
                      <h2 className="counter">20</h2>
                      <p>Awards</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* fanfact-area end */}
            {/* team-area start */}
            <TeamMembers/>
            {/* team-area end */}
            {/* testmonial-area start */}
            <div className="testmonial-area bg-img-2 ptb-120 black-opacity">
              <div className="container">
                <div className="row">
                  <div className="col-12">
                    <div className="section-title section-title2">
                      <h2>Customer Feedback</h2>
                      <h3>A wall for our project glory and a place to find more</h3>
                    </div>
                  </div>
                </div>
                <div className="row revarce-wrap">
                  <div className="col-lg-7 col-md-6 col-12">
                    <div className="test-content-active">
                      <div className="test-wrap">
                        <i className="fa fa-quote-left" />
                        <p>Great explorer of the truth, the master seds builder of human happiness. No one rejects, dislikes rationally encounter.Great explorer of the truth, the master seds builder uman happiness. No one rejects, dislikes, rationally encounter.Great explorer of the truth, the master seds builder </p>
                        <h4>Landy Drammer</h4>
                        <span>Newyork City</span>
                      </div>
                      <div className="test-wrap">
                        <i className="fa fa-quote-left" />
                        <p>Great explorer of the truth, the master seds builder of human happiness. No one rejects, dislikes rationally encounter.Great explorer of the truth, the master seds builder uman happiness. No one rejects, dislikes, rationally encounter.Great explorer of the truth, the master seds builder </p>
                        <h4>Alex Smit</h4>
                        <span>London Ciyt</span>
                      </div>
                      <div className="test-wrap">
                        <i className="fa fa-quote-left" />
                        <p>Great explorer of the truth, the master seds builder of human happiness. No one rejects, dislikes rationally encounter.Great explorer of the truth, the master seds builder uman happiness. No one rejects, dislikes, rationally encounter.Great explorer of the truth, the master seds builder </p>
                        <h4>Jony Andarson</h4>
                        <span>USA</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-5 col-md-6">
                    <div className="test-img-active">
                      <div className="test-img">
                        <img src="assets/images/test/1.jpg" alt />
                        <ul>
                          <li>Project Ratting : </li>
                          <li><i className="fa fa-star" /></li>
                          <li><i className="fa fa-star" /></li>
                          <li><i className="fa fa-star" /></li>
                          <li><i className="fa fa-star" /></li>
                          <li><i className="fa fa-star" /></li>
                        </ul>
                        <div className="test-images">
                          <img src="assets/images/test/1.png" alt />
                        </div>
                      </div>
                      <div className="test-img">
                        <img src="assets/images/test/2.jpg" alt />
                        <ul>
                          <li>Project Ratting : </li>
                          <li><i className="fa fa-star" /></li>
                          <li><i className="fa fa-star" /></li>
                          <li><i className="fa fa-star" /></li>
                          <li><i className="fa fa-star" /></li>
                          <li><i className="fa fa-star" /></li>
                        </ul>
                        <div className="test-images">
                          <img src="assets/images/test/2.png" alt />
                        </div>
                      </div>
                      <div className="test-img">
                        <img src="assets/images/test/3.jpg" alt />
                        <ul>
                          <li>Project Ratting : </li>
                          <li><i className="fa fa-star" /></li>
                          <li><i className="fa fa-star" /></li>
                          <li><i className="fa fa-star" /></li>
                          <li><i className="fa fa-star" /></li>
                          <li><i className="fa fa-star" /></li>
                        </ul>
                        <div className="test-images">
                          <img src="assets/images/test/1.png" alt />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* testmonial-area end */}
            {/* blog-area start */}
            <div className="blog-area">
              <div className="container">
                <div className="row">
                  <div className="col-12">
                    <div className="section-title text-center">
                      <h2>latest news</h2>
                      <h3>A wall for our project glory and a place to find more</h3>
                    </div>
                  </div>
                </div>
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
                </div>
              </div>
            </div>
            {/* blog-area end */}
            {/* .brand-area start */}
            <div className="brand-area">
              <div className="container">
                <div className="row">
                  <div className="col-sm-3 col-3">
                    <div className="brand-wrap text-center">
                      <img src="assets/images/brand/1.png" alt />
                    </div>
                  </div>
                  <div className="col-sm-3 col-3">
                    <div className="brand-wrap text-center">
                      <img src="assets/images/brand/2.png" alt />
                    </div>
                  </div>
                  <div className="col-sm-3 col-3">
                    <div className="brand-wrap text-center">
                      <img src="assets/images/brand/3.png" alt />
                    </div>
                  </div>
                  <div className="col-sm-3 col-3">
                    <div className="brand-wrap text-center">
                      <img src="assets/images/brand/4.png" alt />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* .brand-area end */}
            {/* google map area start */}
            <div id="googleMap" />
            {/* google map area end */}
            {/* footer-area start */}

          </div>
   );
 }
}

export default Home;
