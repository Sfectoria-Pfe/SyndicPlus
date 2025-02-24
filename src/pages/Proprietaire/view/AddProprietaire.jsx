import React from 'react';
import styled from "styled-components";
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import { FaCloudUploadAlt } from 'react-icons/fa';

function AddProprietaire() {

  const navigate = useNavigate()
  const [newProprietaire, setNewProprietaire] = useState({
    avatar: '',
    name: '',
    email: '',
    password: '',
    telephone: '',
    status: ''
  })

  const preset_key = "fh9al9ga";
  const cloud_name = "dxhz5fyrw";

  const handleFile = (e) => {
    const file = e.target.files[0]
    const formData = new FormData();
    formData.append('file', file)
    formData.append("upload_preset", preset_key);
    axios.post(`https://api.cloudinary.com/v1_1/${cloud_name}/image/upload`, formData).then((response) => {
      console.log("uploded image url:", response.data.secure_url)
      setNewProprietaire((prevProprietaire) => {
        return { ...prevProprietaire, avatar: response.data.secure_url }
      })
    })
      .catch((err) => console.log(err))
  }

  const addProprietaire = async (body) => {
    try {
      const response = await axios.post("http://localhost:9000/proprietaire/addproprietaire", body)
      return response
    } catch (error) {
      console.log(error)
      return { error: true }
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewProprietaire({ ...newProprietaire, [name]: value })
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    addProprietaire(newProprietaire).then((response) => {
      if (!response.error) navigate(-1)
    })
  }

  return (
    <Wrapper>
      <Container>
        <HeaderInfo>
          <h1 className="font40 extraBold">Ajouter Proprietaire</h1>
        </HeaderInfo>
        <FormWrapper>
          <Form onSubmit={handleSubmit}>
            <ImageSection>
              <ImageWrapper>
                <img
                  src={newProprietaire.avatar}
                  alt=""
                  style={{
                    width: '130px',
                    height: '130px',
                    borderRadius: '20%',
                    objectFit: 'cover',
                    border: '1px solid #1F4B43',
                    marginLeft: "10px"
                  }}
                />
                <input
                  type="file"
                  id="fileUpload"
                  style={{ display: 'none' }}
                  onChange={handleFile}
                />
                {!newProprietaire.avatar && (
                  <FaCloudUploadAlt
                    size={30}
                    className='photo-icon'
                    onClick={() => document.getElementById('fileUpload').click()}
                  />
                )}
              </ImageWrapper>
              <InputWrapper>
                <label className="font13" style={{ fontFamily: "bold", marginLeft: "90px", marginTop: "40px" }}>Nom Complete:</label>
                <input type="text" name="name" className="font20" style={{ marginLeft: "90px" }} onChange={handleChange} />
              </InputWrapper>
            </ImageSection>
            <InputWrapper>
              <label className="font13">Email:</label>
              <input type="email" name="email" className="font20" onChange={handleChange} />
              <label className="font13">Mot de passe:</label>
              <input type="password" name="password" className="font20" onChange={handleChange} />
              <label className="font13">Télèphone:</label>
              <input type="number" name="telephone" className="font20" onChange={handleChange} />
              <label className="font13">Status:</label>
              <input type="text" name="status" className="font20" onChange={handleChange} />
            </InputWrapper>
            <SumbitWrapper>
              <Button variant="primary" type="submit" className="animate radius8" style={{ maxWidth: "220px", backgroundColor: "#1F4B43" }} onClick={handleSubmit}>
                Ajouter
              </Button>
            </SumbitWrapper>
          </Form>
        </FormWrapper>
      </Container>
    </Wrapper>
  )
}

export default AddProprietaire;

const Wrapper = styled.section`
  width: 100%;
  height: 100vh; /* Utiliser la hauteur de la fenêtre */
  display: flex;
  justify-content: center;
  align-items: center;
  // background-color: #f5f5f5; /* Vous pouvez changer la couleur de fond si nécessaire */
`;

const Container = styled.div`
  width: 100%;
  max-width: 800px; /* Largeur maximale du conteneur pour le formulaire */
`;

const HeaderInfo = styled.div`
  text-align: center;
  padding-bottom: 30px;
`;

const FormWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const Form = styled.form`
  width: 100%;
  padding: 30px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);

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
    min-height: 100px;
  }
`;

const SumbitWrapper = styled.div`
  display: flex;
  justify-content: center;
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
  }
`;

const InputWrapper = styled.div`
  margin-bottom: 30px;

  input,
  textarea {
    width: 100%;
    background-color: transparent;
    border: 0;
    outline: none;
    box-shadow: none;
    border-bottom: 1px solid #707070;
    height: 30px;
    margin-bottom: 20px; /* Espacement entre les champs */
  }

  textarea {
    min-height: 100px;
  }
`;

