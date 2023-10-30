import React from 'react'
import Header from '../components/header';
import Heroimg from '../components/heroimg';
import Footer from '../components/footer';

const Home = () => {
  return (
  <div>
      <Header />
      <Heroimg/>
      <Footer Height="translateY(17rem)"/>
    </div>
  )
}

export default Home;
