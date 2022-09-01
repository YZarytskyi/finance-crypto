import React, { useState } from 'react';
import contacts from '../../assets/images/contacts.png'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import style from './Contacts.module.scss'

export function ModalContact(props) {
  return (
    <Modal {...props}
      style={{
       overflowY: 'scroll'
      }}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body className={style.modal}>
        <h1>Thank you for getting in touch!</h1>
        <br />
        <p>
        We have received your message and would like to thank you for writing to us. We will reply by email as soon as possible.
        <div>Talk to you soon.</div>
        </p>
        <div>
          <Button onClick={props.onHide}>Close</Button>
        </div>
      </Modal.Body>
    </Modal>
  );
}


const Contacts = () => {
  const [modalShow, setModalShow] = useState(false);

  const handlerClick = (e) => {
    e.preventDefault()
    setModalShow(true)
  }

  return(
    <div className={style.contacts}>
      <div className={style.heading}>
          <h1>Have some questions?</h1>
          <hr />
      </div>
      <div className={style.formImg}>
        <div>
          <img src={contacts} alt="Contact us" width={250} />
        </div>
        <div>
        <Form>
          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label>Full Name</Form.Label>
            <Form.Control type="text" placeholder="John Smith" />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="name@example.com" />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label>Enter your message</Form.Label>
            <Form.Control as="textarea" rows={3} />
          </Form.Group>
          <Button onClick={(e) => handlerClick(e)} variant="dark" type="submit">
            Send
          </Button>
          <ModalContact
            show={modalShow}
            onHide={() => setModalShow(false)}
          />
         </Form>
        </div>
      </div>
    </div>
  );
};

export default Contacts;