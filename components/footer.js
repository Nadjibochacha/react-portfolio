import React, { Component } from 'react'
import "./footer.css"
import Col from 'react-bootstrap/esm/Col'
import {FaGithub, FaHome, FaInstagram, FaLinkedin, FaMailBulk,FaPhone} from 'react-icons/fa'

class Footer extends Component {
  render(){
     return (
    <div className="footer" style={{transform: this.props.Height}}>
      <div className="content row justify-content-around align-items-center">
        <Col md={4}>
          <div className="loc">
            <FaHome/> Constantine, Ali Mendjli4 G76 
          </div>
          <div className="phone">
            <FaPhone/> +213 663-503-661 
          </div>
          <div className="mail">
            <FaMailBulk/> ndjbchch@gmail.com
          </div>
        </Col>
        <Col md={4}>
          <div className="about">
            <h3>about our job</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Quod unde velit alias illum asperiores.
            </p>
          </div>
          <div className="social">
            <a href="http://"><FaLinkedin/></a>
            <a href="http://"><FaInstagram/></a>
            <a href="http://"><FaGithub/></a>    
          </div>
        </Col>
      </div>
      <div className="foot-bar text-center">
        Copyright © 2024:  React_portfolio.com
      </div>
    </div>
  )

  }
}

export default Footer

      