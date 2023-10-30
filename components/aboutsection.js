import React from 'react'
import { Row , Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import Cod2 from '../imgs/img4.jpg'
import './aboutsection.css'
import './heroimg.css'


const Aboutsec = () => {
  return (
    <div className='about'>
      <Row className='justify-content-around pb-3'>
        <Col lg={6} className='col-12'>
            <div className='title'>who am i?</div>
            <div className='txt'>
              my name's mohammed nadjib chacha,<br/>
              i'm a front-end -react- devloper,<br/>
              can you see my CV,<br/>
              and if you are interested in working with me contact me now.
            </div>
            <div className='row justify-content-center align-items-center mt-4 mb-5 mb-lg-0'>
              
                <Link to="/contact" className='btn-yallow col-sm-4 me-5'>contact</Link>
                <Link hrefLang='' className='btn-white col-sm-4'>read cv</Link>  
            </div>
        </Col>
        <Col lg={5} className='col-12 text-center'>
          <img className='' src={Cod2} alt=''/>
        </Col>
      </Row>
    </div>
  )
}

export default Aboutsec;
