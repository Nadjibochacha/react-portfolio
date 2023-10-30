import React, { Component } from 'react'
import { CardText } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './card.css'
class Pricing extends Component {
    render(){
         return (
    <div>
       <Card className='card' style={{width: '15rem'}}>
            <Card.Body className='body text-center'>
                <Card.Text className='txt'>
                    -{this.props.type}-
                </Card.Text>
                <Card.Title className='title'>{this.props.price}</Card.Title>
                <Card.Text className='txt'>
                    <ul>
                        <li>- {this.props.dely} -</li>
                        <li>- {this.props.pages} -</li>
                        <li>- Featured -</li>
                        <li>- Responsive Design -</li>
                    </ul>
                </Card.Text>
                <Button className='btn-yallow'>purchase now</Button>
            </Card.Body>
        </Card>
    </div>
  )
    }
 
}

export default Pricing;
