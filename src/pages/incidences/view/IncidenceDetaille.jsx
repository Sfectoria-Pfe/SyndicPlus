import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Button } from 'react-bootstrap';
import html2canvas from 'html2canvas';
import { FaPrint } from 'react-icons/fa'; // Importer l'icône d'impression
import { useParams } from 'react-router-dom';
import axios from 'axios';

function IncidenceDetaille() {
  const { id } = useParams()
  const [incidence, setincidence] = useState({})
  const getincidence = async (id) => {
    try {
      const response = await axios.get(`http://localhost:9000/incidence/getincidence/${id}`)
      console.log(response.data,"incidence infos")
      setincidence(response.data)
    } catch (error) {
      console.log("incidence n'est pas trouver")

    }
  }
  useEffect(() => {
    getincidence(id)

  }, [id])


  const handleDownload = () => {
    html2canvas(document.querySelector("#capture")).then(canvas => {
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
                src={incidence?.avatar} 
                alt="incidence"
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
            </ImageSection>
          <Detail>
            <Label className="font13">Nombre de l'étage:</Label>
            <p className="font20">{incidence?.nbredeEtage}</p> {/* Exemple de valeur */}
          </Detail>
          <Detail>
            <Label className="font13">Nom:</Label>
            <p className="font20">{incidence?.name}</p> {/* Exemple de valeur */}
          </Detail>
          <Detail>
         
          </Detail>
          <Detail>
            <Label className="font13">Description:</Label>
            <p className="font20">{incidence?.descriptiondudegat}</p> {/* Exemple de description */}
          </Detail>
          <Detail>
            <Label className="font13">Status:</Label>
            <p className="font20">{incidence?.status}</p> {/* Exemple de description */}
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
  margin-top: 20px; /* Ajustez cette valeur pour obtenir l'espacement souhaité */
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










































// import React from 'react'

// function IncidenceDetaille() {
//   return (
//     <div>
//       incidencedetaille
//     </div>
//   )
// }

// export default IncidenceDetaille
