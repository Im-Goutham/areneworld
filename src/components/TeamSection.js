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
            <section id="team" className="section">
            <div className="container">
              <div className="section-header">          
                <h2 className="section-title">Our Team</h2>
                <hr className="lines" />
                <p className="section-subtitle">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat, dignissimos! <br /> Lorem ipsum dolor sit amet, consectetur.</p>
              </div>
              <div className="row">
                <div className="col-lg-3 col-md-6 col-xs-12">
                  <div className="single-team">
                    <img src="img/team/team1.jpg" alt />
                    <div className="team-details">
                      <div className="team-inner">
                        <h4 className="team-title">Jhon Doe</h4>
                        <p>Chief Technical Officer</p>
                        <ul className="social-list">
                          <li className="facebook"><a ><i className="fa fa-facebook" /></a></li>
                          <li className="twitter"><a ><i className="fa fa-twitter" /></a></li>
                          <li className="google-plus"><a ><i className="fa fa-google-plus" /></a></li>
                          <li className="linkedin"><a ><i className="fa fa-linkedin" /></a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-xs-12">
                  <div className="single-team">
                    <img src="img/team/team2.jpg" alt />
                    <div className="team-details">
                      <div className="team-inner">
                        <h4 className="team-title">Paul Kowalsy</h4>
                        <p>CEO &amp; Co-Founder</p>
                        <ul className="social-list">
                          <li className="facebook"><a ><i className="fa fa-facebook" /></a></li>
                          <li className="twitter"><a ><i className="fa fa-twitter" /></a></li>
                          <li className="google-plus"><a ><i className="fa fa-google-plus" /></a></li>
                          <li className="linkedin"><a ><i className="fa fa-linkedin" /></a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-xs-12">
                  <div className="single-team">
                    <img src="img/team/team3.jpg" alt />
                    <div className="team-details">
                      <div className="team-inner">                  
                        <h4 className="team-title">Emilly Williams</h4>
                        <p>Business Manager</p>
                        <ul className="social-list">
                          <li className="facebook"><a ><i className="fa fa-facebook" /></a></li>
                          <li className="twitter"><a ><i className="fa fa-twitter" /></a></li>
                          <li className="google-plus"><a ><i className="fa fa-google-plus" /></a></li>
                          <li className="linkedin"><a ><i className="fa fa-linkedin" /></a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-xs-12">
                  <div className="single-team">
                    <img className="img-fulid" src="img/team/team4.jpg" alt />
                    <div className="team-details">
                      <div className="team-inner">
                        <h4 className="team-title">Patricia Green</h4>
                        <p>Graphic Designer</p>
                        <ul className="social-list">
                          <li className="facebook"><a ><i className="fa fa-facebook" /></a></li>
                          <li className="twitter"><a ><i className="fa fa-twitter" /></a></li>
                          <li className="google-plus"><a ><i className="fa fa-google-plus" /></a></li>
                          <li className="linkedin"><a ><i className="fa fa-linkedin" /></a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            </section>
        );
    

  }
}

export default CounterSection;




