import React from 'react';
import styled from 'styled-components';
import Proprietaire from '../../../assets/img/proprietaire1.jpg'; 

export default function ProprietaireDetaille() {
  return (
    <Wrapper>
    <Container>
      <HeaderInfo>
        {/* <h1 className="font40 extraBold">Ajouter Locataire</h1> */}
      </HeaderInfo>
      <FormWrapper>
        <Form>
          <ImageSection>
            <ImageWrapper>
              <img 
                src={Proprietaire} 
                alt="Locataire"
                style={{
                  width: '130px',
                  height: '130px',
                  borderRadius: '20%',
                  objectFit: 'cover',
                  border: '1px solid #1F4B43',
                  marginLeft: '10px'
                }}
              />
            </ImageWrapper>
            <InputWrapper>
              <label className="font20" style={{ fontFamily: 'bold', marginLeft: '90px', marginTop: '40px' }}>
                Nom Complet:
              </label>
              <p  style={{ marginLeft: '90px' }}>amir ben molehem</p> 
            </InputWrapper>
          </ImageSection>
          <InputWrapper>
            <label className="font20">Email:</label>
            <p >Amirabenmoleh52@gmail.com</p> 
            <label className="font20">Mot de passe:</label>
            <p >mohamedSal520147</p> 
            <label className="font20">Numéro de l'étage:</label>
            <p>4</p> 
            <label className="font20">Numéro de l'appartement:</label>
            <p >5</p> 
          </InputWrapper>
          {/* Décommentez cette section si vous utilisez un bouton */}
          {/* <SumbitWrapper>
            <Button variant="primary" type="submit" className="animate radius8" style={{ maxWidth: '220px', backgroundColor: '#1F4B43' }}>
              Ajouter
            </Button>
          </SumbitWrapper> */}
        </Form>
      </FormWrapper>
    </Container>
  </Wrapper>
  );
}


const Wrapper = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: flex-start; /* Aligne le contenu en haut */
  background-color: #f5f5f5;
`;

const Container = styled.div`
  width: 100%;
  max-width: 800px;
  margin-top: 10px; /* Ajustez ce margin-top pour la position du formulaire */
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

const ImageSection = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 30px;
`;

const ImageWrapper = styled.div`
  position: relative;
  width: 130px;
  height: 130px;
  margin-right: 20px;
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
    margin-bottom: 20px;
  }

  textarea {
    min-height: 100px;
  }
`;

