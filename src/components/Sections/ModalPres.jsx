import React from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import styled from "styled-components";

function ModalPres(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Saisir votre données
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {/* <h4>Centered Modal</h4> */}
        <Form>
          <label className="font13 " style={{fontFamily:"bold"}}>Nom:</label>
          <input type="text" id="nom" name="nom" className="font20 " />
          <label className="font13" style={{fontFamily:"bold"}}>Email:</label>
          <input type="text" id="email" name="email" className="font20 " />
          <label className="font13" style={{fontFamily:"bold"}}>Travail:</label>
          <input type="text" id="subject" name="sujet" className="font20 " />
          <label className="font13" style={{fontFamily:"bold"}}>Télèphone:</label>
          <input type="number" id="subject" name="sujet" className="font20 " />
          <label className="font13" style={{fontFamily:"bold"}}>Description:</label>
          <textarea  type="text" id="description" name="description" className="font20 " />
          <label className="font13" style={{fontFamily:"bold"}}>CV:</label>
          <input   type="file" id="description" name="description" className="font20 " />
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button style={{ backgroundColor: "#1F4B43",marginTop:"-30px" }}>Envoyer</Button>
      </Modal.Footer>
    </Modal>
  )
}

export default ModalPres;

const Form = styled.form`
  padding: 15px 20px 0 20px;
  input,
  textarea {
    width: 100%;
    background-color: transparent;
    border: 0px;
    outline: none;
    box-shadow: none;
    border-bottom: 1px solid #707070;
    height: 30px;
    margin-bottom: 30px;
  }
  textarea {
    min-height: 70px;
  }
  @media (max-width: 860px) {
    padding: 30px 0;
  }
`;