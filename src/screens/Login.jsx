import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';
// import logo from '../assets/img/Logo.png';
import batiment from '../assets/img/header.png';
import 'aos/dist/aos.css';
import AOS from "aos";
function Login() {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,

    });
    AOS.refresh();
  }, []);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const newErrors = validateForm();
    if (Object.keys(newErrors).length === 0) {
      // Submit the form (e.g., make API call)
      setValidated(true);
      console.log('Form submitted successfully');
    } else {
      setValidated(false);
      setErrors(newErrors);
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!email) {
      newErrors.email = 'Email est requis';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'Email n\'est pas valide';
    }
    if (!password) {
      newErrors.password = 'Mot de passe est requis';
    } else if (password.length < 6) {
      newErrors.password = 'Mot de passe doit contenir au moins 6 caractères';
    }
    return newErrors;
  };

  return (
    <Container className="my-5 gradient-form">
      <Row>
        <Col style={{ marginTop: "100px" }} data-aos='fade-right'>
          <div className="d-flex flex-column ms-5 me-5">
            <div className="text-center">
              {/* <img src={logo} style={{ width: '185px' }} alt="logo" /> */}
              <h4 className=" mb-5 pb-1">Se connecter</h4>
            </div>
            <Form noValidate validated={validated} onSubmit={handleSubmit} className='py-5 px-4'>
              <Form.Group className="mb-4 " controlId="formEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  isInvalid={!!errors.email}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.email}
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group className="mb-4" controlId="formPassword">
                <Form.Label>Mot de passe</Form.Label>
                <Form.Control
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  isInvalid={!!errors.password}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.password}
                </Form.Control.Feedback>
              </Form.Group>
              <div className="text-center pt-1 mb-5 pb-1">
                <Button style={{ backgroundColor: '#1F4B43', color: 'white' }} className="mb-4 w-100" variant="primary" type="submit">
                  Connecter
                </Button>
                <a className="text-muted" href="#!">Mot de passe oublié?</a>
              </div>
            </Form>
            {validated && (
              <Alert variant="success">
                Connexion réussie!
              </Alert>
            )}
          </div>
        </Col>
        <Col md={6} className="mb-5" style={{
          backgroundImage: `url(${batiment})`,
          backgroundSize: 'cover',
          marginTop: "80px",
          minHeight: "600px",
          maxWidth: "550px"
        }} data-aos='fade-left'>
        </Col>
      </Row>
    </Container>
  );
}

export default Login;

