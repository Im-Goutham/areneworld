import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';

class Header extends Component {
  constructor(){
     super();
     this.route = this.route.bind(this);
  }
  route(path){
     this.props.history.push('/'+path);
  }
  render() {
    let path = this.props.history.location.pathname;
    return (
      <header className="header-area bg-1" id="sticky-header">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-9 col-sm-8 col-6">
              <div className="logo">
                <a onClick={this.route.bind(this,'')}><img style={{width:'150px'}} src="assets/images/logo.png" alt /></a>
              </div>
            </div>
            <div className="col-lg-8 d-none d-lg-block">
              <div className="mainmenu">
                <ul id="navigation">
                  <li className={path=='/' ? 'active' : ''}><a  style={{cursor:'pointer'}} onClick={this.route.bind(this,'')}>Home</a>
                  </li>
                  <li className={path=='/about' ? 'active' : ''}><a style={{cursor:'pointer'}} onClick={this.route.bind(this,'about')}>About</a>
                  </li>
                  <li className={path=='/project' ? 'active' : ''}><a style={{cursor:'pointer'}} onClick={this.route.bind(this,'project')}>Projects</a>
                  </li>
                  <li className={path=='/team' ? 'active' : ''}><a style={{cursor:'pointer'}} onClick={this.route.bind(this,'team')}>Team</a>
                  </li>
                  <li className={path=='/contact' ? 'active' : ''}><a style={{cursor:'pointer'}}  onClick={this.route.bind(this,'contact')}>Contact</a></li>
                </ul>
              </div>
            </div>
            <div className="col-lg-1 col-md-2 col-sm-3 col-4">

            </div>
            <div className="col-md-1 col-sm-1 col-2 d-lg-none d-sm-block">
              <div className="responsive-menu-wrap floatright" ></div>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default withRouter(Header);
