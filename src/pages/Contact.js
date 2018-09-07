import React, { Component } from 'react';



class Contact extends Component {
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
                   <h2>Contact Us</h2>
                   <ul>
                     <li><a href="/">Home</a></li>
                     <li>/</li>
                     <li>Contact</li>
                   </ul>
                 </div>
               </div>
             </div>
           </div>
         </div>
         {/* breadcumb-area end */}
         {/* contact-area start */}
         <div className="contact-area pt-120">
           <div className="container">
             <div className="row">
               <div className="col-lg-8 col-12">
                 <div className="contact-form">
                   <div className="cf-msg" />
                   <form action="mail.php" method="post" id="cf">
                     <div className="row">
                       <div className="col-md-6 col-12">
                         <input type="text" placeholder="Name" id="fname" name="fname" />
                       </div>
                       <div className="col-md-6 col-12">
                         <input type="text" placeholder="Email" id="email" name="email" />
                       </div>
                       <div className="col-12">
                         <input type="text" placeholder="Subject" id="subject" name="subject" />
                       </div>
                       <div className="col-12">
                         <textarea className="contact-textarea" placeholder="Message" id="msg" name="msg" defaultValue={""} />
                       </div>
                       <div className="col-12">
                         <button id="submit" className="cont-submit btn-contact btn-style" name="submit">SEND MESSAGE</button>
                       </div>
                     </div>
                   </form>
                 </div>
               </div>
               <div className="col-lg-4 col-md-6 col-12">
                 <div className="contact-wrap">
                   <ul>
                     <li>
                       <i className="fa fa-phone" /> Phone number
                       <p>
                         <span>Sales: +91-7730915052</span>
                         <span>Support: +91-9121097659</span>
                       </p>
                     </li>
                     <li>
                       <i className="fa fa-envelope" /> Email Id
                       <p>
                         <span>areneword@gmail.com</span>
                       </p>
                     </li>
                     <li>
                       <i className="fa fa-location-arrow" /> Location
                       <p>
                         <span>Workshop: Pendurthi, Visakhaptnam, Andhra Pradesh, INDIA</span>
                       </p>
                     </li>
                   </ul>
                 </div>
               </div>
             </div>
           </div>
           <div id="googleMap" />
         </div>
       </div>
    );
  }
}

export default Contact;
