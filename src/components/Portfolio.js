import React, { Component } from 'react';


class Portfolio extends Component {

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
            <section id="portfolios" className="section">
            {/* Container Starts */}
            <div className="container">
              <div className="section-header">          
                <h2 className="section-title">Our Portfolio</h2>
                <hr className="lines" />
                <p className="section-subtitle">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat, dignissimos! <br /> Lorem ipsum dolor sit amet, consectetur.</p>
              </div>
              <div className="row">          
                <div className="col-md-12">
                  {/* Portfolio Controller/Buttons */}
                  <div className="controls text-center">
                    <a className="filter active btn btn-common" data-filter="all">
                      All 
                    </a>
                    <a className="filter btn btn-common" data-filter=".design">
                      Interior Design 
                    </a>
                    <a className="filter btn btn-common" data-filter=".development">
                      Furniture Works
                    </a>
                    <a className="filter btn btn-common" data-filter=".print">
                      Fit Out Works 
                    </a>
                  </div>
                  {/* Portfolio Controller/Buttons Ends*/}
                </div>
                {/* Portfolio Recent Projects */}
                <div id="" className="row">
                  <div className="col-sm-6 col-md-4 col-lg-4 col-xl-4 mix development print">
                    <div className="portfolio-item">
                      <div className="shot-item">
                        <img src="img/portfolio/img1.jpg" alt />  
                        <a className="overlay lightbox" href="img/portfolio/img1.jpg">
                          <i className="lnr lnr-eye item-icon" />
                        </a>
                      </div>               
                    </div>
                  </div>
                  <div className="col-sm-6 col-md-4 col-lg-4 col-xl-4 mix design print">
                    <div className="portfolio-item">
                      <div className="shot-item">
                        <img src="img/portfolio/img2.jpg" alt />  
                        <a className="overlay lightbox" href="img/portfolio/img2.jpg">
                          <i className="lnr lnr-eye item-icon" />
                        </a>
                      </div>               
                    </div>
                  </div>
                  <div className="col-sm-6 col-md-4 col-lg-4 col-xl-4 mix development">
                    <div className="portfolio-item">
                      <div className="shot-item">
                        <img src="img/portfolio/img3.jpg" alt />  
                        <a className="overlay lightbox" href="img/portfolio/img3.jpg">
                          <i className="lnr lnr-eye item-icon" />
                        </a>
                      </div>               
                    </div>
                  </div>
                  <div className="col-sm-6 col-md-4 col-lg-4 col-xl-4 mix development design">
                    <div className="portfolio-item">
                      <div className="shot-item">
                        <img src="img/portfolio/img4.jpg" alt />  
                        <a className="overlay lightbox" href="img/portfolio/img4.jpg">
                          <i className="lnr lnr-eye item-icon" />
                        </a>
                      </div>               
                    </div>
                  </div>
                  <div className="col-sm-6 col-md-4 col-lg-4 col-xl-4 mix development">
                    <div className="portfolio-item">
                      <div className="shot-item">
                        <img src="img/portfolio/img5.jpg" alt />  
                        <a className="overlay lightbox" href="img/portfolio/img5.jpg">
                          <i className="lnr lnr-eye item-icon" />
                        </a>
                      </div>               
                    </div>
                  </div>
                  <div className="col-sm-6 col-md-4 col-lg-4 col-xl-4 mix print design">
                    <div className="portfolio-item">
                      <div className="shot-item">
                        <img src="img/portfolio/img6.jpg" alt />  
                        <a className="overlay lightbox" href="img/portfolio/img6.jpg">
                          <i className="lnr lnr-eye item-icon" />
                        </a>
                      </div>               
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Container Ends */}
            </section>
            
        );
    

  }
}

export default Portfolio;
