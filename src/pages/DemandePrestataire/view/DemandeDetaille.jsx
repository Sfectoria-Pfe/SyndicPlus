import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function DemandeDetaille() {

  const { id } = useParams();
  const [prestataire, setprestataire] = useState({});

  const getprestataire = async (id) => {
    try {
      const response = await axios.get(`http://localhost:9000/demandePrestataire/getdemandeprestataire/${id}`);
      console.log(response.data, "prestataire infos");
      setprestataire(response.data);
    } catch (error) {
      console.log("prestataire n'est pas trouvé");
    }
  };

  useEffect(() => {
    getprestataire(id);
  }, [id]);

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
                  src={prestataire?.avatar}
                  alt="Prestataire"
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
                  Nom et Prénom:
                </label>
                <p style={{ marginLeft: '90px' }}>{prestataire?.name}</p>
              </InputWrapper>
            </ImageSection>
            <DetailsWrapper>
              <Detail>
                <label className="font13">Email:</label>
                <p className="font20">{prestataire?.email}</p>
              </Detail>
              <Detail>
                <label className="font13">Travail:</label>
                <p className="font20">{prestataire?.travail}</p>
              </Detail>
              <Detail>
                <label className="font13">Téléphone:</label>
                <p className="font20">{prestataire?.telephone}</p>
              </Detail>
              <Detail>
                <label className="font13">Description:</label>
                <p className="font20">{prestataire?.description}</p>
              </Detail>
              <Detail>
                <label className="font13">CV:</label>
                <p className="font20">
                  <a href={prestataire?.cv} download target="_blank" rel="noopener noreferrer">
                    Imprimer
                  </a>
                </p>
              </Detail>

            </DetailsWrapper>
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

export default DemandeDetaille;

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

const DetailsWrapper = styled.div`
  margin-top: 30px;
`;

const Detail = styled.div`
  margin-bottom: 20px;
`;
