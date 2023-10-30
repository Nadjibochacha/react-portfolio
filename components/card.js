import './card.css'
import React, { Component } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

class Cards extends Component {
   render() {
    return (
      <Card  style={{ width: '17rem'}}>
        <Card.Img variant="top" src={this.props.src} />
        <Card.Body className='text-light body'>
          <Card.Title className='title'>{this.props.title}</Card.Title>
          <Card.Text className='txt'>
            Some quick example text to build on the card title and make up the bulk of the card's content.
          </Card.Text>
          <a href={this.props.source} target="_blank" rel="noopener noreferrer">
            <Button className='btn-yallow'>View Website</Button>
          </a>
        </Card.Body>
      </Card>
    );
  }
}

export default Cards;