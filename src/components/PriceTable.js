import React, { Component } from 'react';


class PriceTable extends Component {

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
            <div id="pricing" className="section pricing-section">
            <div className="container">
              <div className="section-header">          
                <h2 className="section-title">Pricing Table</h2>
                <hr className="lines" />
                <p className="section-subtitle">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat, dignissimos! <br /> Lorem ipsum dolor sit amet, consectetur.</p>
              </div>
              <div className="row pricing-tables">
                <div className="col-md-4 col-sm-6 col-xs-12">
                  <div className="pricing-table">
                    <div className="pricing-details">
                      <h2>Free</h2>
                      <span>$00</span>
                      <ul>
                        <li>Consectetur adipiscing</li>
                        <li>Nunc luctus nulla et tellus</li>
                        <li>Suspendisse quis metus</li>
                        <li>Vestibul varius fermentum erat</li>
                      </ul>
                    </div>
                    <div className="plan-button">
                      <a  className="btn btn-common">Get Plan</a>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-sm-6 col-xs-12">
                  <div className="pricing-table">
                    <div className="pricing-details">
                      <h2>Popular</h2>
                      <span>$3.99</span>
                      <ul>
                        <li>Consectetur adipiscing</li>
                        <li>Nunc luctus nulla et tellus</li>
                        <li>Suspendisse quis metus</li>
                        <li>Vestibul varius fermentum erat</li>
                      </ul>
                    </div>
                    <div className="plan-button">
                      <a  className="btn btn-common">Buy Now</a>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-sm-6 col-xs-12">
                  <div className="pricing-table">
                    <div className="pricing-details">
                      <h2>Premium</h2>
                      <span>$9.50</span>
                      <ul>
                        <li>Consectetur adipiscing</li>
                        <li>Nunc luctus nulla et tellus</li>
                        <li>Suspendisse quis metus</li>
                        <li>Vestibul varius fermentum erat</li>
                      </ul>
                    </div>
                    <div className="plan-button">
                      <a  className="btn btn-common">Buy Now</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            </div>
            
        );
    

  }
}

export default PriceTable;
