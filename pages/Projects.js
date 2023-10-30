import React from 'react'
import Header from '../components/header';
import Hero from '../components/hero';
import Footer from '../components/footer';
import Col from 'react-bootstrap/esm/Col';
import Cards from '../components/card';
import img1 from "../imgs/dash.png";
import img2 from "../imgs/managment.png";
import img3 from "../imgs/portfolio.png";
import img4 from "../imgs/restorante.png";
import Pricing from '../components/pricing';

const Projects = () => {
  return (
    <div  >
     <Header/>

        <Hero heading="last projects" txt="you can see our projects here"/>
      <div style={{background:'#000000ee'}} className='row justify-content-center align-items-center pt-2 ps-2 pb-2'>
        <h1 className='text-center font-size-6 text-light mb-2' style={{
         textTransform:'uppercase', fontWeight:'700', letterSpacing:'0.07rem'
        }}
        >projects</h1>
        <Col sm={6} md={4} lg={3} className='mb-3 m-lg-0 col-7'>
          <Cards src={img1} title="dashboard page" sourc="https://github.com/Nadjibochacha/dashboard_code" />
        </Col>
        <Col sm={6} md={4} lg={3} className='mb-3 m-lg-0 col-7'>
          <Cards src={img2} title="managment system page" sourc="https://github.com/Nadjibochacha/products_managment_system"/>
        </Col>
        <Col sm={6} md={4} lg={3} className='mb-3 m-lg-0 col-7'>
          <Cards src={img3} title="portfolio website" sourc="https://github.com/Nadjibochacha/portfolio_1"/>
        </Col>
        <Col sm={6} md={4} lg={3} className='mb-3 m-lg-0 col-7'>
          <Cards src={img4} title="resturante project" sourc="https://github.com/Nadjibochacha/restaurant-website"/>
        </Col>
      </div>

      <div style={{background:'#000000ee'}} className='row justify-content-around align-items-center pt-5 ps-2 pb-3'>
        <Col sm={6} md={3} className='mb-3 m-md-0 col-7'>
            <Pricing type="Basic" price="$100" dely="2 Days" pages="3 Pages"/>
        </Col>
        <Col sm={6} md={3} className='mb-3 m-md-0 col-7'>
          <Pricing type="Premium" price="$200" dely="3 Days" pages="5 Pages"/>
        </Col>
        <Col sm={6} md={3} className='mb-3 m-md-0 col-7'>
          <Pricing type="Buisness" price="$400" dely="5 Days" pages="4 Pages"/>
        </Col>
      </div>
      


      <Footer Height="translateY(0rem)"/>
      

      
    </div>
  )
}

export default Projects;
