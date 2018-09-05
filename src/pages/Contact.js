import React, { Component } from 'react';



class Contact extends Component {
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
                     <li><a href="index.html">Home</a></li>
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
                         <span>+ (0012) 123 456 789</span>
                         <span>+ (0012) 123 456 789</span>
                       </p>
                     </li>
                     <li>
                       <i className="fa fa-envelope" /> Email Id
                       <p>
                         <span>info145@gmail.com</span>
                         <span>info145@gmail.com</span>
                       </p>
                     </li>
                     <li>
                       <i className="fa fa-location-arrow" /> Location
                       <p>
                         <span>+227 Marion Street Address Here Columbia, SC 29201</span>
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
