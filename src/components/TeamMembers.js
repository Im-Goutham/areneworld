import React, { Component } from 'react';


class TeamMembers extends Component {
  render() {
    return (
      <div className="team-area">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="section-title text-center">
                <h2>our great team</h2>
                <h3>A wall for our project glory and a place to find more</h3>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-3 col-md-4  col-sm-6 col-12">
              <div className="team-wrap">
                <div className="team-img">
                  <img src="assets/images/team/01.jpg" alt />
                </div>
                <div className="team-content">
                  <h4>Sunil Kumar</h4>
                  <p>Architectural 3d Visualizer</p>
                  <ul>
                    <li><a href="#"><i className="fa fa-facebook" /></a></li>
                    <li><a href="#"><i className="fa fa-twitter" /></a></li>
                    <li><a href="#"><i className="fa fa-google-plus" /></a></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-4  col-sm-6 col-12">
              <div className="team-wrap">
                <div className="team-img">
                  <img src="assets/images/team/2.jpg" alt />
                </div>
                <div className="team-content">
                  <h4>Tulasi Ratnam</h4>
                  <p>Managing director</p>
                  <ul>
                    <li><a href="#"><i className="fa fa-facebook" /></a></li>
                    <li><a href="#"><i className="fa fa-twitter" /></a></li>
                    <li><a href="#"><i className="fa fa-google-plus" /></a></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-4  col-sm-6 col-12">
              <div className="team-wrap">
                  <img src="assets/images/team/03.jpg" alt />
                  <div className="team-img">
                </div>
                <div className="team-content">
                  <h4>Pol Biz</h4>
                  <p>Web Developer</p>
                  <ul>
                    <li><a href="#"><i className="fa fa-facebook" /></a></li>
                    <li><a href="#"><i className="fa fa-twitter" /></a></li>
                    <li><a href="#"><i className="fa fa-google-plus" /></a></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 col-12">
              <div className="team-wrap">
                <div className="team-img">
                  <img src="assets/images/team/04.jpg" alt />
                </div>
                <div className="team-content">
                  <h4>Goutham</h4>
                  <p>Software Developer</p>
                  <ul>
                    <li><a href="#"><i className="fa fa-facebook" /></a></li>
                    <li><a href="#"><i className="fa fa-twitter" /></a></li>
                    <li><a href="#"><i className="fa fa-google-plus" /></a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default TeamMembers;
