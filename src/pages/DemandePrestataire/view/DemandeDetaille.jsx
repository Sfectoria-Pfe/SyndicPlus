import React from 'react';
import styled from 'styled-components';
import Pres2 from '../../../assets/img/Prestataire/Pres2.png';

function DemandeDetaille() {
  return (
    <Wrapper>
      <Container>
        <HeaderInfo>
          <h1 className="font40 extraBold">Les détails du Prestataire</h1>
        </HeaderInfo>
        <FormWrapper>
          <Form>
            <DetailsWrapper>
            <ImageWrapper>
              <img src={Pres2} alt="" />
            </ImageWrapper>
              <Detail>
                <label className="font13" style={{ fontFamily: "bold" }}>Nom:</label>
                <p className="font20">Jean Dupont</p> {/* Exemple de valeur */}
              </Detail>
              <Detail>
                <label className="font13" style={{ fontFamily: "bold" }}>Email:</label>
                <p className="font20">jean.dupont@example.com</p> {/* Exemple de valeur */}
              </Detail>
              <Detail>
                <label className="font13" style={{ fontFamily: "bold" }}>Travail:</label>
                <p className="font20">Pharmacien</p> {/* Exemple de valeur */}
              </Detail>
              <Detail>
                <label className="font13" style={{ fontFamily: "bold" }}>Téléphone:</label>
                <p className="font20">+33 1 23 45 67 89</p> {/* Exemple de valeur */}
              </Detail>
              <Detail>
                <label className="font13" style={{ fontFamily: "bold" }}>Description:</label>
                <p className="font20">Expert en plomberie avec 10 ans d'expérience dans la rénovation et la maintenance.</p> {/* Exemple de valeur */}
              </Detail>
              <Detail>
                <label className="font13" style={{ fontFamily: "bold" }}>CV:</label>
                <p className="font20">
                  <a href="/path/to/cv-jean-dupont.pdf" download className="cv-link">
                    Télécharger le CV
                  </a>
                </p> {/* Exemple de valeur */}
              </Detail>
            </DetailsWrapper>
          </Form>
        </FormWrapper>
      </Container>
    </Wrapper>
  );
}

export default DemandeDetaille;

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
`;

const DetailsWrapper = styled.div`
  width: 100%;
  padding: 30px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const Detail = styled.div`
  margin-bottom: 20px;

  label {
    display: block;
    margin-bottom: 5px;
  }

  p {
    width: 100%;
    background-color: transparent;
    border: 1px solid #707070;
    border-radius: 4px;
    padding: 10px;
    box-sizing: border-box;
    margin: 0; /* Remove default margin */

    a {
      color: #007bff;
      text-decoration: none;
      font-weight: bold;

      &:hover {
        text-decoration: underline;
      }
    }
  }
`;
const ImageWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-right: 20px;
  margin-bottom: 20px; /* Ajoute un espacement en bas de l'image */

  img {
    width: 130px;
    height: 130px;
    border-radius: 20%;
    object-fit: cover;
    border: 1px solid #1F4B43;
  }
`;