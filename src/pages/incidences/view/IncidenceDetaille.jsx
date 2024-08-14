import React from 'react';
import styled from "styled-components";
import { Button } from 'react-bootstrap';
import html2canvas from 'html2canvas';
import { FaPrint } from 'react-icons/fa'; // Importer l'icône d'impression
import Télèphone from '../../../assets/img/contact2.jpg';

function IncidenceDetaille() {
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
          <Detail>
            <Label className="font13">Nombre de l'étage:</Label>
            <p className="font20">5</p> {/* Exemple de valeur */}
          </Detail>
          <Detail>
            <Label className="font13">Nom:</Label>
            <p className="font20">Fuite d'eau</p> {/* Exemple de valeur */}
          </Detail>
          <Detail>
            <Label className="font13">Photo:</Label>
            <img src={Télèphone} alt="Incidence" className="font20" style={{ maxWidth: '40%' }} /> {/* Exemple de photo */}
          </Detail>
          <Detail>
            <Label className="font13">Description:</Label>
            <p className="font20">Il y a une fuite d'eau importante dans le couloir du 5ème étage. Une intervention rapide est nécessaire.</p> {/* Exemple de description */}
          </Detail>
        </DetailsWrapper>
        <Button variant="primary" onClick={handleDownload} style={{ marginTop: '20px' }}>
          <FaPrint style={{ marginRight: '8px' }} />
        </Button>
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
`;

const Detail = styled.div`
  margin-bottom: 20px;
`;

const Label = styled.label`
  display: block;
  font-weight: bold;
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
