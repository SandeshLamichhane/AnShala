import React, { Component } from 'react'

import  '../../Component/howItWork/howit.css'

import first from '../../images/1.png'

import second from '../../images/2.png'

import third from '../../images/3.png'

export default class howit extends Component {
    render() {
        return (

          <div className="howitback"> 
          <h3 className="howittitle">हामीले कसरी काम गर्छौ</h3>
            <div className="card-group">
            <div className="card">
              <img className="card-img-top howitimage" src= {first} alt="Card cap" />
              <div className="card-body">
                <h3 className="card-title howitsubtitle">अर्डर </h3>
                <p className="card-text">दैनिक उपभोगका सामाग्रीहरु हाम्रो एप्पबाट अर्डर गर्नुहोस |</p>
               </div>
            </div>
            <div className="card">
              <img className="card-img-center howitimage" src= {second} alt="  cap" />
              <div className="card-body">
              <h3 className="card-title howitsubtitle">आँखा न-झिम्क्याउदै</h3>
                <p className="card-text">हाम्रो अर्डर पुर्याउने व्यक्ति तपाइको दैलोमा आइपुग्छ |</p>
               </div>
            </div>
            <div className="card">
              <img className="card-img-bottom howitimage center-block" src= {third} alt="Card " />
              <div className="card-body">
              <h3 className="card-title howitsubtitle">आभार</h3>
                <p className="card-text">सुखका दिन आए, दुखका दिन गए | पैसा र समय दुवैको वचत | </p>
               </div>
            </div>
          </div>
          </div>
        )
    }
}
