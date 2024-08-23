import React, { useEffect, useState } from 'react';
import styled from "styled-components";
import { Button } from 'react-bootstrap';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function EditPrestataire() {
  const { id } = useParams();
  const [incidence, setIncidence] = useState({
    name: '',
    email: '',
    travail: '',
    description: '',
    telephone: '',
    avatar:''
  });

  useEffect(() => {
    const fetchIncidenceData = async () => {
      try {
        const response = await axios.get(`http://localhost:9000/prestataire/getprestataire/${id}`);
        const { name,email,travail,description,telephone,avatar} = response.data;
        setIncidence({
          name: name || '',
            email: email ||'',
            travail: travail || '',
            description: description || '',
            telephone: telephone || '',
            avatar: avatar || ''
        });
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchIncidenceData();
  }, [id]);




  const handleChange = (e) => {
    const { name, value } = e.target;
    setIncidence({ ...incidence, [name]: value });
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:9000/prestataire/updateprestataire/${id}`, incidence);
      alert('Incidence modifiée avec succès');
    } catch (error) {
      console.error('Erreur lors de la modification de l\'incidence:', error);
    }
  };

  return (
    <Wrapper>
    <Container>
      <HeaderInfo>
        <h1 className="font40 extraBold">Modifier Prestataire</h1>
      </HeaderInfo>
      <FormWrapper>
        <Form onSubmit={handleSubmit}>
        <label className="font13 " style={{fontFamily:"bold"}}>Nom:</label>
          <input type="text" id="nom" name="nom" className="font20 " value={incidence.nbredeEtage} 
              onChange={handleChange} />
          <label className="font13" style={{fontFamily:"bold"}}>Email:</label>
          <input type="text" id="email" name="email" className="font20 " value={incidence.nbredeEtage} 
              onChange={handleChange}  />
          <label className="font13" style={{fontFamily:"bold"}}>Travail:</label>
          <input type="text" id="subject" name="sujet" className="font20 " value={incidence.nbredeEtage} 
              onChange={handleChange} />
          <label className="font13" style={{fontFamily:"bold"}}>Télèphone:</label>
          <input type="number" id="subject" name="sujet" className="font20 "value={incidence.nbredeEtage} 
              onChange={handleChange}  />
          <label className="font13" style={{fontFamily:"bold"}}>Description:</label>
          <textarea  type="text" id="description" name="description" className="font20 " value={incidence.nbredeEtage} 
              onChange={handleChange} />
          {/* <label className="font13" style={{fontFamily:"bold"}}>CV:</label>
          <input   type="file" id="description" name="description" className="font20 " /> */}
          <SumbitWrapper>
            <Button variant="primary" type="submit" className="animate radius8" style={{ maxWidth: "220px", backgroundColor:"#1F4B43" }} onClick={handleSubmit}>
             Modifier
            </Button>
          </SumbitWrapper>
        </Form>
      </FormWrapper>
    </Container>
  </Wrapper>
  )
}

export default EditPrestataire;

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


