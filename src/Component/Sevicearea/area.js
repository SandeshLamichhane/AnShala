 import React, { Component } from 'react'
 import '../Sevicearea/area.css';
 import appe from '../../images/apple.png'
 
 import tomato from '../../images/tomato.png'
 import mango from '../../images/mango.png'

 

 export default class serviceAreas extends Component {
     render() {
         return (
          <div className="border" >
   <h2 className="headr w3-container">सेवा - स्थानहरु</h2>
 
   <div className="marquee">
     
   
  <p>
     <img src={mango} alt="app" className="myphoto"/>
     <span className="mypadding"> पोखरा </span>

     <img src={appe} alt="app" className="myphoto"/>
     <span className="mypadding"> काठमाण्डौ <span className="badge badge-secondary">( आउंदै छौ )</span> </span>

     <img src={tomato} alt="app" className="myphoto"/>
     <span className="mypadding"> धरान  <span className="badge badge-secondary"> (आउंदै छौं)</span>  </span>

     </p>
      </div>
     

     <h3  className="footer  ">के तपाइको सहर छुट्यो, न-आत्तिनुहोस तपाइको सहरमा चाडै आउंदै छौं | </h3>


             </div>
         )
     }
 }
 