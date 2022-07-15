import React from "react";
import BrandingMarketing from "./Components/BrandingMarketing";
import Business from "./Components/Business";
import Faqs from "./Components/Faqs";
import FashionCommunity from "./Components/FashionCommunity";
import Footer from "./Components/Footer";
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
   <Footer/>
   
  
     {/* 
     <Business/>
   <Faqs/>
 
    */}
   </>
   
  );
}

export default App;
