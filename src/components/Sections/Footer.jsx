import React from 'react';
import { CiFacebook, CiInstagram, CiLinkedin } from "react-icons/ci";
import { MdOutlineMailOutline } from "react-icons/md";
import { BsFillTelephoneFill } from "react-icons/bs";
import 'bootstrap/dist/css/bootstrap.min.css';

function Footer() {
  return (
    <footer className='text-center text-lg-start text-muted' style={{ backgroundColor: '#1F4B43', color: 'white' }}>
      <section className='p-4 border-bottom' style={{ color: 'white' }}>
        <div className='container'>
          <div className='row'>
            <div className='col-md-6 d-flex align-items-center'>
              <p className='mb-2'><strong>Contactez-nous sur</strong></p>
            </div>
            <div className='col-md-6 d-flex justify-content-end'>
              <a href='https://www.facebook.com/profile.php?id=61562124011671&mibextid=ZbWKwL' className='me-4 text-reset' style={{ color: 'white', fontSize: '25px' }}>
                <CiFacebook />
              </a>
              <a href='https://www.instagram.com/syndicplus12?igsh=d2Rkbjlkb25vZ3Fv' className='me-4 text-reset' style={{ color: 'white', fontSize: '25px' }}>
                <CiInstagram />
              </a>
              <a href='http://www.linkedin.com/in/syndic-plus-165327319' className='me-4 text-reset' style={{ color: 'white', fontSize: '25px' }}>
                <CiLinkedin />
              </a>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className='container text-center text-md-start mt-5' style={{ color: 'white' }}>
          <div className='row mt-3'>
            <div className='col-md-3 col-lg-4 col-xl-3 mx-auto mb-4 text-center'>
              <h6 className='text-uppercase fw-bold mb-4' style={{ color: 'white' }}>
                Syndic Plus
              </h6>
              <p>
                Notre application comporte une aide au syndic pour gérer un bâtiment.
              </p>
            </div>
            <div className='col-md-2 col-lg-2 col-xl-2 mx-auto mb-4 text-center'>
              <h6 className='text-uppercase fw-bold mb-4' style={{ color: 'white' }}>Nos services</h6>
              <p>
                Paiement
              </p>
              <p>
                Demande des incidences
              </p>
              <p>
                Liste des prestataires
              </p>
            </div>
            <div className='col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4 text-center'>
              <h6 className='text-uppercase fw-bold mb-4' style={{ color: 'white' }}>Contact</h6>
              <p style={{ display: 'flex', alignItems: 'center', color: 'white', justifyContent: 'center' }}>
                <MdOutlineMailOutline style={{ marginRight: '10px' }}/> SyndicPlus12@gmail.com
              </p>
              <p style={{ display: 'flex', alignItems: 'center', color: 'white', justifyContent: 'center' }}>
                <BsFillTelephoneFill style={{ marginRight: '10px' }}/> 58443232
              </p>
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
}

export default Footer;
