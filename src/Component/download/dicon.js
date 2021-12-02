import React, { Component } from 'react'
import  Myicon from '../../images/my.png'
import '../download/dicon.css';
export default class dicon extends Component {
    render() {
        return (
        <div className="app">
        <h3 className="dappheading">एप्प download को लागी</h3>
        <a href="https://play.google.com/store/apps/details?id=com.shastra.annshala" >
         <img src=   {Myicon}  className="photo" alt="sas"  /></a> 
        </div>
               
       
            
        )
    }
}
