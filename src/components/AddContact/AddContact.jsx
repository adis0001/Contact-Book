import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

const AddContact = (props) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [photo, setPhoto] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    let newContact = {
      name,
      phone,
      photo,
      id: Date.now(),
    };
    props.addContact(newContact);
  }

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Name</Form.Label>
          <Form.Control
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder="name"
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>phone</Form.Label>
          <Form.Control
            onChange={(e) => setPhone(e.target.value)}
            type="text"
            placeholder="phone"
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>img</Form.Label>
          <Form.Control
            onChange={(e) => setPhoto(e.target.value)}
            type="text"
            placeholder="img"
          />
        </Form.Group>
        <Button type="submit">Add </Button>
      </Form>
    </div>
  );
};

export default AddContact;
