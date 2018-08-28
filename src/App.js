import React, { Component } from 'react';
import Header from './components/Header';
import Services from './components/Services';
import Features from './components/Features';
import VideoPromo from './components/VideoPromo';
import PriceTable from './components/PriceTable';
import CounterSection from './components/CounterSection';
import Testimonial from './components/Testimonial';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import TeamSection from './components/TeamSection';
import Footer from './components/Footer';

class App extends Component {

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
    let {loading} =  this.state;
    if(loading){
        return (
          <div id="loader">
          <div className="spinner">
            <div className="double-bounce1" />
            <div className="double-bounce2" />
          </div>
        </div> 
        );
    }
    else {
      return (
        <div>
          {/* Header Section Start */}
            <Header />
          {/* Header Section End */} 
          {/* Services Section Start */}
          <Services/>
          {/* Services Section End */}
          {/* Features Section Start */}
          <Features />
          {/* Features Section End */}    
          {/* Portfolio Section */}
          <Portfolio/>
          {/* Portfolio Section Ends */} 
          {/* Start Video promo Section */}
          <VideoPromo/>
          {/* End Video Promo Section */}
          {/* Start Pricing Table Section */}
          <PriceTable/>
          {/* End Pricing Table Section */}
          {/* Counter Section Start */}
          <CounterSection />
          {/* Counter Section End */}
          {/* Team section Start */}
          <TeamSection/>
          {/* Team section End */}
          {/* testimonial Section Start */}
          <Testimonial/>
          {/* testimonial Section Start */}
          {/* Blog Section */}
    
          {/* blog Section End */}
          {/* Contact Section Start */}
          <Contact/>
          {/* Contact Section End */}
          {/* Footer Section Start */}
          <Footer/>
          {/* Footer Section End */} 
          {/* Go To Top Link */}
          <a  className="back-to-top">
            <i className="lnr lnr-arrow-up" />
          </a>
          {/*   <div id="loader">
            <div className="spinner">
              <div className="double-bounce1" />
              <div className="double-bounce2" />
            </div>
          </div> 
          */}
        
        </div>
      );
    }

  }
}

export default App;
