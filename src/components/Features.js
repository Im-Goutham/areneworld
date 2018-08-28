



import React, { Component } from 'react';


class Features extends Component {

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
            <section id="features" className="section" data-stellar-background-ratio="0.2">
            <div className="container">
              <div className="section-header">          
                <h2 className="section-title">Some Features</h2>
                <hr className="lines" />
                <p className="section-subtitle">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat, dignissimos! <br /> Lorem ipsum dolor sit amet, consectetur.</p>
              </div>
              <div className="row">
                <div className="col-lg-8 col-md-12 col-xs-12">
                  <div className="container">
                    <div className="row">
                      <div className="col-lg-6 col-sm-6 col-xs-12 box-item">
                        <span className="icon">
                          <i className="lnr lnr-rocket" />
                        </span>
                        <div className="text">
                          <h4>Bootstrap 4 Based</h4>
                          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                        </div>
                      </div>
                      <div className="col-lg-6 col-sm-6 col-xs-12 box-item">
                        <span className="icon">
                          <i className="lnr lnr-laptop-phone" />
                        </span>
                        <div className="text">
                          <h4>Fully Responsive</h4>
                          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                        </div>
                      </div>
                      <div className="col-lg-6 col-sm-6 col-xs-12 box-item">
                        <span className="icon">
                          <i className="lnr lnr-layers" />
                        </span>
                        <div className="text">
                          <h4>Parallax Background</h4>
                          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
                        </div>
                      </div>
                      <div className="col-lg-6 col-sm-6 col-xs-12 box-item">
                        <span className="icon">
                          <i className="lnr lnr-cog" />
                        </span>
                        <div className="text">
                          <h4>Easy to Customize</h4>
                          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-xs-12">
                  <div className="show-box">
                    <img className="img-fulid" src="img/features/feature.png" alt />
                  </div>
                </div>
              </div>
            </div>
            </section>
        );
    

  }
}

export default Features;
