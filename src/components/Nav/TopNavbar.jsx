import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, useNavigate } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import "../../style/navbar.css"

function TopNavbar() {
  const navigate = useNavigate()
  return (
    <Navbar expand="lg" className="bg-body-tertiary " style={{position:"fixed",width:"100%",zIndex:5,top:0,background:"#f5f5f5"}}>
    <Container fluid >
      <Navbar.Brand href="#" style={{fontSize: '1.5rem',fontWeight:"bold",color:'#1F4B43',cursor:"pointer"}}>SyndicPlus</Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll" className='navbbar' style={{color:"#1F4B43"}}/>
      <Navbar.Collapse id="navbarScroll">
        <Nav
          className="mx-auto my-2 my-lg-0"
          style={{ maxHeight: '100px' }}
          navbarScroll
        >
          <Link
            to="/"
           
            className="nav-link"
            style={{fontSize: '0.938rem',fontWeight:"semi-bold",color:'#1F4B43',cursor:"pointer"}}
          >
            Home
          </Link>
          <ScrollLink
            to="services"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="nav-link"
            style={{fontSize: '0.938rem',fontWeight:"semi-bold",color:'#1F4B43',cursor:"pointer"}}
          >
            Services
          </ScrollLink>
          <ScrollLink
            to="projects"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="nav-link"
            style={{fontSize: '0.938rem',fontWeight:"semi-bold",color:'#1F4B43',cursor:"pointer"}}
          >
            Projects
          </ScrollLink>
          <ScrollLink
            to="review"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="nav-link"
            style={{fontSize: '0.938rem',fontWeight:"semi-bold",color:'#1F4B43',cursor:"pointer"}}
          >
            Review
          </ScrollLink>
          <ScrollLink
            to="contact"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="nav-link"
            style={{fontSize: '0.938rem',fontWeight:"semi-bold",color:'#1F4B43',cursor:"pointer"}}
          >
            Contact
          </ScrollLink>
        </Nav>
        <button className="btn btn-outline-dark font-weight-semibold" style={{ backgroundColor: '#1F4B43', color: 'white' ,cursor:"pointer"}} onClick={() => navigate("/login")}>
          Se connecter
        </button>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  );
}

export default TopNavbar;
















// import React, { useEffect, useState } from "react";
// import styled from "styled-components";
// import { Link as ScrollLink } from "react-scroll";
// import { Link as RouterLink, useNavigate } from "react-router-dom";
// import 'bootstrap/dist/css/bootstrap.min.css';
// import Image from 'react-bootstrap/Image';
// // Assets
// import Logo from "../../assets/img/Logo.png";

// export default function TopNavbar() {
//   const [y, setY] = useState(window.scrollY);
//   const navigate = useNavigate()

//   useEffect(() => {
//     window.addEventListener("scroll", () => setY(window.scrollY));
//     return () => {
//       window.removeEventListener("scroll", () => setY(window.scrollY));
//     };
//   }, [y]);

//   return (
//     <>
//       <Wrapper className="flexCenter animate whiteBg" style={y > 100 ? { height: "60px" } : { height: "80px" }}>
//         <NavInner className="container flexSpaceCenter">
//           <Image 
//             src={Logo}
//             alt="Logo"
//             width="110"
//             height="59"
//             className="d-inline-block align-top"
//           />
//           <UlWrapper className="flexNullCenter">
//             <li className="semiBold font15 pointer">
//               <RouterLink to="/" style={{ padding: "10px 15px", color:'#1F4B43'}}>
//                 Home
//               </RouterLink>
//             </li>
//             <li className="semiBold font15 pointer">
//               <ScrollLink to="services" activeClass="active" style={{ padding: "10px 15px" }} spy={true} smooth={true} offset={-80}>
//                 Services
//               </ScrollLink>
//             </li>
//             <li className="semiBold font15 pointer">
//               <ScrollLink to="projects" activeClass="active" style={{ padding: "10px 15px" }} spy={true} smooth={true} offset={-80}>
//                 Projects
//               </ScrollLink>
//             </li>
//             <li className="semiBold font15 pointer">
//               <ScrollLink to="review" activeClass="active" style={{ padding: "10px 15px" }} spy={true} smooth={true} offset={-80}>
//                 Review
//               </ScrollLink>
//             </li>
//             <li className="semiBold font15 pointer">
//               <ScrollLink to="contact" activeClass="active" style={{ padding: "10px 15px" }} spy={true} smooth={true} offset={-80}>
//                 Contact
//               </ScrollLink>
//             </li>
//           </UlWrapper>
//           <UlWrapperRight className="flexNullCenter">
//             {/* <li className="nav-item">
//               <button className="btn btn-outline-dark font-weight-semibold" style={{ marginRight: '10px', backgroundColor: '#1F4B43', color: 'white' }} onClick={() => navigate("/SignUp")}>
//                 S'inscrire
//               </button>
//             </li> */}
//             <li className="nav-item">
//               <button className="btn btn-outline-dark font-weight-semibold" style={{ backgroundColor: '#1F4B43', color: 'white' }} onClick={() => navigate("/login")}>
//                 Se connecter
//               </button>
//             </li>
//           </UlWrapperRight>
//         </NavInner>
//       </Wrapper>
//     </>
//   );
// }

// const Wrapper = styled.nav`
//   width: 100%;
//   position: fixed;
//   top: 0;
//   left: 0;
//   z-index: 999;
// `;

// const NavInner = styled.div`
//   position: relative;
//   height: 100%;
// `;

// const UlWrapper = styled.ul`
//   display: flex;
//   @media (max-width: 760px) {
//     display: none;
//   }
// `;

// const UlWrapperRight = styled.ul`
//   @media (max-width: 760px) {
//     display: none;
//   }
// `;


