import "./hero.css";

import React, { Component } from "react";

class Hero extends Component {
  render() {
    return (
      <div>
        <div className="hero">
          <div className="head">
            <h1>{this.props.heading}</h1>
            <p>{this.props.txt}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Hero;
