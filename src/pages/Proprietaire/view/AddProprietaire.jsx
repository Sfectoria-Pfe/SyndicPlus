import React from 'react';
import styled from "styled-components";
import { Button } from 'react-bootstrap'; 

function AddProprietaire() {
  return (
    <Wrapper>
      <Container>
        <HeaderInfo>
          <h1 className="font40 extraBold">Ajouter Proprietaire</h1>
        </HeaderInfo>
        <FormWrapper>
          <Form>
            <label className="font13">Nom complete:</label>
            <input type="text" id="nomcomplete" name="nomcomplete" className="font20" />
            <label className="font13">Email:</label>
            <input type="email" id="email" name="email" className="font20" />
            <label className="font13">Mot de passe:</label>
            <input type="password" id="password" name="password" className="font20" />
            <label className="font13">Confirmer mot de passe:</label>
            <input type="password" id="confirmpassword" name="confirmpassword" className="font20" />
            <SumbitWrapper>
              <Button variant="primary" type="submit" className="animate radius8" style={{ maxWidth: "220px", backgroundColor:"#1F4B43" }}>
               Ajouter
              </Button>
            </SumbitWrapper>
          </Form>
        </FormWrapper>
      </Container>
    </Wrapper>
  )
}

export default AddProprietaire;

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

