import React, { Component } from 'react';
import Viewer from 'react-viewer';
import 'react-viewer/dist/index.css';

class Portfolio extends Component {

  constructor(){
      super();
      this.state = {
          visible: false,
          images :[
            {src: 'img/portfolio/img1.jpg', alt: ''},
            {src: 'img/portfolio/img2.jpg', alt: ''},
            {src: 'img/portfolio/img3.jpg', alt: ''},
            {src: 'img/portfolio/img4.jpg', alt: ''},
            {src: 'img/portfolio/img5.jpg', alt: ''},
            {src: 'img/portfolio/img6.jpg', alt: ''}
          ],
          index: 0
      }
  }

showView(key){
    this.setState({ visible: true,index:key });
}

  render() {
    let {images,index} = this.state;
        return (
            <section id="portfolios" className="section">
            {/* Container Starts */}
            <div className="container">
              <div className="section-header">
                <h2 className="section-title">Our Portfolio</h2>
                <hr className="lines" />
                <p className="section-subtitle">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat, dignissimos! <br /> Lorem ipsum dolor sit amet, consectetur.</p>
              </div>
              <div className="row">
                <div className="col-md-12">
                  {/* Portfolio Controller/Buttons */}
                  <div className="controls text-center">
                    <a className="filter active btn btn-common" data-filter="all">
                      All
                    </a>
                    <a className="filter btn btn-common" data-filter=".design">
                      Interior Design
                    </a>
                    <a className="filter btn btn-common" data-filter=".development">
                      Furniture Works
                    </a>
                    <a className="filter btn btn-common" data-filter=".print">
                      Fit Out Works
                    </a>
                  </div>
                  {/* Portfolio Controller/Buttons Ends*/}
                </div>
                {/* Portfolio Recent Projects */}
                <div id="" className="row">
                {
                    this.state.images.map((image,key)=>{
                         return   <div className="col-sm-6 col-md-4 col-lg-4 col-xl-4 mix development print" key={key}>
                                     <div className="portfolio-item">
                                       <div className="shot-item">
                                         <img src={image.src} />
                                         <a className="overlay lightbox" >
                                           <i className="lnr lnr-eye item-icon" onClick={this.showView.bind(this,key) }/>
                                         </a>
                                       </div>
                                     </div>
                                  </div>
                    })
                }
                </div>
              </div>
            </div>
            {/* Container Ends */}
            <Viewer
             visible={this.state.visible}
             onClose={() => { this.setState({ visible: false }); } }
             images={images}
             activeIndex={index}
             zIndex={10000}
             />
            </section>

        );


  }
}

export default Portfolio;
