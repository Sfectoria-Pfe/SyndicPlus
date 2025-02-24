import React, { useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-scroll";
import 'aos/dist/aos.css';
import AOS from "aos";
// Components
import ClientSlider from "../Elements/ClientSlider";
import ServiceBox from "../Elements/ServiceBox";
import FullButton from "../Buttons/FullButton";
// Assets
import pres1 from '../../assets/img/Prestataire/Pres1.png'
import pres2 from '../../assets/img/Prestataire/Pres2.png'
import pres3 from '../../assets/img/Prestataire/Pres3.png'
import pres4 from '../../assets/img/Prestataire/Pres4.jpg'
import ModalPres from "./ModalPres";
import { Button } from "react-bootstrap";



export default function Services() {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,

    });
    AOS.refresh();
  }, []);
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <Wrapper id="services">
      <div className="lightBg" style={{ padding: "50px 0" }}>
        <div className="container">
          <ClientSlider />
        </div>
      </div>
      <div className="whiteBg" style={{ padding: "60px 0" }} data-aos='fade-left'>
        <div className="container">
          <HeaderInfo>
            <h1 className="font40 extraBold">Nos Services</h1>
            <p className="font13">
              une petite explication de nos services.
              {/* <br />
              labore et dolore magna aliquyam erat, sed diam voluptua. */}
            </p>
          </HeaderInfo>
          <ServiceBoxRow className="flex" >
            <ServiceBoxWrapper>
              <ServiceBox
                icon="roller"
                title="Prestataire"
                subtitle="dans cette service nous offrons que les prestataire peus postuler ces données et que les 
                locataire et les propriétaire peut choisir une seul prestataire, et le syndic gérer cette service."
              />
            </ServiceBoxWrapper>
            <ServiceBoxWrapper>
              <ServiceBox
                icon="monitor"
                title=" paiement"
                subtitle="dans cette service les locataire ou les propriétaire permet de payer les frais syndic."
              />
            </ServiceBoxWrapper>
            <ServiceBoxWrapper>
              <ServiceBox
                icon="browser"
                title="incidence"
                subtitle="dans cette cette service le locataire doit envoyer une deande d'incidence pour n'import endommagé dans le bâtiment."
              />
            </ServiceBoxWrapper>
            <ServiceBoxWrapper>
              <ServiceBox icon="printer" title="messagerie" subtitle="les utilisateurs permet d'envoyer des messages pour n'import qu'elle question." />
            </ServiceBoxWrapper>
          </ServiceBoxRow>
        </div>
        <div className="lightBg" data-aos='fade-right'>
          <div className="container">
            <Advertising className="flexSpaceCenter">
              <AddLeft>
                {/* <h4 className="font15 semiBold">A few words about company</h4> */}
                <h2 className="font40 extraBold">Rejoignez-nous</h2>
                <p className="font12">
               Nous avons besoin de votre experience dans notre bâtiment.
                </p>
                <ButtonsRow className="flexNullCenter" style={{ margin: "30px 0"}}>
                  <div style={{ width: "190px" }}>
                    <Button onClick={() => setModalShow(true)} style={{background:"#1F4B43",padding:"15px" ,width:"100%",borderRadius:"1rem"}}>Get Started</Button>
                    <ModalPres show={modalShow}
                      onHide={() => setModalShow(false)} />
                  </div>
                  <div style={{ width: "190px", marginLeft: "15px" }}>
                    <Link to="contact"><FullButton title="Contact nous" border /></Link>
                  </div>
                </ButtonsRow>
              </AddLeft>
              <AddRight>
                <AddRightInner>
                  <div className="flexNullCenter">
                    <AddImgWrapp1 className="flexCenter">
                      <img src={pres1} alt="office" />
                    </AddImgWrapp1>
                    <AddImgWrapp2>
                      <img src={pres2} alt="office" />
                    </AddImgWrapp2>
                  </div>
                  <div className="flexNullCenter">
                    <AddImgWrapp3>
                      <img src={pres3} alt="office"/>
                    </AddImgWrapp3>
                    <AddImgWrapp4>
                      <img src={pres4} alt="office" />
                    </AddImgWrapp4>
                  </div>
                </AddRightInner>
              </AddRight>
            </Advertising>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 100%;
`;
const ServiceBoxRow = styled.div`
  @media (max-width: 860px) {
    flex-direction: column;
  }
`;
const ServiceBoxWrapper = styled.div`
  width: 20%;
  margin-right: 5%;
  padding: 80px 0;
  @media (max-width: 860px) {
    width: 100%;
    text-align: center;
    padding: 40px 0;
  }
`;
const HeaderInfo = styled.div`
  @media (max-width: 860px) {
    text-align: center;
  }
`;
const Advertising = styled.div`
  margin: 80px 0;
  padding: 100px 0;
  position: relative;
  @media (max-width: 1160px) {
    padding: 100px 0 40px 0;
  }
  @media (max-width: 860px) {
    flex-direction: column;
    padding: 0 0 30px 0;
    margin: 80px 0 0px 0;
  }
`;
const ButtonsRow = styled.div`
  @media (max-width: 860px) {
    justify-content: space-between;
  }
`;
const AddLeft = styled.div`
  width: 50%;
  p {
    max-width: 475px;
  }
  @media (max-width: 860px) {
    width: 80%;
    order: 2;
    text-align: center;
    h2 {
      line-height: 3rem;
      margin: 15px 0;
    }
    p {
      margin: 0 auto;
    }
  }
`;
const AddRight = styled.div`
  width: 50%;
  position: absolute;
  top: -70px;
  right: 0;
  @media (max-width: 860px) {
    width: 80%;
    position: relative;
    order: 1;
    top: -40px;
  }
`;
const AddRightInner = styled.div`
  width: 100%;
`;
const AddImgWrapp1 = styled.div`
  width: 48%;
  margin: 0 6% 10px 6%;
  img {
    width: 100%;
    height: auto;
    border-radius: 1rem;
    box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -webkit-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -moz-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
  }
`;
const AddImgWrapp2 = styled.div`
  width: 30%;
  margin: 0 5% 10px 5%;
  img {
    width: 100%;
    height: auto;
    border-radius: 1rem;
    box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -webkit-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -moz-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
  }
`;
const AddImgWrapp3 = styled.div`
  width: 20%;
  margin-left: 40%;
  img {
    width: 100px;
    height: 110px;
    border-radius: 1rem;
    box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -webkit-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -moz-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
  }
`;
const AddImgWrapp4 = styled.div`
  width: 30%;
  margin: 0 5%auto;
  img {
    width: 100%;
    height: auto;
    border-radius: 1rem;
    box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -webkit-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -moz-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
  }
  
`;
