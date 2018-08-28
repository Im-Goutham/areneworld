import React, { Component } from 'react';


class VideoPromo extends Component {

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
            <section className="video-promo section">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-8">
                  <div className="video-promo-content text-center">
                    <h2 className="wow zoomIn" data-wow-duration="1000ms" data-wow-delay="100ms">Watch Our Intro video</h2>
                    <p className="wow zoomIn" data-wow-duration="1000ms" data-wow-delay="100ms">Aliquam vestibulum cursus felis. In iaculis iaculis sapien ac condimentum. Vestibulum congue posuere lacus, id tincidunt nisi porta sit amet. Suspendisse et sapien varius, pellentesque dui non, semper orci.</p>
                    <a href="" className="video-popup wow fadeInUp" data-wow-duration="1000ms" data-wow-delay="0.3s"><i className="lnr lnr-film-play" /></a>
                  </div>
                </div>
              </div>
            </div>
          </section>
            
        );
    

  }
}

export default VideoPromo;
