import React, { Component } from 'react';


class Services extends Component {

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
            <section id="services" className="section">
            <div className="container">
              <div className="section-header">
                <h2 className="section-title wow fadeIn" data-wow-duration="1000ms" data-wow-delay="0.3s">Our Services</h2>
                <hr className="lines wow zoomIn" data-wow-delay="0.3s" />
                <p className="section-subtitle wow fadeIn" data-wow-duration="1000ms" data-wow-delay="0.3s">&emsp; &emsp; &emsp;One of the leading interior design companies in Vizag,  ARENE provides great project planning and specialized villa interior design services.  Choose from our wide array of exterior designs that suit you the best such as Architecture.  Create an impact with the interior of your office through the help of ARENE Interiors, your partner towards a better business.  ARENE Interior Design provides great hotel interior and exterior designs to make your project look elegant and welcoming.  Attract more customers for your restaurant with unique design concepts. We are the top interior design company in Vizag.  We are interior decoration Company, based in INDIA, specializing in luxury residential projects, décor and interior design.  ARENE provide full services of villa Bedroom designs, along with luxury bedroom interior, bedroom furniture design and much more.  A house is not complete without a stunning and sleek kitchen. We offer creative kitchen layout with cabinets & lighting designs.</p>
              </div>
          {/*    <div className="row">
                <div className="col-md-4 col-sm-6">
                  <div className="item-boxes wow fadeInDown" data-wow-delay="0.2s">
                    <div className="icon">
                      <i className="lnr lnr-pencil" />
                    </div>
                    <h4>Interior Design</h4>
                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut.</p>
                  </div>
                </div>
                <div className="col-md-4 col-sm-6">
                  <div className="item-boxes wow fadeInDown" data-wow-delay="0.8s">
                    <div className="icon">
                      <i className="lnr lnr-code" />
                    </div>
                    <h4>Fit Out</h4>
                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut.</p>
                  </div>
                </div>
                <div className="col-md-4 col-sm-6">
                  <div className="item-boxes wow fadeInDown" data-wow-delay="1.2s">
                    <div className="icon">
                      <i className="lnr lnr-mustache" />
                    </div>
                    <h4>Flush Door</h4>
                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut.</p>
                  </div>
                </div>
                <div className="col-md-4 col-sm-6">
                  <div className="item-boxes wow fadeInDown" data-wow-delay="1.2s">
                    <div className="icon">
                      <i className="lnr lnr-mustache" />
                    </div>
                    <h4>Furnature and All kind of wood works</h4>
                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut.</p>
                  </div>
                </div>
                <div className="col-md-4 col-sm-6">
                  <div className="item-boxes wow fadeInDown" data-wow-delay="1.2s">
                    <div className="icon">
                      <i className="lnr lnr-mustache" />
                    </div>
                    <h4>Building Plans</h4>
                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut.</p>
                  </div>
                </div>
                <div className="col-md-4 col-sm-6">
                  <div className="item-boxes wow fadeInDown" data-wow-delay="1.2s">
                    <div className="icon">
                      <i className="lnr lnr-mustache" />
                    </div>
                    <h4>Elivation Designs</h4>
                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut.</p>
                  </div>
                </div>
              </div> */}
            </div>
            </section>
        );


  }
}

export default Services;
