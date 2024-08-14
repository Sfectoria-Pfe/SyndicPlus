import React from "react";
import styled from "styled-components";
// Assets
import contact1 from "../../assets/img/contact1.jpeg";
import contact2 from "../../assets/img/contact2.jpg";
import contact3 from "../../assets/img/contact3.png";

export default function Contact() {
  
  return (
    <Wrapper id="contact">
      <div >
        <div className="container">
          <HeaderInfo>
            <h1 className="font40 extraBold">Contactez nous</h1>
            <p className="font13">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
              <br />
              labore et dolore magna aliquyam erat, sed diam voluptua.
            </p>
          </HeaderInfo>
          <div className="row" style={{ paddingBottom: "30px" }}>
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
              <Form>
                <label className="font13">Nom:</label>
                <input type="text" id="nom" name="nom" className="font20" />
                <label className="font13">Email:</label>
                <input type="text" id="email" name="email" className="font20" />
                <label className="font13">Sujet:</label>
                <input type="text" id="dujet" name="sujet" className="font20" />
                <label className="font13">Description:</label>
                <textarea rows="4" cols="50" type="text" id="message" name="message" className="font20" />
              </Form>
              <SumbitWrapper className="flex">
                <ButtonInput type="submit" value="Envoyer votre message" className="pointer animate radius8" style={{ maxWidth: "220px" }} />
              </SumbitWrapper>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 flex">
              <div style={{ width: "50%" }} className="flexNullCenter flexColumn">
                <ContactImgBox>
                  <img src={contact1} alt="office" className="radius6"  width={180} height={204} style={{objectFit:"cover", objectPosition:"-55px"}} />
                </ContactImgBox>
                <ContactImgBox>
                  <img src={contact2} alt="office" className="radius6" width={180} height={295} style={{objectFit:"cover", objectPosition:"-55px"}}/>
                </ContactImgBox>
              </div>
              <div style={{ width: "50%" }}>
                <div style={{ marginTop: "100px" }}>
                  <img src={contact3} alt="office" className="radius6"  width={278} height={330} style={{objectFit:"cover", objectPosition:"-55px"}}/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 100%;
`;
const HeaderInfo = styled.div`
  padding: 70px 0 30px 0;
  @media (max-width: 860px) {
    text-align: center;
  }
`;
const Form = styled.form`
  padding: 70px 0 30px 0;
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
  @media (max-width: 860px) {
    padding: 30px 0;
  }
`;
const ButtonInput = styled.input`
  border: 1px solid #1F4B43;
  background-color: #1F4B43;
  width: 100%;
  padding: 15px;
  outline: none;
  color: #fff;
  :hover {
    background-color: #1F4B43;
    border: 1px solid #7620ff;
    color: #fff;
  }
  @media (max-width: 991px) {
    margin: 0 auto;
  }
`;
const ContactImgBox = styled.div`
  max-width: 180px; 
  align-self: flex-end; 
  margin: 10px 30px 10px 0;
  object-fit:cover;
`;
const SumbitWrapper = styled.div`
  @media (max-width: 991px) {
    width: 100%;
    margin-bottom: 50px;
  }
`;









