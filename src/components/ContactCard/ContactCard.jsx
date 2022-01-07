import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";

const ContactCard = (props) => {
  const { handleClose, contactToEdit, saveEditedContact } = props;
  const [name, setName] = useState(contactToEdit?.name || "");
  const [phone, setPhone] = useState(contactToEdit?.phone || "");
  const [image, setimage] = useState(contactToEdit?.image || "");

  function handleClick() {
    let newContact = {
      name,
      phone,
      image,
      id: contactToEdit.id,
    };
    saveEditedContact(newContact);
    handleClose();
    setName("");
    setPhone("");
    setimage("");
  }
  return (
    <>
      <Modal show={props.show} onHide={props.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body bg="warning">
          <div>
            <input
              onChange={(e) => setName(e.target.value)}
              type="text"
              placeholder="Enter name"
              value={name}
            />
            <input
              onChange={(e) => setPhone(e.target.value)}
              type="number"
              placeholder="Enter phone number"
              value={phone}
            />
            <input
              onChange={(e) => setimage(e.target.value)}
              type="text"
              placeholder="Enter image"
              value={image}
            />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClick}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
export default ContactCard;
