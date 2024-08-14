import React from 'react';
// import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { MDBCol, MDBContainer, MDBRow, MDBCard, MDBCardText, MDBCardBody, MDBCardImage, MDBTypography} from 'mdb-react-ui-kit';
import { FaRegEdit } from "react-icons/fa";

function ProfileDetaille() {
  const navigate = useNavigate();

  return (
    <div>

      <section className="vh-100" style={{ backgroundColor: '#f4f5f7' }}>
        <MDBContainer className="py-5 h-100">
          <MDBRow className="justify-content-center align-items-center h-100">
            <MDBCol lg="6" className="mb-4 mb-lg-0">
              <MDBCard className="mb-3" style={{ borderRadius: '.5rem' }}>
                <MDBRow className="g-0">
                  <MDBCol md="4" className="gradient-custom text-center text-white"
                    style={{ borderTopLeftRadius: '.5rem', borderBottomLeftRadius: '.5rem' }}>
                    <MDBCardImage src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp"
                      alt="Avatar" className="my-5" style={{ width: '80px' }} fluid />
                    <MDBTypography tag="h5">Marie Horwitz</MDBTypography>
                    <MDBCardText>Web Designer</MDBCardText>
                    <FaRegEdit onClick={() => navigate("/profile/editProfile")} />
                  </MDBCol>
                  <MDBCol md="8">
                    <MDBCardBody className="p-4">
                      <MDBTypography tag="h6">Information</MDBTypography>
                      <hr className="mt-0 mb-4" />
                      <MDBRow className="pt-1">
                        <MDBCol size="6" className="mb-3">
                          <MDBTypography tag="h6">Email</MDBTypography>
                          <MDBCardText className="text-muted">info@example.com</MDBCardText>
                        </MDBCol>
                        <MDBCol size="6" className="mb-3">
                          <MDBTypography tag="h6">Phone</MDBTypography>
                          <MDBCardText className="text-muted">123 456 789</MDBCardText>
                        </MDBCol>
                      </MDBRow>

                      <MDBTypography tag="h6">Information</MDBTypography>
                      <hr className="mt-0 mb-4" />
                      <MDBRow className="pt-1">
                        <MDBCol size="6" className="mb-3">
                          <MDBTypography tag="h6">Email</MDBTypography>
                          <MDBCardText className="text-muted">info@example.com</MDBCardText>
                        </MDBCol>
                        <MDBCol size="6" className="mb-3">
                          <MDBTypography tag="h6">Phone</MDBTypography>
                          <MDBCardText className="text-muted">123 456 789</MDBCardText>
                        </MDBCol>
                      </MDBRow>
                    </MDBCardBody>
                  </MDBCol>
                </MDBRow>
              </MDBCard>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>
      {/* <Button variant="primary" type="submit" className="animate radius8" style={{ maxWidth: "220px", backgroundColor: "#1F4B43" }} onClick={() => navigate("/profile/editProfile")} >
        Edit
      </Button> */}
    </div>
  )
}

export default ProfileDetaille
