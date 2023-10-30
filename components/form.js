import React from "react";
import './form.css'
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import FloatingLabel from "react-bootstrap/FloatingLabel";

const FormContact = () => {
  return (
    <Form className="form">
      <Row className="mb-3">
        <Form.Group as={Col}>
          <Form.Label className="title">full name</Form.Label>
          <Form.Control className="input" type="text" placeholder="Enter your name please" />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label className="title">Email</Form.Label>
          <Form.Control className="input"
            type="email"
            placeholder="Enter your mail adress please"
          />
        </Form.Group>
      </Row>

      <Form.Group className="mb-3">
        <Form.Label className="title">subject</Form.Label>
        <Form.Control className="input" placeholder="Subject" />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label className="title">message</Form.Label>
        <FloatingLabel controlId="floatingTextarea2" label="Message">
          <Form.Control className="input"
            as="textarea"
            placeholder="Leave a comment here"
            style={{ height: "150px" }}
          />
        </FloatingLabel>
      </Form.Group>

      <Button className="btn-yallow" type="submit">
        Send
      </Button>
    </Form>
  );
};

export default FormContact;
