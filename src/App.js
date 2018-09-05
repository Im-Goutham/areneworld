import React, { Component } from 'react';
import Home from './pages/Home';
import About from './pages/About';
import Blog from './pages/Blog';
import Project from './pages/Project';
import Service from './pages/Service';
import Team from './pages/Team';
import Contact from './pages/Contact';

import Header from './components/Header';
import Footer from './components/Footer';

import { BrowserRouter as Router, Route } from 'react-router-dom'



class App extends Component {
  render() {
    return (
      <Router>
         <div>
            <Header/>
                <Route exact path="/" component={Home}/>
                <Route path="/about" component={About}/>
                <Route path="/blog" component={Blog}/>
                <Route path="/project" component={Project}/>
                <Route path="/service" component={Service}/>
                <Route path="/team" component={Team}/>
                <Route path="/contact" component={Contact}/>
              {/* <Route path="*" component={NoMatch}/> */}
             <Footer/>
          </div>
      </Router>
    );
  }
}

export default App;
