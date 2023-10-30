import React from 'react'
import Header from '../components/header';
import Footer from '../components/footer';
import Hero from '../components/hero';
import Aboutsec from '../components/aboutsection';

const About = () => {
  return (
    <div>
      <Header/>

      <Hero heading="about us" txt="read about our projects"/>

      <Aboutsec/>

      
        <Footer Height="translateY(-0rem)"/>
      
      
    </div>
  )
}

export default About;
