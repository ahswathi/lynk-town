import React from "react";
import BrandingMarketing from "./Components/BrandingMarketing";
import Business from "./Components/Business";
import EmailTrigger from "./Components/EmailTrigger";
import Faqs from "./Components/Faqs";
import FashionCommunity from "./Components/FashionCommunity";
import Footer from "./Components/Footer";
import Form from "./Components/Form";

import Header from './Components/Header';
/* import Header from './Components/Header_copy';
import Old_Form from "./Components/Old_Form copy"; */
import Old_Form from "./Components/Old_Form";
/* import PopUp from "./Components/PopUp"; */
import Services from "./Components/Services";
import SocialPlatform from "./Components/SocialPlatform";
import Examp from "./Examp";



let App = () => {
  return (
    <>
    <Examp/>
    <Services />
    <SocialPlatform />
      <BrandingMarketing />
      <FashionCommunity />
      <Business />
      <Form/>
     {/*  <Old_Form/> */}
      <Faqs/> 
      <Footer />
       {/* <Header />
       <Services />
       <SocialPlatform />
      <BrandingMarketing />
      <FashionCommunity />
      <Business />
      <Form/>
      <Old_Form/>
      <Faqs/> 
      <Footer /> */}
    {/* 

      */}
      {/* <div className="App">
     <Accordion title="Title"/>
     <></>
     </div> */}




    </>

  );
}

export default App;
