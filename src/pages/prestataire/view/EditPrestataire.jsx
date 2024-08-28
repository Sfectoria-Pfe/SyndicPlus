import React, { useEffect, useState } from 'react';
import styled from "styled-components";
import { Button } from 'react-bootstrap';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

function EditPrestataire() {
  const navigate = useNavigate()
  const { id } = useParams();
  const [prestataire, setPrestataire] = useState({
    name: '',
    email: '',
    travail: '',
    description: '',
    telephone: '',
    avatar:''
  });

  useEffect(() => {
    const fetchPrestataireData = async () => {
      try {
        const response = await axios.get(`http://localhost:9000/prestataire/getprestataire/${id}`);
        const { name, email, travail, description, telephone, avatar } = response.data;
        setPrestataire({
          name: name || '',
          email: email || '',
          travail: travail || '',
          description: description || '',
          telephone: telephone || '',
          avatar: avatar || ''
        });
      } catch (error) {
        console.error('Error fetching prestataire data:', error);
      }
    };

    fetchPrestataireData();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPrestataire({ ...prestataire, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:9000/prestataire/updateprestataire/${id}`, prestataire);
      navigate(-1);
    } catch (error) {
      console.error('Erreur lors de la modification de prestataire:', error);
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
            <ImageSection>
              <ImageWrapper>
                <img
                  src={prestataire.avatar}
                  alt=""
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
              </ImageWrapper>
            </ImageSection>
            <label className="font13 " style={{ fontFamily: "bold" }}>Nom:</label>
            <input
              type="text"
              id="name"
              name="name"
              className="font20"
              value={prestataire.name}
              onChange={handleChange}
            />
            <label className="font13" style={{ fontFamily: "bold" }}>Email:</label>
            <input
              type="text"
              id="email"
              name="email"
              className="font20"
              value={prestataire.email}
              onChange={handleChange}
            />
            <label className="font13" style={{ fontFamily: "bold" }}>Travail:</label>
            <input
              type="text"
              id="travail"
              name="travail"
              className="font20"
              value={prestataire.travail}
              onChange={handleChange}
            />
            <label className="font13" style={{ fontFamily: "bold" }}>Téléphone:</label>
            <input
              type="number"
              id="telephone"
              name="telephone"
              className="font20"
              value={prestataire.telephone}
              onChange={handleChange}
            />
            <label className="font13" style={{ fontFamily: "bold" }}>Description:</label>
            <textarea
              id="description"
              name="description"
              className="font20"
              value={prestataire.description}
              onChange={handleChange}
            />
            <SumbitWrapper>
              <Button
                variant="primary"
                type="submit"
                className="animate radius8"
                style={{ maxWidth: "220px", backgroundColor: "#1F4B43" }}
                onClick={handleSubmit}
              >
                Modifier
              </Button>
            </SumbitWrapper>
          </Form>
        </FormWrapper>
      </Container>
    </Wrapper>
  );
}

export default EditPrestataire;

const Wrapper = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  // background-color: #f5f5f5;
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
    border: 0;
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

const ImageWrapper = styled.div`
  position: relative;
  width: 80px;
  height: 80px;
  margin-right: 20px;
`;

const ImageSection = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 30px;
`;
