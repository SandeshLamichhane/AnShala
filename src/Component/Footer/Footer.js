import React, { Component } from 'react'
import { FcStart } from "react-icons/fc";
import { FaFacebookF } from "react-icons/fa";
import { FaGit } from "react-icons/fa";

import { FaGoogle } from "react-icons/fa";
import '../Footer/footer.css';

export default class  Footer extends Component {
    render() {
        return (
       <div>
<footer className="bg-dark text-center text-white">
  
  <div className="container p-4">
    
    <section className="mb-4">
    
        

      <a href="https://youtu.be/dSm8YxeGByQ" 
       target="_blank" rel="noopener noreferrer"><FcStart className="increaseSize"/> </a>
      <span className="tenpxwidth" > </span>

     
      <a href=" https://www.facebook.com/profile.php?id=100075180601311" 
       rel="">
      <FaFacebookF  className="increaseSize"/> </a>
      <span className="tenpxwidth" >  </span> 

      <a href=" https://github.com/SandeshLamichhane/Annshala" 
       target="_blank" rel="">
      <FaGit  className="increaseSize"/>
      </a>

      <span className="tenpxwidth" >   </span> 

      <a href="mailto:slc4473@gmail.com"> 
      <FaGoogle  className="increaseSize" />
      </a>
      <span className="tenpxwidth" >            </span> 

       
    </section>
  
 
    <section className="mb-4">
      <p className="description">
      अन्नशाला ( देशको नयाँ दोकान ) नेपालमा संचालित किराना सामग्रीको online delivery app हो । हरेक भान्छामा दोकान पुर्याउने उधेश्यका साथ खोलिएको अन्नशालाले, हरेक अर्डरलाई   १५ मिनेट भित्रै तपाइको दैलोमा पुर्याउने गर्छ ।  
      </p>
    </section>
 
    <section>
      <a href="https://github.com/SandeshLamichhane/Annshala/blob/main/privacy-policy.md"
      className="privacyPolciy"
      >
        <b> 
          नीति र नियम
        </b>
      </a>
    </section>
   </div>
 
   <div className="text-center p-3"  >
    © 2078 Copyright:
    <a href="https://annshala.com/" className="text-white" > AnnShala.com</a>
  </div>
 </footer>
 </div>        )
    }
}
