
import React from 'react';

 export default function Custinfo(props) {
     return (
       <div  className ="custReview">
       <div>
        <span className="custComment">{props.val.review} </span>
        </div>
      <div className="certainheight">
     </div>
        
 
<div className= "row">
<div  className="col-md-9">
<img src = {props.val.image} 
  className="rounded-circle pull-right"  alt="..." />
  </div>
</div>
<div className="miniheight">
    </div>
 
<h4 className="reviewer">
  - {props.val.name}
</h4>
<span className=" address">{props.val.address}</span>
</div>
     )
 }
 
