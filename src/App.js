import React from "react";
/* import { Accordion } from "react-accessible-accordion"; */
import BrandingMarketing from "./Components/BrandingMarketing";
import Business from "./Components/Business";
import Faqs from "./Components/Faqs";
import FashionCommunity from "./Components/FashionCommunity";
import Footer from "./Components/Footer";
import Form from "./Components/Form";
import Header from './Components/Header';
import Services from "./Components/Services";
import SocialPlatform from "./Components/SocialPlatform";



let App = () => {
  return (
    <>
   
     <Header/>
    <Services/>
   <SocialPlatform/>
   <BrandingMarketing/>
   <FashionCommunity/>
   <Business/>
   <Faqs/>
   <Form/>
   <Footer/> 
   {/* <div className="App">
     <Accordion title="Title"/>
     <></>
     </div> */}
  
   
  
    
   </>
   
  );
}

export default App;
