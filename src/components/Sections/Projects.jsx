import React from "react";
import styled from "styled-components";
import { MdOutlineBedroomChild } from "react-icons/md";
import { TbBath } from "react-icons/tb";
import { MdOutlineBalcony } from "react-icons/md";
import { FaWifi } from "react-icons/fa6";
import { RiParkingBoxLine } from "react-icons/ri";
import { MdOutlineSevereCold } from "react-icons/md";
import { FaKitchenSet } from "react-icons/fa6";
// Components
import ProjectBox from "../Elements/ProjectBox";
import FullButton from "../Buttons/FullButton";
// Assets
import Appart1 from "../../assets/img/Appartements/Appart1.png";
import Appart2 from "../../assets/img/Appartements/Appart2.png";
import Appart3 from "../../assets/img/Appartements/Appart3.png";
import Appart4 from "../../assets/img/Appartements/Appart4.png";
import Appart5 from "../../assets/img/Appartements/Appart5.png";
import Appart6 from "../../assets/img/Appartements/Appart6.png";
import Batiment from "../../assets/img/add/Batiment.jpg";
import Demo from "./Demo";
import { Button } from "react-bootstrap";

export default function Projects() {
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <Wrapper id="projects">
      <div className="lightBg">
        <div className="container">
          <Advertising className="flexSpaceCenter">
            <AddLeft>
              <AddLeftInner>
                <ImgWrapper className="flexCenter">
                  <img className="radius8" src={Batiment} alt="add" width={426} height={607}/>
                </ImgWrapper>
              </AddLeftInner>
            </AddLeft>
            <AddRight>
              <h4 className="font15 semiBold">A propos de nous</h4>
              <h2 className="font40 extraBold">Syndic Plus</h2>
              <p className="font12">
              Bienvenue sur SyndicPlus, l'application innovante conçue pour simplifier la gestion 
              des relations entre les syndics et les résidents de leur bâtiment. Avec SyndicPlus, 
              les syndics peuvent désormais offrir des services efficaces et transparents pour améliorer
              la vie de la communauté, Nous offrons une solution complète pour gérer efficacement les paiements,
              la gestion des incidnces et la gestion des prestataire.
              </p>
              <div style={{ width: "190px" }}>
                    <Button onClick={() => setModalShow(true)} style={{background:"#1F4B43",padding:"15px" ,width:"100%",borderRadius:"1rem"}}>Demo</Button>
                    <Demo show={modalShow}
                      onHide={() => setModalShow(false)} />
                  </div>
            </AddRight>
          </Advertising>
        </div>
      </div>
      <div className="whiteBg " style={{marginTop:"250px"}}>
        <div className="container" >
          <HeaderInfo>
            <h1 className="font40 extraBold">nos appartement dans notre bâtiment</h1>
            {/* <p className="font13">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
              <br />
              labore et dolore magna aliquyam erat, sed diam voluptua.
            </p> */}
          </HeaderInfo>
          <div className="row textCenter">
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <ProjectBox
                img={Appart1}
                title="Appartement 1"
                // text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor."
                action={() => alert("clicked")}
              />
              <IconContainer>
                <div>
                  <MdOutlineBedroomChild />
                  <p>2 Chombre</p>
                </div>
                <div>
                  <TbBath />
                  <p>1 salle de bain</p>
                </div>
              </IconContainer>
              <IconContainer>
              <div>
              <MdOutlineBalcony/>
              <p  className="me-5">balcon</p>
              </div>
              <div>
              <FaWifi />
              <p>wifi gratuit</p>
              </div>
              </IconContainer>
              <IconContainer>
              <div>
              <RiParkingBoxLine />
              <p>parking payant</p>
              </div>
              <div>
              <MdOutlineSevereCold />
              <p>climatisation</p>
              </div>
              </IconContainer>
              <IconContainer>
              <div>
              <FaKitchenSet />
              <p>cuisine</p>
              </div>
              </IconContainer>
              </div>
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <ProjectBox
                img={Appart2}
                title="Appartement 2"
                // text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor."
                action={() => alert("clicked")}
              />
                 <IconContainer>
                <div>
                  <MdOutlineBedroomChild />
                  <p>3 Chombre</p>
                </div>
                <div>
                  <TbBath />
                  <p>2 salle de bain</p>
                </div>
              </IconContainer>
              <IconContainer>
              <div>
              <MdOutlineBalcony/>
              <p  className="me-5">balcon</p>
              </div>
              <div>
              <FaKitchenSet />
              <p>cuisine</p>
              </div>
              </IconContainer>
              <IconContainer>
              <div>
              <RiParkingBoxLine />
              <p>parking payant</p>
              </div>
              <div>
              <MdOutlineSevereCold />
              <p>climatisation</p>
              </div>
              </IconContainer>
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <ProjectBox
                img={Appart3}
                title="Awesome Project"
                // text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor."
                action={() => alert("clicked")}
              />
                 <IconContainer>
                <div>
                  <MdOutlineBedroomChild />
                  <p>1 Chombre</p>
                </div>
                <div>
                  <TbBath />
                  <p>1 salle de bain</p>
                </div>
              </IconContainer>
              <IconContainer>
              <div>
              <MdOutlineBalcony/>
              <p  className="me-5">balcon</p>
              </div>
              <div>
              <FaKitchenSet />
              <p>cuisine</p>
              </div>
              </IconContainer>
              <IconContainer>
              <div>
              <RiParkingBoxLine />
              <p>parking payant</p>
              </div>
              <div>
              <MdOutlineSevereCold />
              <p>climatisation</p>
              </div>
              </IconContainer>
            </div>
          </div>
          <div className="row textCenter">
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <ProjectBox
                img={Appart4}
                title="Awesome Project"
                // text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor."
                action={() => alert("clicked")}
              />
                 <IconContainer>
                <div>
                  <MdOutlineBedroomChild />
                  <p>2 Chombre</p>
                </div>
                <div>
                  <TbBath />
                  <p>1 salle de bain</p>
                </div>
              </IconContainer>
              <IconContainer>
              <div>
              <MdOutlineBalcony/>
              <p  className="me-5">balcon</p>
              </div>
              <div>
              <FaKitchenSet />
              <p>cuisine</p>
              </div>
              </IconContainer>
              <IconContainer>
              <div>
              <RiParkingBoxLine />
              <p>parking payant</p>
              </div>
              <div>
              <MdOutlineSevereCold />
              <p>climatisation</p>
              </div>
              </IconContainer>
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <ProjectBox
                img={Appart5}
                title="Awesome Project"
                // text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor."
                action={() => alert("clicked")}
              />
                 <IconContainer>
                <div>
                  <MdOutlineBedroomChild />
                  <p>3 Chombre</p>
                </div>
                <div>
                  <TbBath />
                  <p>2 salle de bain</p>
                </div>
              </IconContainer>
              <IconContainer>
              <div>
              <MdOutlineBalcony/>
              <p  className="me-5">balcon</p>
              </div>
              <div>
              <FaKitchenSet />
              <p>cuisine</p>
              </div>
              </IconContainer>
              <IconContainer>
              <div>
              <RiParkingBoxLine />
              <p>parking payant</p>
              </div>
              <div>
              <MdOutlineSevereCold />
              <p>climatisation</p>
              </div>
              </IconContainer>
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <ProjectBox
                img={Appart6}
                title="Awesome Project"
                // text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor."
                action={() => alert("clicked")}
              />
                 <IconContainer>
                <div>
                  <MdOutlineBedroomChild />
                  <p>4 Chombre</p>
                </div>
                <div>
                  <TbBath />
                  <p>3 salle de bain</p>
                </div>
              </IconContainer>
              <IconContainer>
              <div>
              <MdOutlineBalcony/>
              <p  className="me-5">balcon</p>
              </div>
              <div>
              <FaKitchenSet />
              <p>cuisine</p>
              </div>
              </IconContainer>
              <IconContainer>
              <div>
              <RiParkingBoxLine />
              <p>parking payant</p>
              </div>
              <div>
              <MdOutlineSevereCold />
              <p>climatisation</p>
              </div>
              </IconContainer>
            </div>
          </div>
          <div className="row flexCenter">
            <div style={{ margin: "50px 0", width: "200px" }}>
              <FullButton title="Load More" action={() => alert("clicked")} />
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
  @media (max-width: 860px) {
    text-align: center;
  }
`;
const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 25px;

  div {
    display: flex;
    align-items: center;
    gap: 5px;

    p {
      margin: 0;
    }
  }
`;
const Advertising = styled.div`
  padding: 100px 0;
  margin: 100px 0;
  position: relative;
  @media (max-width: 1160px) {
    padding: 60px 0 40px 0;
  }
  @media (max-width: 860px) {
    flex-direction: column;
    padding: 0 0 30px 0;
    margin: 80px 0 0px 0;
  }
`;
const AddLeft = styled.div`
  position: relative;
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
  @media (max-width: 860px) {
    width: 80%;
    order: 2;
  }
`;
const AddLeftInner = styled.div`
  width: 100%;
  position: absolute;
  top: -300px;
  left: 0;
  @media (max-width: 1190px) {
    top: -250px;
  }
  @media (max-width: 920px) {
    top: -200px;
  }
  @media (max-width: 860px) {
    order: 1;
    position: relative;
    top: -60px;
    left: 0;
  }
`;
const ImgWrapper = styled.div`
  width: 100%;
  padding: 0 15%;
  img {
    width: 426px;
    height: 607px;
  }
  @media (max-width: 400px) {
    padding: 0;
  }
`;
