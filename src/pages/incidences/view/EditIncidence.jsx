import React, { useState, useEffect } from 'react';
import styled from "styled-components";
import { Button } from 'react-bootstrap'; 
import axios from 'axios';
import { useParams } from 'react-router-dom';

function EditIncidence() {
  const { id } = useParams();
  const [incidence, setIncidence] = useState({
    nbredeEtage: '',
    name: '',
    descriptiondudegat: '',
    avatar: '',
    status: ''
  });

  useEffect(() => {
    const fetchIncidenceData = async () => {
      try {
        const response = await axios.get(`http://localhost:9000/incidence/oneincidence/${id}`);
        const {  nbredeEtage,name,descriptiondudegat,avatar,status} = response.data;
        setIncidence({
          nbredeEtage: nbredeEtage || '',
            name: name ||'',
            descriptiondudegat: descriptiondudegat || '',
            avatar: avatar || '',
            status: status || ''
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
      await axios.put(`http://localhost:9000/incidence/updateincidence/${id}`, incidence);
      alert('Incidence modifiée avec succès');
    } catch (error) {
      console.error('Erreur lors de la modification de l\'incidence:', error);
    }
  };

  return (
    <Wrapper>
      <Container>
        <HeaderInfo>
          <h1 className="font40 extraBold">Modifier une incidence</h1>
        </HeaderInfo>
        <FormWrapper>
          <Form onSubmit={handleSubmit}>
            <label className="font13">Nombre de l'étage:</label>
            <input 
              type="number" 
              name="nbredeEtage" 
              className="font20" 
              value={incidence.nbredeEtage} 
              onChange={handleChange} 
            />
            <label className="font13">Nom:</label>
            <input 
              type="text" 
              name="name" 
              className="font20" 
              value={incidence.name} 
              onChange={handleChange} 
            />
            <label className="font13">Photo:</label>
            <input 
              type="file" 
              name="avatar" 
              className="font20" 
              onChange={handleChange} 
            />
            <label className="font13">Description:</label>
            <textarea 
              name="descriptiondudegat" 
              className="font20" 
              value={incidence.descriptiondudegat} 
              onChange={handleChange} 
            />
            <label className="font13">Status:</label>
            <input 
              type="text" 
              name="status" 
              className="font20" 
              value={incidence.status} 
              onChange={handleChange} 
            />
            <SumbitWrapper>
              <Button variant="primary" type="submit" className="animate radius8" style={{ maxWidth: "220px", backgroundColor:"#1F4B43" }} onClick={handleSubmit}>
                Modifier
              </Button>
            </SumbitWrapper>
          </Form>
        </FormWrapper>
      </Container>
    </Wrapper>
  );
}

export default EditIncidence;

const Wrapper = styled.section`
  width: 100%;
  height: 100vh; 
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f5f5f5;
`;

const Container = styled.div`
  width: 100%;
  max-width: 800px;
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
