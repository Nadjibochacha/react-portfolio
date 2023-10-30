import React from 'react'
import './heroimg.css'
import Img3 from "../imgs/img3.jpg"
import { Link } from 'react-router-dom'
const Heroimg = () => {
  return (
    <div className='heroimg'>
      <div className="mask">
        <img className='img' src={Img3} alt="" />
        <div className="content">
          <p>hi, i'm a freelancer</p>
          <h1>front-end react devloper</h1>
          <div className="row justify-content-center mt-5">
            <Link className='col-3 btn-yallow me-4' to="/Projects">projects</Link>
            <Link className='col-3 btn-white' to="/contact">contact</Link>
          </div>
        </div>        
      </div>
    </div>
  ) 
}

export default Heroimg;
