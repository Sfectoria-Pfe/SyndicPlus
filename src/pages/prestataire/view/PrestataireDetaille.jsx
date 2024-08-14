import React from 'react';
import styled from 'styled-components';
import Pres1 from '../../../assets/img/Prestataire/Pres1.png';

// Fonction pour afficher les étoiles
const renderStars = (rating) => {
  const maxStars = 5;
  let stars = '';
  for (let i = 0; i < maxStars; i++) {
    stars += i < rating ? '⭐' : '☆'; // Utilise ⭐ pour les étoiles pleines et ☆ pour les étoiles vides
  }
  return stars;
};

function PrestataireDetaille() {
  return (
    <Wrapper>
      <Container>
        <HeaderInfo>
          {/* <h1 className="font40 extraBold">Les détails du Prestataire</h1> */}
        </HeaderInfo>
        <FormWrapper>
          <Form>
            <DetailsWrapper>
            <ImageWrapper>
              <img src={Pres1} alt="" />
            </ImageWrapper>
              <Detail>
                <label className="font13">Nom et Prénom:</label>
                <p className="font20">Jean Dupont</p> {/* Exemple de valeur */}
              </Detail>
              <Detail>
                <label className="font13">Email:</label>
                <p className="font20">jean.dupont@example.com</p> {/* Exemple de valeur */}
              </Detail>
              <Detail>
                <label className="font13">Travail:</label>
                <p className="font20">Plombier</p> {/* Exemple de valeur */}
              </Detail>
              <Detail>
                <label className="font13">Téléphone:</label>
                <p className="font20">+33 1 23 45 67 89</p> {/* Exemple de valeur */}
              </Detail>
              <Detail>
                <label className="font13">Description:</label>
                <p className="font20">Expert en plomberie avec 10 ans d'expérience dans la rénovation et la maintenance.</p> {/* Exemple de valeur */}
              </Detail>
              <Detail>
                <label className="font13">CV:</label>
                <p className="font20">
                  <a href="/path/to/cv-jean-dupont.pdf" download>
                    Télécharger le CV
                  </a>
                </p>
              </Detail>
              <Detail>
                <label className="font13">Commentaire:</label>
                <Commentary>
                  <Stars>{renderStars(4)}</Stars> {/* Exemple de note (4 étoiles) */}
                </Commentary>
              </Detail>
            </DetailsWrapper>
          </Form>
        </FormWrapper>
      </Container>
    </Wrapper>
  );
}

export default PrestataireDetaille;

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
  max-width: 900px;
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
  display: flex;
  align-items: flex-start;
  gap: 20px; /* Ajoute un espacement entre l'image et les détails */
  margin-top: 100px; /* Ajoute un espacement au-dessus du formulaire */
`;

const DetailsWrapper = styled.div`
  width: 100%;
  padding: 30px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
`;

const Detail = styled.div`
  margin-bottom: 20px;

  label {
    display: block;
    margin-bottom: 5px;
    font-family: bold;
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

      &:hover {
        text-decoration: underline;
      }
    }
  }
`;

const Commentary = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const Stars = styled.div`
  font-size: 20px;
  margin-top: 5px;
  color: #ffcc00; /* Couleur des étoiles */
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
