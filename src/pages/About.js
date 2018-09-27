 import React, { Component } from 'react';
 import TeamMembers from '../components/TeamMembers';

 class About extends Component {
   componentDidMount() {
  window.scrollTo(0, 0)
}
   render() {
     return (
       <div>

              {/* breadcumb-area start */}
              <div className="breadcumb-area black-opacity bg-img-6">
                <div className="container">
                  <div className="row">
                    <div className="col-12">
                      <div className="breadcumb-wrap">
                        <h2>About Us</h2>
                        <ul>
                          <li><a href="index.html">Home</a></li>
                          <li>/</li>
                          <li>About Us</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* breadcumb-area end */}
              {/* ablout-area start */}
              <div className="about-page-area ptb-120">
                <div className="container">
                  <div className="row">
                    <div className="col-lg-8">
                      <div className="about-page-wrap">
                        <h2>A Leader in Architecture Design</h2>
                        <div className="about-page-active next-prev-style">
                          <div className="about-page-img">
                            <img src="assets/images/about/7.jpg" alt />
                          </div>
                          <div className="about-page-img">
                            <img src="assets/images/about/7.jpg" alt />
                          </div>
                        </div>
                        <p>Lorem Ipsum available, but the majority have suffered alteration in some form, by injtyt ected humour randomised words which don't look even slightly believable. If you are going tpaage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle text. All the Lorem Ipsum generators on the Internet of tend to repeat predefined chunks as necessary.</p>
                        <div className="row">
                          <div className="col-sm-6">
                            <ul>
                              <li><a href="#">Real mEstate Web Development</a></li>
                              <li><a href="#">Search Engine Placment</a></li>
                              <li><a href="#">E-mail Merking</a></li>
                              <li><a href="#">Statisticks Tracking</a></li>
                              <li><a href="#">Buyer/Seller Tools</a></li>
                            </ul>
                          </div>
                          <div className="col-sm-6">
                            <ul>
                              <li><a href="#">Real mEstate Web Development</a></li>
                              <li><a href="#">Search Engine Placment</a></li>
                              <li><a href="#">E-mail Merking</a></li>
                              <li><a href="#">Statisticks Tracking</a></li>
                              <li><a href="#">Buyer/Seller Tools</a></li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                      <div className="about-sidebar">
                        <h3>Read Next</h3>
                        <ul>
                          <li><a href="#">Cosby sweater eu banh mi qui irure terry richardson ex squid.</a></li>
                          <li><a href="#">Lid est laborum dolo rumes fugats untrtras. Ethaums ser quidem rerum facilis dolores nemis omnis fugats vitaes nemo minima .</a></li>
                          <li><a href="#">Lid est laborum dolo rumes fugats untras. Etharums ser dolores omnis fugats.</a></li>
                          <li><a href="#">Lid est laborum dolo rumes fugats untras. Etharums ser quidem rerum facilis dolores nemis omnis fugats vitaes.</a></li>
                        </ul>
                        <div className="about-sidebar-img">
                          <img src="assets/images/about/sidebar.jpg" alt />
                          <a href="https://www.youtube.com/watch?v=8PcwS1xNfBA" className="video-popup"><i className="fa fa-play" /></a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* ablout-area end */}
              {/* team-area start */}
              <TeamMembers/>
              {/* team-area end */}
              {/* testmonial-area start */}
              <div className="testmonial-area testmonial-area2 ptb-120">
                <div className="container">
                  <div className="row">
                    <div className="col-12">
                      <div className="section-title text-center">
                        <h2>Customer Feedback</h2>
                        <h3>A wall for our project glory and a place to find more</h3>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-8 offset-lg-2 col-12">
                      <div className="test-active">
                        <div className="test-wrap2 text-center">
                          <div className="test-img2">
                            <img src="assets/images/test/1.png" alt />
                          </div>
                          <i className="fa fa-quote-left" />
                          <p>Great explorer of the truth, the master seds builder of human happiness. No one rejects, dislikes rationally encounter.Great explorer of the truth, the master seds builder uman happiness. No one rejects, dislikes, rationally encounter.Great explorer.</p>
                          <h4>Landy Drammer</h4>
                          <span>Newyork City</span>
                        </div>
                        <div className="test-wrap2 text-center">
                          <div className="test-img2">
                            <img src="assets/images/test/2.png" alt />
                          </div>
                          <i className="fa fa-quote-left" />
                          <p>Great explorer of the truth, the master seds builder of human happiness. No one rejects, dislikes rationally encounter.Great explorer of the truth, the master seds builder uman happiness. No one rejects, dislikes, rationally encounter.Great explorer.</p>
                          <h4>Alex Andarson</h4>
                          <span>Newyork</span>
                        </div>
                        <div className="test-wrap2 text-center">
                          <div className="test-img2">
                            <img src="assets/images/test/1.png" alt />
                          </div>
                          <i className="fa fa-quote-left" />
                          <p>Great explorer of the truth, the master seds builder of human happiness. No one rejects, dislikes rationally encounter.Great explorer of the truth, the master seds builder uman happiness. No one rejects, dislikes, rationally encounter.Great explorer.</p>
                          <h4>Pol Biz</h4>
                          <span>USA</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* testmonial-area end */}
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

            </div>

     );
   }
 }

 export default About;
