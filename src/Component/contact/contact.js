 import React, { Component } from 'react'
 import { GoMail } from "react-icons/go";
 import { GoSquirrel } from "react-icons/go";

 
 import '../contact/appDesign.css';

 export default class Contact extends Component {
     render() {
         return (
             <div className="ContactDiv">
                <h3 className ="contactheader">
                    सेवा - सम्पर्क  
                 </h3> 
                 <div>

                 </div>
                 <div>
                     <h4>
                       <span className="PhoneName"><GoSquirrel />   फोन नं : </span>  ९८४४७३४४५८
                     </h4>
                 </div>
                 <div>
                     <h4>
                         <span className="PhoneName"><GoMail /> ईमेल : </span>  slc4473@gmail.com
                     </h4>
                 </div>
                 

             </div>
         )
     }
 }
 
