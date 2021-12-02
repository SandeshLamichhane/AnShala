 import React, { Component } from 'react'
 import { GoMail } from "react-icons/go";
 import { GoSquirrel } from "react-icons/go";

 
 import '../contact/appDesign.css';

 export default class Contact extends Component {
     render() {
         return (
             <div className="ContactDiv">
               
             
              <div className=" row">
                  <div className="col-md-4 col-sm-0">
                    </div>

                
                <div className="col-md-8 col-centered">
                <h3 className ="contactheader">
                    हामीलाई फोन नम्बरबाट पनि अर्डर गर्न सक्नुहुन्छ 
                 </h3> 
                 <div>
                     <h4>
                       <span className="PhoneName"><GoSquirrel /> सेवा - सम्पर्क नं : </span>  ९८४४७३४४५८
                     </h4>
                 </div>
                 <div>
                     <h4>
                         <span className="PhoneName"><GoMail /> ईमेल : </span>  slc4473@gmail.com
                     </h4>
                 </div>
                 </div>
                </div>
                 

             </div>
         )
     }
 }
 
