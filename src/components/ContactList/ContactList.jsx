import React from "react";
import { Button, Card, Col, Row } from "react-bootstrap";

const ContactList = (props) => {
  const openModalToEdit = (item) => {
    props.setContactToEdit(item);
    props.handleShow();
  };
  return (
    <div>
      <Row xs={1} md={2} className="g-4">
        {props.contacts.map((item) => (
          <Col key={item.id}>
            <Card bg="warning">
              <Card.Img
                className="card-image "
                variant="top"
                src={item.photo}
              />
              <Card.Body>
                <Card.Title>{item.name}</Card.Title>
                <Card.Text>
                  <strong>{item.phone}</strong>
                </Card.Text>
              </Card.Body>
              <Button onClick={() => props.deleteContact(item.id)}>
                <img
                  width="25"
                  src="https://cdn-icons-png.flaticon.com/512/3221/3221897.png"
                  alt="Delete"
                />
              </Button>
              <Button onClick={() => openModalToEdit(item)}>Edit</Button>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default ContactList;
