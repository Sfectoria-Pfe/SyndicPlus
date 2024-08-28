import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import styled from "styled-components";
import { FaCloudUploadAlt } from "react-icons/fa";
import axios from 'axios';


function ModalPres(props) {
  const [newPrestataire, setNewPrestataire] = useState({
    name: '',
    email: '',
    travail: '',
    description: '',
    telephone: '',
    avatar: '',
    cv: ''
  })

  const preset_key = "fh9al9ga";
  const cloud_name = "dxhz5fyrw";


  const handleFile = (e, field) => {
    const file = e.target.files[0]
    const formData = new FormData();
    formData.append('file', file)
    formData.append("upload_preset", preset_key);
    axios.post(`https://api.cloudinary.com/v1_1/${cloud_name}/upload`, formData).then((response) => {
      console.log(`Uploaded ${field} url:`, response.data.secure_url)
      setNewPrestataire((prevPrestataire) => {
        return { ...prevPrestataire, [field]: response.data.secure_url }
      })
    })
      .catch((err) => console.log(err))
  }

  const NewPrestataire = async (body) => {
    try {
      const response = await axios.post("http://localhost:9000/demandePrestataire/addDemandeprestataire", body)
      return response
    } catch (error) {
      console.log(error)
      return { error: true }
    }
  }
  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewPrestataire({ ...newPrestataire, [name]: value })
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    NewPrestataire(newPrestataire).then((response) => {
      if (response && !response.error) {
        console.log('Prestataire ajouté avec succès:', response.data);
        props.onHide(); // Fermer le modal après soumission réussie
      } else {
        console.log('Erreur lors de l\'ajout du prestataire');
      }
    });
  };
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
          <ImageSection>
            <ImageWrapper>
              <img
                src={newPrestataire.avatar}
                alt=''
                style={{
                  width: '130px',
                  height: '130px',
                  borderRadius: '20%',
                  objectFit: 'cover',
                  border: '1px solid #1F4B43',
                  marginLeft: "10px",
                  marginTop:"-20px"
                }}
              />
              <input
                type="file"
                id="fileUpload"
                style={{ display: 'none' }}
                onChange={(e) => handleFile(e, 'avatar')}
              />
              {!newPrestataire.avatar && (
                <FaCloudUploadAlt
                  size={30}
                  className='photo-icon'
                  onClick={() => document.getElementById('fileUpload').click()}
                />
              )}
            </ImageWrapper>
          </ImageSection>
          <label className="font13 " style={{fontFamily:"bold"}}>Nom complet:</label>
          <input type="text" name="name" className="font20 " onChange={handleChange} />
          <label className="font13" style={{fontFamily:"bold"}}>Email:</label>
          <input type="text" name="email" className="font20 " onChange={handleChange} />
          <label className="font13" style={{fontFamily:"bold"}}>Travail:</label>
          <input type="text" name="travail" className="font20 " onChange={handleChange} />
          <label className="font13" style={{fontFamily:"bold"}}>Télèphone:</label>
          <input type="number" name="telephone" className="font20 " onChange={handleChange} />
          <label className="font13" style={{fontFamily:"bold"}}>Description:</label>
          <textarea type="text" name="description" className="font20 " onChange={handleChange} />
          <label className="font13" style={{fontFamily:"bold"}}>CV:</label>
          <input type="file" name="cv" className="font20 " onChange={(e) => handleFile(e, 'cv')} />
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button style={{ backgroundColor: "#1F4B43", marginTop: "-30px" }} onClick={handleSubmit}>Envoyer</Button>
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
const ImageSection = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 30px;
`;

const ImageWrapper = styled.div`
  position: relative;
  width: 80px;
  height: 80px;
  margin-right: 20px; /* Espacement entre l'image et les champs de texte */

 .photo-icon {
    position: absolute;
    top: 80%;
    left: 90%;
    transform: translate(-50%, -50%);
    font-size: 80px; /* Ajustez la taille de l'icône si nécessaire */
    color: #fff; /* Couleur de l'icône, ajustez si nécessaire */
    background-color: rgba(0, 0, 0, 0.5); /* Optionnel: couleur de fond semi-transparente pour l'icône */
    border-radius: 50%;
    padding: 5px; /* Ajustez le padding pour que l'icône soit bien positionnée */
    margin-top:-20px
  }
`;
