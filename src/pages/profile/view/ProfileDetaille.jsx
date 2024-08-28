import React, { useEffect, useState } from "react";
// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  FormGroup,
  Form,
  Input,
  Row,
  Col,
} from "reactstrap";
import "../../../style/card.css"
// import Loc1 from '../../../assets/img/Locataire1.jpg';
import getMe from "../../../components/GetMe";
import { updateProfil } from "../../../components/updateProfil";
// import { useParams } from "react-router-dom";
// import Batiment from '../../../assets/img/header.png';

function ProfilDetaille() {
// const {id}= useParams()
  const [user, setuser] = useState(null)
  const [updatedUser, setUserUpdated] = useState({
    _id:"",
    avatar: '',
    name: '',
    email: '',
    password: '',
    telephone: ''
  })

  useEffect(() => {
    const fetchUser = async () => {
      const userData = await getMe()
      if (userData) {
        setuser(userData)
        setUserUpdated(prev => ({ ...prev, ...userData}))
      }
    }
    fetchUser()
  }, [])
  const handlechange = (e) => {
    const { name, value } = e.target
    setUserUpdated({ ...updatedUser, [name]: value })

  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (user) {
      setUserUpdated({...updatedUser,_id:user._id})
      await updateProfil(updatedUser, user._id);
    } else {
      console.error("User data is not available.");
    }
  };
console.log(updatedUser,"up");

  return (
    <section>
      <div className="content" >
        <Row>
          <Col md="4" className="mt-4">
            <Card className="card-user">
              <div className="image">
                {/* <img alt="..." src={Batiment} /> */}
              </div>
              <CardBody>
                <div className="author">
                  <a href="#pablo" onClick={(e) => e.preventDefault()}>
                    {/* <img
                      alt="..."
                      className="avatar border-gray"
                      src={Loc1}
                      style={{ borderRadius: "50%" }}
                    /> */}
                   {user && (
                      <>
                        <h5 className="title" style={{ color: "#1F4B43", fontWeight: 900, fontSize: "1.8rem" }}>{user.name}</h5>
                        <p className="description" style={{ color: "#9a9a9a", fontWeight: 300, fontSize: "1.14rem" }}>{user.email}</p>
                      </>
                    )}
                     </a>
                </div>
                <p className="description text-center" style={{ color: "#9a9a9a", fontWeight: 300, fontSize: "1.14rem" }}>
                  "I like the way you work it <br />
                  No diggity <br />I wanna bag it up"
                </p>
              </CardBody>
              <CardFooter>
                <hr />
                <div className="button-container">
                  <Row>
                    <Col className="ml-auto" lg="3" md="6" xs="6" style={{ color: "#1F4B43" }}>
                      <h5>
                        12 <br />
                        <small>Files</small>
                      </h5>
                    </Col>
                    <Col className="ml-auto mr-auto" lg="4" md="6" xs="6" style={{ color: "#1F4B43" }}>
                      <h5>
                        2GB <br />
                        <small>Used</small>
                      </h5>
                    </Col>
                    <Col className="mr-auto" lg="3" style={{ color: "#1F4B43" }}>
                      <h5>
                        24,6$ <br />
                        <small>Spent</small>
                      </h5>
                    </Col>
                  </Row>
                </div>
              </CardFooter>
            </Card>
            {/* <Card>
              <CardHeader>
                <CardTitle tag="h4">Team Members</CardTitle>
              </CardHeader>
              <CardBody>
                <ul className="list-unstyled team-members">
                  <li>
                    <Row>
                      <Col md="2" xs="2">
                        <div className="avatar">
                          <img
                            alt="..."
                            className="img-circle img-no-padding img-responsive"
                            // src={require("assets/img/faces/ayo-ogunseinde-2.jpg")}
                          />
                        </div>
                      </Col>
                      <Col md="7" xs="7">
                        DJ Khaled <br />
                        <span className="text-muted">
                          <small>Offline</small>
                        </span>
                      </Col>
                      <Col className="text-right" md="3" xs="3">
                        <Button
                          className="btn-round btn-icon"
                          color="success"
                          outline
                          size="sm"
                        >
                          <i className="fa fa-envelope" />
                        </Button>
                      </Col>
                    </Row>
                  </li>
                  <li>
                    <Row>
                      <Col md="2" xs="2">
                        <div className="avatar">
                          <img
                            alt="..."
                            className="img-circle img-no-padding img-responsive"
                            // src={require("assets/img/faces/joe-gardner-2.jpg")}
                          />
                        </div>
                      </Col>
                      <Col md="7" xs="7">
                        Creative Tim <br />
                        <span className="text-success">
                          <small>Available</small>
                        </span>
                      </Col>
                      <Col className="text-right" md="3" xs="3">
                        <Button
                          className="btn-round btn-icon"
                          color="success"
                          outline
                          size="sm"
                        >
                          <i className="fa fa-envelope" />
                        </Button>
                      </Col>
                    </Row>
                  </li>
                  <li>
                    <Row>
                      <Col md="2" xs="2">
                        <div className="avatar">
                          <img
                            alt="..."
                            className="img-circle img-no-padding img-responsive"
                            // src={require("assets/img/faces/clem-onojeghuo-2.jpg")}
                          />
                        </div>
                      </Col>
                      <Col className="col-ms-7" xs="7">
                        Flume <br />
                        <span className="text-danger">
                          <small>Busy</small>
                        </span>
                      </Col>
                      <Col className="text-right" md="3" xs="3">
                        <Button
                          className="btn-round btn-icon"
                          color="success"
                          outline
                          size="sm"
                        >
                          <i className="fa fa-envelope" />
                        </Button>
                      </Col>
                    </Row>
                  </li>
                </ul>
              </CardBody>
            </Card> */}
          </Col>
          <Col md="8">
            <Card className="card-user mt-4" >
              <CardHeader>
                <CardTitle style={{ color: "#1F4B43", fontWeight: 400, fontSize: "1.25rem", fontFamily: "sans-serif", padding: "15px 15px 0" }} tag="h5">Modifier Profil</CardTitle>
              </CardHeader>
              <CardBody>
                <Form onSubmit={handleSubmit}>
                  <Row>
                    <Col className="pr-1" md="5" style={{ padding: '10px 10px 0' }}>
                      <FormGroup style={{ color: "#9a9a9a", fontWeight: 300, fontSize: "1rem", fontFamily: 'Montserrat' }}>
                        <label>Company (disabled)</label>
                        <Input
                          defaultValue="Creative Code Inc."
                          disabled
                          placeholder="Company"
                          type="text"
                          style={{ color: "#9a9a9a" }}
                        />
                      </FormGroup>
                    </Col>
                    <Col className="px-1" md="3" style={{ padding: '10px 10px 0' }}>
                      <FormGroup style={{ color: "#9a9a9a", fontWeight: 300, fontSize: "1rem" }}>
                        <label>Username</label>
                        <Input
                          name="name"
                          placeholder="Username"
                          type="text"
                          style={{ color: "#9a9a9a" }}
                          onChange={handlechange}
                        />
                      </FormGroup>
                    </Col>
                    <Col className="pl-1" md="4" style={{ padding: '10px 10px 0' }}>
                      <FormGroup style={{ color: "#9a9a9a", fontWeight: 300, fontSize: "1rem" }}>
                        <label htmlFor="exampleInputEmail1">
                          Email address
                        </label>
                        <Input placeholder="Email" type="email" name="email" style={{ color: "#9a9a9a" }} onChange={handlechange}/>
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="pr-1" md="6" style={{ padding: '10px 10px 0' }}>
                      <FormGroup style={{ color: "#9a9a9a", fontWeight: 300, fontSize: "1rem" }}>
                        <label>First Name</label>
                        <Input
                          defaultValue="Chet"
                          placeholder="Company"
                          type="text"
                          style={{ color: "#9a9a9a" }}
                        />
                      </FormGroup>
                    </Col>
                    <Col className="pl-1" md="6" style={{ padding: '10px 10px 0' }}>
                      <FormGroup style={{ color: "#9a9a9a", fontWeight: 300, fontSize: "1rem" }}>
                        <label>Last Name</label>
                        <Input
                          defaultValue="Faker"
                          placeholder="Last Name"
                          type="text"
                          style={{ color: "#9a9a9a" }}
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col md="12" style={{ padding: '10px 10px 0' }}>
                      <FormGroup style={{ color: "#9a9a9a", fontWeight: 300, fontSize: "1rem" }}>
                        <label>Address</label>
                        <Input
                          defaultValue="Melbourne, Australia"
                          placeholder="Home Address"
                          type="text"
                          style={{ color: "#9a9a9a" }}
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="pr-1" md="4" style={{ padding: '10px 10px 0' }}>
                      <FormGroup style={{ color: "#9a9a9a", fontWeight: 300, fontSize: "1rem" }}>
                        <label>City</label>
                        <Input
                          defaultValue="Melbourne"
                          placeholder="City"
                          type="text"
                          style={{ color: "#9a9a9a" }}
                        />
                      </FormGroup>
                    </Col>
                    <Col className="px-1" md="4" style={{ padding: '10px 10px 0' }}>
                      <FormGroup style={{ color: "#9a9a9a", fontWeight: 300, fontSize: "1rem" }}>
                        <label>Country</label>
                        <Input
                          defaultValue="Australia"
                          placeholder="Country"
                          type="text"
                          style={{ color: "#9a9a9a" }}
                        />
                      </FormGroup>
                    </Col>
                    <Col className="pl-1" md="4" style={{ padding: '10px 10px 0' }}>
                      <FormGroup style={{ color: "#9a9a9a", fontWeight: 300, fontSize: "1rem" }}>
                        <label>Postal Code</label>
                        <Input placeholder="ZIP Code" type="number" style={{ color: "#9a9a9a" }} />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col md="12" style={{ padding: '10px 10px 0' }}>
                      <FormGroup style={{ color: "#9a9a9a", fontWeight: 300, fontSize: "1rem" }}>
                        <label>About Me</label>
                        <Input
                          type="textarea"
                          defaultValue="Oh so, your weak rhyme You doubt I'll bother, reading into it"
                          style={{ color: "#9a9a9a" }}
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col md="12" style={{ padding: '10px 10px 0' }}>
                      <FormGroup style={{ color: "#9a9a9a", fontWeight: 300, fontSize: "1rem" }}>
                        <label>Mot de passe</label>
                        <Input
                        name="password"
                          placeholder="Password"
                          type="Password"
                          style={{ color: "#9a9a9a" }}
                          onChange={handlechange}
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col md="12" style={{ padding: '10px 10px 0' }}>
                      <FormGroup style={{ color: "#9a9a9a", fontWeight: 300, fontSize: "1rem" }}>
                        <label>Confirme mot de passe</label>
                        <Input
                          placeholder="Password"
                          type="Password"
                          style={{ color: "#9a9a9a" }}
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row className="text-center">
                    <Col md="12" style={{ padding: '10px 10px 0' }}>
                      <div className="update">
                        <Button
                          className="btn-round"
                          color="primary"
                        
                          style={{ backgroundColor: "#1F4B43", borderRadius: "25px", fontWeight: 600, height: "45px" }}
                          onClick={()=>(updateProfil(updatedUser))}
                        >
                          Modifier Profil
                        </Button>
                      </div>
                    </Col>
                  </Row>
                </Form>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    </section>
  );
}

export default ProfilDetaille;











































// import React from 'react';
// // import { Button } from 'react-bootstrap';
// import { useNavigate } from 'react-router-dom';
// import { MDBCol, MDBContainer, MDBRow, MDBCard, MDBCardText, MDBCardBody, MDBCardImage, MDBTypography} from 'mdb-react-ui-kit';
// import { FaRegEdit } from "react-icons/fa";

// function ProfileDetaille() {
//   const navigate = useNavigate();

//   return (
//     <div>

//       <section className="vh-100" style={{ backgroundColor: '#f4f5f7' }}>
//         <MDBContainer className="py-5 h-100">
//           <MDBRow className="justify-content-center align-items-center h-100">
//             <MDBCol lg="6" className="mb-4 mb-lg-0">
//               <MDBCard className="mb-3" style={{ borderRadius: '.5rem' }}>
//                 <MDBRow className="g-0">
//                   <MDBCol md="4" className="gradient-custom text-center text-white"
//                     style={{ borderTopLeftRadius: '.5rem', borderBottomLeftRadius: '.5rem' }}>
//                     <MDBCardImage src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp"
//                       alt="Avatar" className="my-5" style={{ width: '80px' }} fluid />
//                     <MDBTypography tag="h5">Marie Horwitz</MDBTypography>
//                     <MDBCardText>Web Designer</MDBCardText>
//                     <FaRegEdit onClick={() => navigate("/profile/editProfile")} />
//                   </MDBCol>
//                   <MDBCol md="8">
//                     <MDBCardBody className="p-4">
//                       <MDBTypography tag="h6">Information</MDBTypography>
//                       <hr className="mt-0 mb-4" />
//                       <MDBRow className="pt-1">
//                         <MDBCol size="6" className="mb-3">
//                           <MDBTypography tag="h6">Email</MDBTypography>
//                           <MDBCardText className="text-muted">info@example.com</MDBCardText>
//                         </MDBCol>
//                         <MDBCol size="6" className="mb-3">
//                           <MDBTypography tag="h6">Phone</MDBTypography>
//                           <MDBCardText className="text-muted">123 456 789</MDBCardText>
//                         </MDBCol>
//                       </MDBRow>

//                       <MDBTypography tag="h6">Information</MDBTypography>
//                       <hr className="mt-0 mb-4" />
//                       <MDBRow className="pt-1">
//                         <MDBCol size="6" className="mb-3">
//                           <MDBTypography tag="h6">Email</MDBTypography>
//                           <MDBCardText className="text-muted">info@example.com</MDBCardText>
//                         </MDBCol>
//                         <MDBCol size="6" className="mb-3">
//                           <MDBTypography tag="h6">Phone</MDBTypography>
//                           <MDBCardText className="text-muted">123 456 789</MDBCardText>
//                         </MDBCol>
//                       </MDBRow>
//                     </MDBCardBody>
//                   </MDBCol>
//                 </MDBRow>
//               </MDBCard>
//             </MDBCol>
//           </MDBRow>
//         </MDBContainer>
//       </section>
//       {/* <Button variant="primary" type="submit" className="animate radius8" style={{ maxWidth: "220px", backgroundColor: "#1F4B43" }} onClick={() => navigate("/profile/editProfile")} >
//         Edit
//       </Button> */}
//     </div>
//   )
// }

// export default ProfileDetaille
