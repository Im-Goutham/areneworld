import React, { Component } from 'react';


class Project extends Component {
  componentDidMount() {
  window.scrollTo(0, 0)
}
  render() {
    return (
      <div>

         {/* header-area end */}
         {/* breadcumb-area start */}
         <div className="breadcumb-area black-opacity bg-img-6">
           <div className="container">
             <div className="row">
               <div className="col-12">
                 <div className="breadcumb-wrap">
                   <h2>Our Portfolio</h2>
                   <ul>
                     <li><a href="index.html">Home</a></li>
                     <li>/</li>
                     <li>Portfolio</li>
                   </ul>
                 </div>
               </div>
             </div>
           </div>
         </div>
         {/* breadcumb-area end */}
         {/* .project-area start */}
         <div className="project-area">
           <div className="container">
             <div className="row">
               <div className="col-12">
                 <div className="project-menu text-center mb-40">
                   <button className="active" data-filter="*">View All</button>
                   <button data-filter=".cat1">Residential</button>
                   <button data-filter=".cat2">Corporate</button>
                   <button data-filter=".cat3">Restaurent</button>
                   <button data-filter=".cat4">Industrial</button>
                 </div>
               </div>
             </div>
             <div className="row grid">
               <div className="col-lg-4 col-sm-6 col-12 project cat2 cat3">
                 <div className="project-wrap">
                   <img src="assets/images/project/1.jpg" alt />
                   <div className="project-content">
                     <a href="assets/images/project/1.jpg" className="popup"><i className="fa fa-search" /></a>
                     <h3>Architecture Building</h3>
                   </div>
                 </div>
               </div>
               <div className="col-lg-4 col-sm-6 col-12 project cat3 cat4">
                 <div className="project-wrap">
                   <img src="assets/images/project/2.jpg" alt />
                   <div className="project-content">
                     <a href="assets/images/project/2.jpg" className="popup"><i className="fa fa-search" /></a>
                     <h3>Architecture Building</h3>
                   </div>
                 </div>
               </div>
               <div className="col-lg-4 col-sm-6 col-12 project cat4 cat2">
                 <div className="project-wrap">
                   <img src="assets/images/project/3.jpg" alt />
                   <div className="project-content">
                     <a href="assets/images/project/3.jpg" className="popup"><i className="fa fa-search" /></a>
                     <h3>Architecture Building</h3>
                   </div>
                 </div>
               </div>
               <div className="col-lg-4 col-sm-6 col-12 project cat1 cat2 ">
                 <div className="project-wrap">
                   <img src="assets/images/project/5.jpg" alt />
                   <div className="project-content">
                     <a href="assets/images/project/5.jpg" className="popup"><i className="fa fa-search" /></a>
                     <h3>Architecture Building</h3>
                   </div>
                 </div>
               </div>
               <div className="col-lg-4 col-sm-6 col-12 project cat3 cat1">
                 <div className="project-wrap">
                   <img src="assets/images/project/4.jpg" alt />
                   <div className="project-content">
                     <a href="assets/images/project/4.jpg" className="popup"><i className="fa fa-search" /></a>
                     <h3>Architecture Building</h3>
                   </div>
                 </div>
               </div>
               <div className="col-lg-4 col-sm-6 col-12 project cat2 cat4">
                 <div className="project-wrap">
                   <img src="assets/images/project/6.jpg" alt />
                   <div className="project-content">
                     <a href="assets/images/project/6.jpg" className="popup"><i className="fa fa-search" /></a>
                     <h3>Architecture Building</h3>
                   </div>
                 </div>
               </div>
               <div className="col-lg-4 col-sm-6 col-12 project cat2 cat3">
                 <div className="project-wrap">
                   <img src="assets/images/project/7.jpg" alt />
                   <div className="project-content">
                     <a href="assets/images/project/7.jpg" className="popup"><i className="fa fa-search" /></a>
                     <h3>Architecture Building</h3>
                   </div>
                 </div>
               </div>
               <div className="col-lg-4 col-sm-6 col-12 project cat3 cat4">
                 <div className="project-wrap">
                   <img src="assets/images/project/8.jpg" alt />
                   <div className="project-content">
                     <a href="assets/images/project/8.jpg" className="popup"><i className="fa fa-search" /></a>
                     <h3>Architecture Building</h3>
                   </div>
                 </div>
               </div>
               <div className="col-lg-4 col-sm-6 col-12 project cat4 cat2">
                 <div className="project-wrap">
                   <img src="assets/images/project/9.jpg" alt />
                   <div className="project-content">
                     <a href="assets/images/project/9.jpg" className="popup"><i className="fa fa-search" /></a>
                     <h3>Architecture Building</h3>
                   </div>
                 </div>
               </div>
               <div className="col-lg-4 col-sm-6 col-12 project cat1 cat2 ">
                 <div className="project-wrap">
                   <img src="assets/images/project/11.jpg" alt />
                   <div className="project-content">
                     <a href="assets/images/project/11.jpg" className="popup"><i className="fa fa-search" /></a>
                     <h3>Architecture Building</h3>
                   </div>
                 </div>
               </div>
               <div className="col-lg-4 col-sm-6 col-12 project cat3 cat1">
                 <div className="project-wrap">
                   <img src="assets/images/project/10.jpg" alt />
                   <div className="project-content">
                     <a href="assets/images/project/10.jpg" className="popup"><i className="fa fa-search" /></a>
                     <h3>Architecture Building</h3>
                   </div>
                 </div>
               </div>
               <div className="col-lg-4 col-sm-6 col-12 project cat2 cat4">
                 <div className="project-wrap">
                   <img src="assets/images/project/12.jpg" alt />
                   <div className="project-content">
                     <a href="assets/images/project/12.jpg" className="popup"><i className="fa fa-search" /></a>
                     <h3>Architecture Building</h3>
                   </div>
                 </div>
               </div>
             </div>
           </div>
         </div>
         {/* .project-area end */}

       </div>
    );
  }
}

export default Project;
