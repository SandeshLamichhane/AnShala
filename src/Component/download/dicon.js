import React, { Component } from 'react'
import  Myicon from '../../images/my.png'
import '../download/dicon.css';
export default class dicon extends Component {
    render() {
        return (
        <div className="app">
        <h3 className="dappheading"><b>अन्नशालाको एप्प download गरेर लाभ उठाउनुहोस</b></h3>
        <div className="row" >
        <div className="col-md-4 col-sm-0" > </div>

        <div className=" col-md-8 col-centered ">
        <a href="https://play.google.com/store/apps/details?id=com.shastra.annshala" >
         <img src=   {Myicon}  className="photo" alt="sas"  /></a> 
         </div>
         </div>
        </div>
         
               
       
            
        )
    }
}
