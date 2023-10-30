import React from 'react'
import Header from '../components/header';
import Footer from '../components/footer';
import Hero from '../components/hero';
import FormContact from '../components/form';

const Contact = () => {
  return (
    <div>
      <Header/>

      <Hero heading="contact with us" txt="you can leave a comment here"/>


      <FormContact/>

      <Footer/>

    </div>
  )
}

export default Contact;
