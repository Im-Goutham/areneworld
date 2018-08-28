import React, { Component } from 'react';


class Footer extends Component {


  render() {
        return (
            <footer>          
            <div className="container">
              <div className="row">
                {/* Footer Links */}
                <div className="col-lg-6 col-sm-6 col-xs-12">
                  <ul className="footer-links">
                    <li>
                      <a >Homepage</a>
                    </li>
                    <li>
                      <a >Services</a>
                    </li>
                    <li>
                      <a >About Us</a>
                    </li>
                    <li>
                      <a >Contact</a>
                    </li>
                  </ul>
                </div>
                <div className="col-lg-6 col-sm-6 col-xs-12">
                  <div className="copyright">
                    <p>All copyrights reserved © 2018</p>
                  </div>
                </div>  
              </div>
            </div>
          </footer>
            
        );
    

  }
}

export default Footer;
