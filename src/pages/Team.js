import React, { Component } from 'react';
import AboutArea from '../components/AboutArea';
import TeamMembers from '../components/TeamMembers';

class Team extends Component {
  componentDidMount() {
  window.scrollTo(0, 0)
}
    render() {
      return (
        <div>
            {/* breadcumb-area start */}
            <div className="breadcumb-area black-opacity bg-img-6">
              <div className="container">
                <div className="row">
                  <div className="col-12">
                    <div className="breadcumb-wrap">
                      <h2>Our Team</h2>
                      <ul>
                        <li><a href="index.html">Home</a></li>
                        <li>/</li>
                        <li>Team</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* breadcumb-area end */}
            {/* team-area start */}
            <TeamMembers/>
            {/* ablout-area end */}
            {/* .brand-area start */}
            <div className="brand-area">
              <div className="container">
                <div className="row">
                  <div className="col-sm-3 col-3">
                    <div className="brand-wrap text-center">
                      <img src="assets/images/brand/1.png" alt />
                    </div>
                  </div>
                  <div className="col-sm-3 col-3">
                    <div className="brand-wrap text-center">
                      <img src="assets/images/brand/2.png" alt />
                    </div>
                  </div>
                  <div className="col-sm-3 col-3">
                    <div className="brand-wrap text-center">
                      <img src="assets/images/brand/3.png" alt />
                    </div>
                  </div>
                  <div className="col-sm-3 col-3">
                    <div className="brand-wrap text-center">
                      <img src="assets/images/brand/4.png" alt />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* .brand-area end */}

          </div>


      );
    }
  }

export default Team;
