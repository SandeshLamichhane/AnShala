import React, { Component } from 'react'

import '../../Component/HappyCustomer/happyCust.css'
import Custinfo  from './Custinfo';
 
 
import xitiz from '../../images/xx.jpg' ;
import rajesh from '../../images/rr.jpg' ;
import sandeep from '../../images/sb.jpg' ;
import nischal from '../../images/np.jpg' ;
let i=0;
var listofreview=[
    {
        name:"सन्दिप भुषाल",
        address: "रत्न-चोक, पोखरा",
        review :"अन्नशालामा अर्डर गरेर चर्पी गएको थिए, फर्केर आउँदा त अर्डर आइपुगिसकेको थियो । ",
        image:sandeep
    
      },
    {
      name:"क्षितिज पौडेल",
      address: "बिरौटा, पोखरा",
      review :" घरमा ग्यास सकिएर अन्नशाला मार्फत मगाएको थिए,१५ मिनेट भित्र घरमा ल्याइदिसकेका थिए ।",
      image:xitiz
  
    },

    {
    name:"निस्चल पुन",
    address: "रानीपौवा, पोखरा",
    review :"delivery चाही निकै चाडो रहेछ । सबै सामग्रीहरु गुणस्तरिय नै पाए । निकै सन्तुष्ट छु ।",
    image:nischal
  },
     
  {
    name:"राजेश रेग्मी",
    address: "मालेपाटन, पोखरा",
    review :"विश्वास गर्नलाई एकपटक प्रयोग गर्न नै पर्छ । मलाई एप्प असाध्यै मनपर्यो । सपूर्ण अन्नशाला परिवारलाई उत्तर-उत्तोर प्रगतिको शुभकामना ।",
    image:rajesh
  }
  ,
  ];
  console.log(listofreview[1]);

export default class HappyCust extends Component {

    
  
    render() {
         
        return (
            <div className="customerDIv">
                <h4 className ="custhead">सन्तुष्ट ग्राहकहरु</h4>
            <div className="row">
              {
                  listofreview.map(review=>(
                    <div className="col-sm-6" key={i++} >
                      <Custinfo val={review} />
                    </div>
                  ))
              }

            
            
            </div>
             
           
          </div>
         
        )
    }
}
