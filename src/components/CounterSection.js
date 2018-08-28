import React, { Component } from 'react';


class CounterSection extends Component {

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
            <div className="counters section" data-stellar-background-ratio="0.5">
            <div className="container">
              <div className="row"> 
                <div className="col-sm-6 col-md-3 col-lg-3">
                  <div className="facts-item">   
                    <div className="icon">
                      <i className="lnr lnr-clock" />
                    </div>             
                    <div className="fact-count">
                      <h3><span className="counter">1589</span></h3>
                      <h4>Working Hours</h4>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-md-3 col-lg-3">
                  <div className="facts-item">   
                    <div className="icon">
                      <i className="lnr lnr-briefcase" />
                    </div>            
                    <div className="fact-count">
                      <h3><span className="counter">699</span></h3>
                      <h4>Completed Projects</h4>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-md-3 col-lg-3">
                  <div className="facts-item"> 
                    <div className="icon">
                      <i className="lnr lnr-user" />
                    </div>              
                    <div className="fact-count">
                      <h3><span className="counter">203</span></h3>
                      <h4>No. of Clients</h4>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-md-3 col-lg-3">
                  <div className="facts-item"> 
                    <div className="icon">
                      <i className="lnr lnr-heart" />
                    </div>              
                    <div className="fact-count">
                      <h3><span className="counter">1689</span></h3>
                      <h4>Peoples Love</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            </div>
        );
    

  }
}

export default CounterSection;
