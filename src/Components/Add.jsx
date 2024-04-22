import React from 'react'
import { useState } from 'react';
import { Form,FloatingLabel } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';



function Add() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  return (
   <>
   <div className="d-flex align-items-center">
    <h5>Upload New Video</h5>
    <button onClick={handleShow} className='btn  btn-warning ms-3 rounded-circle fw-bolder fs-5'>+</button>
   </div>
   <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Video Details!!!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Please fill the following details!!!</p>
          <FloatingLabel
        controlId="floatingInputCaption"
        label="Video Caption"
        className="mb-3"
      >
        <Form.Control type="text" placeholder="Video Caption" />
      </FloatingLabel>
      <FloatingLabel
        controlId="floatingInputImage"
        label="Image URL"
        className="mb-3"
      >
        <Form.Control type="text" placeholder="Image URL" />
      </FloatingLabel>
      <FloatingLabel
        controlId="floatingInputURL"
        label="Youtube URL"
        className=""
      >
        <Form.Control type="text" placeholder="YouTube URL" />
      </FloatingLabel>
      
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" className='btn btn-info'>Upload</Button>
        </Modal.Footer>
      </Modal>
   </>
  )
}

export default Add