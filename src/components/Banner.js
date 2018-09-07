import React, { Component } from 'react';
import Carousel from 'nuka-carousel';


// "assets/images/slider/1.jpg"
class Banner extends Component {
  render() {

    return (
      <Carousel>
         <img src="assets/images/slider/1.jpg" />
         <img src="assets/images/slider/2.jpg" />
         <img src="assets/images/slider/3.jpg" />
         <img src="assets/images/slider/4.jpg" />
       </Carousel>
    );
  }
}

export default Banner;
