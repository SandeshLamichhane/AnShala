 import './App.css';
 import  '../node_modules/bootstrap/dist/css/bootstrap.min.css';
 import  '../node_modules/bootstrap/dist/js/bootstrap.min.js';
  import BrandName from './Component/title/brandName';
 import Dicon from './Component/download/dicon';
 import ServiceAreas  from './Component/Sevicearea/area';
 import Howit from './Component/howItWork/howit';
import HappyCust  from './Component/HappyCustomer/happycustomer';
import Footer from './Component/Footer/Footer';
import Contact from './Component/contact/contact';
import React from 'react'

   function App() {
  return (
    <div>
    
    <BrandName />
    <Dicon />
    <ServiceAreas />
    <Howit />
    <HappyCust />
    <Contact />
    <Footer />
  
   
  
</div>
    
    

  );
}

export default App;
 
