import React, { useEffect, useState, useRef } from 'react';
import styled from 'styled-components';
import { Button } from 'react-bootstrap';
import html2canvas from 'html2canvas';
import { FaPrint } from 'react-icons/fa';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function DemandeDetaille() {

  const { id } = useParams();
  const [prestataire, setprestataire] = useState({});
  const detailRef = useRef(null); // Référence à la section à capturer

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

  const handleDownload = () => {
    html2canvas(detailRef.current, {
      allowTaint: true,
      useCORS: true,
    }).then((canvas) => {
      const link = document.createElement('a');
      link.href = canvas.toDataURL('image/png');
      link.download = 'prestataire-details.png';
      link.click();
    });
  };

  return (
    <Wrapper>
      <Container>
        <DetailsWrapper ref={detailRef} id="capture">
          <HeaderInfo>
            <h1 className="font40 extraBold">Détails du prestataire</h1>
          </HeaderInfo>
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
        </DetailsWrapper>
        <ButtonWrapper>
          <Button variant="primary" onClick={handleDownload}>
            <FaPrint />
          </Button>
        </ButtonWrapper>
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

const DetailsWrapper = styled.div`
  width: 100%;
  padding: 30px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  margin-top: 60px;
`;

const Detail = styled.div`
  margin-bottom: 20px;
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

const ButtonWrapper = styled.div`
  margin-top: 20px;
`;

const ImageWrapper = styled.div`
  position: relative;
  width: 130px;
  height: 130px;
  margin-right: 20px;
`;

const ImageSection = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 30px;
`;
