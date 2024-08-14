import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';
// import logo from '../assets/img/Logo.png';
import batiment from '../assets/img/header.png';

function SignUp() {
  const [formData, setFormData] = useState({
    nom: '',
    prenom: '',
    date: '',
    photo: null,
    email: '',
    password: '',
    confirmPassword: ''
  });

  const [errors, setErrors] = useState({});
  const [validated, setValidated] = useState(false);

  const handleChange = (e) => {
    const { id, value, files } = e.target;
    setFormData({
      ...formData,
      [id]: files ? files[0] : value
    });
  };

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
    if (!formData.nomComplete) newErrors.nom = 'Nom est requis';
    if (!formData.email) newErrors.email = 'Email est requis';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email n\'est pas valide';
    if (!formData.password) newErrors.password = 'Mot de passe est requis';
    else if (formData.password.length < 6) newErrors.password = 'Mot de passe doit contenir au moins 6 caractères';
    if (!formData.confirmPassword) newErrors.confirmPassword = 'Confirmation de mot de passe est requise';
    else if (formData.confirmPassword !== formData.password) newErrors.confirmPassword = 'Les mots de passe ne correspondent pas';
    return newErrors;
  };

  return (
    <Container className="my-5 gradient-form">
      <Row>
       
        <Col  style={{ marginTop: '100px' }}>
          <div className="d-flex flex-column ms-5 me-5">
            <div className="text-center">
              {/* <img src={logo} style={{ width: '185px' }} alt="logo" /> */}
              <h4 className="mb-5 pb-1">Créer un compte</h4>
            </div>
            <Form noValidate validated={validated} onSubmit={handleSubmit} className='py-5 px-4'>
              <Row>
                <Col>
                  <Form.Group className="mb-4" controlId="nomComplete">
                    <Form.Label>Nom complet</Form.Label>
                    <Form.Control 
                      type="text" 
                      value={formData.nomComplete}
                      onChange={handleChange}
                      isInvalid={!!errors.nomComplete}
                      style={{ color: 'black' }} 
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.nom}
                    </Form.Control.Feedback>
                  </Form.Group>
                </Col>  
              </Row>
              <Form.Group className="mb-4" controlId="email">
                <Form.Label>Email</Form.Label>
                <Form.Control 
                  type="email" 
                  value={formData.email}
                  onChange={handleChange}
                  isInvalid={!!errors.email}
                  style={{color:"black"}}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.email}
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group className="mb-4" controlId="password">
                <Form.Label>Mot de passe</Form.Label>
                <Form.Control 
                  type="password" 
                  value={formData.password}
                  onChange={handleChange}
                  isInvalid={!!errors.password}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.password}
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group className="mb-4" controlId="confirmPassword">
                <Form.Label>Confirmer mot de passe</Form.Label>
                <Form.Control 
                  type="password" 
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  isInvalid={!!errors.confirmPassword}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.confirmPassword}
                </Form.Control.Feedback>
              </Form.Group>
              <div className="text-center pt-1 mb-5 pb-1">
                <Button className="mb-4 w-100" style={{ backgroundColor: '#1F4B43', color: 'white' }} type="submit">Enregistrer</Button>
              </div>
            </Form>
            {validated && (
              <Alert variant="success">
                Inscription réussie!
              </Alert>
            )}
          </div>
        </Col>
        <Col md={6} className="mb-5" style={{ 
          backgroundImage: `url(${batiment})`,
          backgroundSize: 'cover',
          marginTop: '100px',
          maxWidth: "550px",
          minHeight: "600px",

        }}>
        </Col>
      </Row>
    </Container>
  );
}

export default SignUp;

