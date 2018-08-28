import React, { Component } from 'react';


class Contact extends Component {

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
            <section id="contact" className="section" data-stellar-background-ratio="-0.2">      
            <div className="contact-form">
              <div className="container">
                <div className="row">     
                  <div className="col-lg-6 col-sm-6 col-xs-12">
                    <div className="contact-us">
                      <h3>Contact With us</h3>
                      <div className="contact-address">
                        <p>Centerville Road, DE 19808, US </p>
                        <p className="phone">Phone: <span>(+94 123 456 789)</span></p>
                        <p className="email">E-mail: <span>(contact@mate.com)</span></p>
                      </div>
                      <div className="social-icons">
                        <ul>
                          <li className="facebook"><a ><i className="fa fa-facebook" /></a></li>
                          <li className="twitter"><a ><i className="fa fa-twitter" /></a></li>
                          <li className="google-plus"><a ><i className="fa fa-google-plus" /></a></li>
                          <li className="linkedin"><a ><i className="fa fa-linkedin" /></a></li>
                          <li className="dribbble"><a ><i className="fa fa-dribbble" /></a></li>
                        </ul>
                      </div>
                    </div>
                  </div>     
                  <div className="col-lg-6 col-sm-6 col-xs-12">
                    <div className="contact-block">
                      <form id="contactForm">
                        <div className="row">
                          <div className="col-md-12">
                            <div className="form-group">
                              <input type="text" className="form-control" id="name" name="name" placeholder="Your Name" required data-error="Please enter your name" />
                              <div className="help-block with-errors" />
                            </div>                                 
                          </div>
                          <div className="col-md-12">
                            <div className="form-group">
                              <input type="text" placeholder="Your Email" id="email" className="form-control" name="name" required data-error="Please enter your email" />
                              <div className="help-block with-errors" />
                            </div> 
                          </div>
                          <div className="col-md-12">
                            <div className="form-group"> 
                              <textarea className="form-control" id="message" placeholder="Your Message" rows={8} data-error="Write your message" required defaultValue={""} />
                              <div className="help-block with-errors" />
                            </div>
                            <div className="submit-button text-center">
                              <button className="btn btn-common" id="submit" type="submit">Send Message</button>
                              <div id="msgSubmit" className="h3 text-center hidden" /> 
                              <div className="clearfix" /> 
                            </div>
                          </div>
                        </div>            
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>           
            </section>
        );
  }
}

export default Contact;
