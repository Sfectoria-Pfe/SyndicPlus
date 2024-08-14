import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link as ScrollLink } from "react-scroll";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from 'react-bootstrap/Image';
// Assets
import Logo from "../../assets/img/Logo.png";

export default function TopNavbar() {
  const [y, setY] = useState(window.scrollY);
  const navigate = useNavigate()

  useEffect(() => {
    window.addEventListener("scroll", () => setY(window.scrollY));
    return () => {
      window.removeEventListener("scroll", () => setY(window.scrollY));
    };
  }, [y]);

  return (
    <>
      <Wrapper className="flexCenter animate whiteBg" style={y > 100 ? { height: "60px" } : { height: "80px" }}>
        <NavInner className="container flexSpaceCenter">
          <Image 
            src={Logo}
            alt="Logo"
            width="110"
            height="59"
            className="d-inline-block align-top"
          />
          <UlWrapper className="flexNullCenter">
            <li className="semiBold font15 pointer">
              <RouterLink to="/" style={{ padding: "10px 15px", color:'#1F4B43'}}>
                Home
              </RouterLink>
            </li>
            <li className="semiBold font15 pointer">
              <ScrollLink to="services" activeClass="active" style={{ padding: "10px 15px" }} spy={true} smooth={true} offset={-80}>
                Services
              </ScrollLink>
            </li>
            <li className="semiBold font15 pointer">
              <ScrollLink to="projects" activeClass="active" style={{ padding: "10px 15px" }} spy={true} smooth={true} offset={-80}>
                Projects
              </ScrollLink>
            </li>
            <li className="semiBold font15 pointer">
              <ScrollLink to="review" activeClass="active" style={{ padding: "10px 15px" }} spy={true} smooth={true} offset={-80}>
                Review
              </ScrollLink>
            </li>
            <li className="semiBold font15 pointer">
              <ScrollLink to="contact" activeClass="active" style={{ padding: "10px 15px" }} spy={true} smooth={true} offset={-80}>
                Contact
              </ScrollLink>
            </li>
          </UlWrapper>
          <UlWrapperRight className="flexNullCenter">
            <li className="nav-item">
              <button className="btn btn-outline-dark font-weight-semibold" style={{ marginRight: '10px', backgroundColor: '#1F4B43', color: 'white' }} onClick={() => navigate("/SignUp")}>
                S'inscrire
              </button>
            </li>
            <li className="nav-item">
              <button className="btn btn-outline-dark font-weight-semibold" style={{ backgroundColor: '#1F4B43', color: 'white' }} onClick={() => navigate("/login")}>
                Se connecter
              </button>
            </li>
          </UlWrapperRight>
        </NavInner>
      </Wrapper>
    </>
  );
}

const Wrapper = styled.nav`
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
`;

const NavInner = styled.div`
  position: relative;
  height: 100%;
`;

const UlWrapper = styled.ul`
  display: flex;
  @media (max-width: 760px) {
    display: none;
  }
`;

const UlWrapperRight = styled.ul`
  @media (max-width: 760px) {
    display: none;
  }
`;


