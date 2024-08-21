import React, { useEffect, useState, useRef } from 'react';
import styled from 'styled-components';
import { Button } from 'react-bootstrap';
import html2canvas from 'html2canvas';
import { FaPrint } from 'react-icons/fa'; // Importer l'icône d'impression
import { useParams } from 'react-router-dom';
import axios from 'axios';

function IncidenceDetaille() {
  const { id } = useParams();
  const [incidence, setIncidence] = useState({});
  const imageRef = useRef(null); // Utilisation de useRef pour cibler l'image

  const getIncidence = async (id) => {
    try {
      const response = await axios.get(`http://localhost:9000/incidence/getincidence/${id}`);
      console.log(response.data, "incidence infos");
      setIncidence(response.data);
    } catch (error) {
      console.log("incidence n'est pas trouvée");
    }
  };

  useEffect(() => {
    getIncidence(id);
  }, [id]);

  const handleDownload = () => {
    html2canvas(document.querySelector("#capture"), {
      allowTaint: true,
      useCORS: true, // Utilisation de CORS si l'image provient d'une source externe
    }).then((canvas) => {
      const link = document.createElement('a');
      link.href = canvas.toDataURL('image/png');
      link.download = 'incidence-details.png';
      link.click();
    });
  };

  return (
    <Wrapper>
      <Container>
        <DetailsWrapper id="capture">
          <HeaderInfo>
            <h1 className="font40 extraBold">Détails de l'incidence</h1>
          </HeaderInfo>
          <ImageSection>
            <ImageWrapper>
              <img
                ref={imageRef} // Référence à l'image
                src={incidence?.avatar}
                alt="incidence"
                style={{
                  width: '130px',
                  height: '130px',
                  borderRadius: '20%',
                  objectFit: 'cover',
                  border: '1px solid #1F4B43',
                  marginLeft: '10px',
                }}
              />
            </ImageWrapper>
          </ImageSection>
          <Detail>
            <Label className="font13">Nombre de l'étage:</Label>
            <p className="font20">{incidence?.nbredeEtage}</p>
          </Detail>
          <Detail>
            <Label className="font13">Nom:</Label>
            <p className="font20">{incidence?.name}</p>
          </Detail>
          <Detail>
            <Label className="font13">Description:</Label>
            <p className="font20">{incidence?.descriptiondudegat}</p>
          </Detail>
          <Detail>
            <Label className="font13">Status:</Label>
            <p className="font20">{incidence?.status}</p>
          </Detail>
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

export default IncidenceDetaille;

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

const Label = styled.label`
  display: block;
  font-weight: bold;
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
