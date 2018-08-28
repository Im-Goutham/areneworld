import React, { Component } from 'react';


class Testimonial extends Component {

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
            <div id="testimonial" className="section" data-stellar-background-ratio="0.1">
            <div className="container">
              <div className="row justify-content-md-center">
                <div className="col-md-12">
                  <div className="touch-slider owl-carousel owl-theme">
                    <div className="testimonial-item">
                      <img src="img/testimonial/customer1.jpg" alt="Client Testimonoal" />
                      <div className="testimonial-text">
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. send do <br /> adipisicing ciusmod tempor incididunt ut labore et</p>
                        <h3>Jone Deam</h3>
                        <span>Fondor of Jalmori</span>
                      </div>
                    </div>
                    <div className="testimonial-item">
                      <img src="img/testimonial/customer2.jpg" alt="Client Testimonoal" />
                      <div className="testimonial-text">
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. send do <br /> adipisicing ciusmod tempor incididunt ut labore et</p>
                        <h3>Oidila Matik</h3>
                        <span>President Lexo Inc</span>
                      </div>
                    </div>
                    <div className="testimonial-item">
                      <img src="img/testimonial/customer3.jpg" alt="Client Testimonoal" />
                      <div className="testimonial-text">
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. send do <br /> adipisicing ciusmod tempor incididunt ut labore et</p>
                        <h3>Alex Dattilo</h3>
                        <span>CEO Optima Inc</span>
                      </div>
                    </div>
                    <div className="testimonial-item">
                      <img src="img/testimonial/customer4.jpg" alt="Client Testimonoal" />
                      <div className="testimonial-text">
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. send do <br /> adipisicing ciusmod tempor incididunt ut labore et</p>
                        <h3>Paul Kowalsy</h3>
                        <span>CEO &amp; Founder</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>        
            </div>
            </div>
        );
    

  }
}

export default Testimonial;
