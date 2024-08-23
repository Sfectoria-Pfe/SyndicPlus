import React, { useState } from 'react';
import styled from "styled-components";
import { Button } from 'react-bootstrap';
import { MdAddAPhoto } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import axios from 'axios';

function AddLocataire() {
  const navigate = useNavigate()
  const [newLocataire, setNewLocataire] = useState({
    name: '',
    email: '',
    password: '',
    telephone: '',
    appartement: '',
    status: '',
    nbredeEtage: '',
    avatar:''
  });

  const preset_key = "ajix14lr";
  const cloud_name = "dpz0ymtax";


  const handleFile = (event) => {
    const file = event.target.files[0];
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", preset_key);
    axios
      .post(
        `https://api.cloudinary.com/v1_1/${cloud_name}/image/upload`,
        formData
      )
      .then((response) => {
     
        console.log('Uploaded Image URL:', response.data.secure_url)
        setNewLocataire((prevLocataire) => {
          return { ...prevLocataire, avatar: response.data.secure_url };
        });
      })
      .catch((err) => console.log(err));
  };


  const addLocataire = async (body) => {
    try {
      const response = await axios.post("http://localhost:9000/locataire/addlocataire", body);
      return response;  // Retourne la réponse pour être utilisée dans le .then
    } catch (error) {
      console.log(error);
      return { error: true };  // Retourne une indication d'erreur si quelque chose se passe mal
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewLocataire({ ...newLocataire, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addLocataire(newLocataire).then((response) => {
      if (!response.error) navigate(-1);
    });;
  };

  return (
    <Wrapper>
      <Container>
        <HeaderInfo>
          <h1 className="font40 extraBold">Ajouter Locataire</h1>
        </HeaderInfo>
        <FormWrapper>
          <Form onSubmit={handleSubmit}>
            <ImageSection>
              <ImageWrapper>
              <input
              type="file"
              onChange={handleFile}
            />
            
                <img
                 src={newLocataire.avatar}
                  // alt="Uploaded"
                  style={{
                    width: '130px',
                    height: '130px',
                    borderRadius: '20%',
                    objectFit: 'cover',
                    border: '1px solid #1F4B43',
                    marginLeft: "10px"
                  }}
                />
                <MdAddAPhoto className="photo-icon" />
              </ImageWrapper>
              <InputWrapper>
                <label className="font13" style={{ fontFamily: "bold", marginLeft: "90px", marginTop: "40px" }}>Nom Complet:</label>
                <input type="text" id="nomcomplet" name="name" onChange={handleChange} className="font20" style={{ marginLeft: "90px" }} />
              </InputWrapper>
            </ImageSection>
            <InputWrapper>
              <label className="font13">Email:</label>
              <input type="email" id="email" name="email" className="font20" onChange={handleChange} />
              <label className="font13">Mot de passe:</label>
              <input type="password" id="password" name="password" className="font20" onChange={handleChange} />
              <label className="font13">Téléphone:</label>
              <input type="number" name="telephone" className="font20" onChange={handleChange} />
              <label className="font13">Appartement:</label>
              <input type="number" name="appartement" className="font20" onChange={handleChange} />
              <label className="font13">Statut:</label>
              <input type="text" name="status" className="font20" onChange={handleChange} />
              <label className="font13">Nombre d'étage:</label>
              <input type="number" name="nbredeEtage" className="font20" onChange={handleChange} />
            </InputWrapper>
            <SubmitWrapper>
              <Button variant="primary" type="submit" className="animate radius8" style={{ maxWidth: "220px", backgroundColor: "#1F4B43" }} onClick={handleSubmit}>
                Ajouter
              </Button>
            </SubmitWrapper>
          </Form>
        </FormWrapper>
      </Container>
    </Wrapper>
  );
}

export default AddLocataire;

const Wrapper = styled.section`
   width: 100%;
  height: 100vh; /* Utiliser la hauteur de la fenêtre */
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f5f5f5; /* Vous pouvez changer la couleur de fond si nécessaire */
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

const SubmitWrapper = styled.div`
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
