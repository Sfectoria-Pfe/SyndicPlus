import React, { useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-scroll";
// Components
import FullButton from "../Buttons/FullButton";
// Assets
import header from "../../assets/img/header.png";
import QuotesIcon from "../../assets/svg/Quotes";
import Dots from "../../assets/svg/Dots";
import 'aos/dist/aos.css';
import AOS from "aos";

export default function Header() {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,

    });
    AOS.refresh();
  }, []);

  return (
    <Wrapper id="home" className="container flexSpaceCenter mt-4" data-aos="fade-right">
      <LeftSide className="flexCenter mb-10">
        <div>
          <h1 className="extraBold font60 mb-2">We Are Syndic Plus</h1>
          <HeaderP className="font13 " style={{ fontWeight: 'semi-bold' }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam esse corrupti temporibus? Deserunt odit consectetur vel eveniet temporibus, fugit ratione quibusdam eos nam atque sapiente placeat necessitatibus magnam aut ad!
          </HeaderP>
          <BtnWrapper>
            <Link to="projects"> <FullButton title="A propos de nous" /></Link>
          </BtnWrapper>
        </div>
      </LeftSide>
      <RightSide >
        <ImageWrapper className="mb-8">
          <Img className="radius8" src={header} alt="office" style={{ zIndex: 9 }} />
          <QuoteWrapper className="flexCenter darkBg radius8">
            <QuotesWrapper>
              <QuotesIcon />
            </QuotesWrapper>
            <div>
              <p className="font15 whiteColor">
                <em>Une maison n'est pas seulement un lieu, c'est le reflet de l'âme de ceux qui y vivent.</em>
              </p>
              {/* <p className="font13 orangeColor textRight" style={{marginTop: '10px'}}>Ralph Waldo Emerson</p> */}
            </div>
          </QuoteWrapper>
          <DotsWrapper>
            <Dots />
          </DotsWrapper>
        </ImageWrapper>
        {/* <GreyDiv className="lightBg  "></GreyDiv> */}
      </RightSide>
    </Wrapper>
  );
}


const Wrapper = styled.section`
  padding-top: 80px;
  width: 100%;
  min-height: 840px;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;
const LeftSide = styled.div`
  width: 50%;
  height: 100%;
  @media (max-width: 960px) {
    width: 100%;
    order: 2;
    margin: 50px 0;
    text-align: center;
  }
  @media (max-width: 560px) {
    margin: 80px 0 50px 0;
  }
`;
const RightSide = styled.div`
  width: 50%;
  height: 100%;
  @media (max-width: 960px) {
    width: 100%;
    order: 1;
    margin-top: 30px;
  }
`;
const HeaderP = styled.div`
  max-width: 470px;
  padding: 15px 0 50px 0;
  line-height: 1.5rem;
  @media (max-width: 960px) {
    padding: 15px 0 50px 0;
    text-align: center;
    max-width: 100%;
  }
`;
const BtnWrapper = styled.div`
  max-width: 190px;
  @media (max-width: 960px) {
    margin: 0 auto;
  }
`;
// const GreyDiv = styled.div`
//   width: 30%;
//   height: 600px;
//   position: absolute;
//   top: 5;
//   right: 0;
//   z-index: 0;
//   @media (max-width: 960px) {
//     display: none;
//   }
// `;
const ImageWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  position: relative;
  z-index: 9;
  @media (max-width: 960px) {
    width: 100%;
    justify-content: center;
  }
`;
const Img = styled.img`
  @media (max-width: 560px) {
    width: 80%;
    height: auto;
  }
`;
const QuoteWrapper = styled.div`
  position: absolute;
  left: 0;
  bottom: 50px;
  max-width: 330px;
  padding: 30px;
  z-index: 99;
  @media (max-width: 960px) {
    left: 20px;
  }
  @media (max-width: 560px) {
    bottom: -50px;
  }
`;
const QuotesWrapper = styled.div`
  position: absolute;
  left: -20px;
  top: -10px;
`;
const DotsWrapper = styled.div`
  position: absolute;
  right: -100px;
  bottom: 100px;
  z-index: 2;
  @media (max-width: 960px) {
    right: 100px;
  }
  @media (max-width: 560px) {
    display: none;
  }
`;


