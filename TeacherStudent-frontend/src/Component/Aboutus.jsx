import React from 'react';
import { MDBCol, MDBContainer, MDBRow, MDBCard, MDBCardText, MDBCardBody, MDBCardImage, MDBBtn, MDBTypography, MDBIcon } from 'mdb-react-ui-kit';

export default function Aboutus() {
  return (
    <div classNameName="vh-100" style={{display:"flex",margin:"5rem" }}>
      {/* <MDBContainer classNameName="container py-5 h-100">
        <MDBRow classNameName="justify-content-center align-items-center h-100">
          <MDBCol md="12" xl="4">
            <MDBCard style={{ borderRadius: '15px' }}>
              <MDBCardBody classNameName="text-center">
                <div classNameName="mt-3 mb-4">
                  <MDBCardImage src="https://ca.slack-edge.com/T596V2PB7-U034FAPJL2X-e79de13a3299-512"
                    classNameName="rounded-circle" fluid style={{ width: '100px' }} />
                </div>
                <MDBTypography tag="h4">Anshika Jauhari</MDBTypography>
                <MDBCardText classNameName="text-muted mb-4">
                  @SSE <span classNameName="mx-2">|</span> <a href="#!">anshika.m.jauhari@apisero.com</a>
                </MDBCardText>
                <div classNameName="mb-4 pb-2">
                  <MDBBtn outline floating>
                    <MDBIcon fab icon="twitter" size="lg" />
                  </MDBBtn>
                  <MDBBtn outline floating classNameName="mx-1">
                    <MDBIcon fab icon="github" size="lg"/>
                  </MDBBtn>
                  <MDBBtn outline floating  href="https://www.linkedin.com/in/anshika-jauhari-991183140/">
                    <MDBIcon fab icon="linkedin" size="lg" />
                  </MDBBtn>
                </div>
                <MDBBtn rounded size="lg">
                  Message now
                </MDBBtn>
                <div classNameName="d-flex justify-content-between text-center mt-5 mb-2">
                </div>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>

          <MDBCol md="12" xl="4">
            <MDBCard style={{ borderRadius: '15px' }}>
              <MDBCardBody classNameName="text-center">
                <div classNameName="mt-3 mb-4">
                  <MDBCardImage src="https://ca.slack-edge.com/T596V2PB7-U02JJDE2D32-07b34d1cef3a-512"
                    classNameName="rounded-circle" fluid style={{ width: '100px' }} />
                </div>
                <MDBTypography tag="h4">Shaurya Srivastava</MDBTypography>
                <MDBCardText classNameName="text-muted mb-4">
                  @CTO <span classNameName="mx-2">|</span> <a href="">shaurya.s.srivastava@apisero.com</a>
                </MDBCardText>
                <div classNameName="mb-4 pb-2">
                  <MDBBtn outline floating href='https://twitter.com/thesoldierboy'>
                    <MDBIcon fab icon="twitter" size="lg" />
                  </MDBBtn>
                  <MDBBtn outline floating classNameName="mx-1" href='https://github.com/shauryasrivatava'>
                    <MDBIcon fab icon="github" size="lg"/>
                  </MDBBtn>
                  <MDBBtn outline floating  href="https://www.linkedin.com/in/shaurya-srivastava--/">
                    <MDBIcon fab icon="linkedin" size="lg" />
                  </MDBBtn>
                </div>
                <MDBBtn rounded size="lg">
                  Message now
                </MDBBtn>
                <div classNameName="d-flex justify-content-between text-center mt-5 mb-2">
                </div>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>

          <MDBCol md="12" xl="4">
            <MDBCard style={{ borderRadius: '15px' }}>
              <MDBCardBody classNameName="text-center">
                <div classNameName="mt-3 mb-4">
                  <MDBCardImage src="https://media.licdn.com/dms/image/C4E03AQF4H_a847Joug/profile-displayphoto-shrink_200_200/0/1635100090357?e=1678924800&v=beta&t=EzWmk-STqDV6SXE8_0MtS7gafXon6-pd3IyxlFX3ul4"
                    classNameName="rounded-circle" fluid style={{ width: '100px' }} />
                </div>
                <MDBTypography tag="h4">Kavita Rana</MDBTypography>
                <MDBCardText classNameName="text-muted mb-4">
                  @SSE <span classNameName="mx-2">|</span> <a href="#!">kavita.j.rana@apisero.com</a>
                </MDBCardText>
                <div classNameName="mb-4 pb-2">
                  <MDBBtn outline floating>
                    <MDBIcon fab icon="twitter" size="lg" />
                  </MDBBtn>
                  <MDBBtn outline floating classNameName="mx-1">
                    <MDBIcon fab icon="github" size="lg"/>
                  </MDBBtn>
                  <MDBBtn outline floating  href="https://www.linkedin.com/in/kavita-rana-aa7418162/">
                    <MDBIcon fab icon="linkedin" size="lg" />
                  </MDBBtn>
                </div>
                <MDBBtn rounded size="lg">
                  Message now
                </MDBBtn>
                <div classNameName="d-flex justify-content-between text-center mt-5 mb-2">
                </div>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>

          
          <MDBCol md="12" xl="4">
            <MDBCard style={{ borderRadius: '15px' }}>
              <MDBCardBody classNameName="text-center">
                <div classNameName="mt-3 mb-4">
                  <MDBCardImage src="https://media.licdn.com/dms/image/D4D03AQFZZEKYU8rxSw/profile-displayphoto-shrink_200_200/0/1670178530513?e=1678924800&v=beta&t=cMQA88Xm0rDtdxZSgyKib7xZ0PrJWThF0I2HTitpPTQ"
                    classNameName="rounded-circle" fluid style={{ width: '100px' }} />
                </div>
                <MDBTypography tag="h4">Adarsh Jaiswal</MDBTypography>
                <MDBCardText classNameName="text-muted mb-4">
                  @SE <span classNameName="mx-2">|</span> <a href="#!">adarsh.m.jaiswal@apisero.com</a>
                </MDBCardText>
                <div classNameName="mb-4 pb-2">
                  <MDBBtn outline floating href='https://twitter.com/Adarsh2515'>
                    <MDBIcon fab icon="twitter" size="lg"  />
                  </MDBBtn>
                  <MDBBtn outline floating classNameName="mx-1" href='https://github.com/Adarsh9801'>
                    <MDBIcon fab icon="github" size="lg"/>
                  </MDBBtn>
                  <MDBBtn outline floating  href="https://www.linkedin.com/in/adarsh-jaiswal-839291184/">
                    <MDBIcon fab icon="linkedin" size="lg" />
                  </MDBBtn>
                </div>
                <MDBBtn rounded size="lg">
                  Message now
                </MDBBtn>
                <div classNameName="d-flex justify-content-between text-center mt-5 mb-2">
                </div>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          <MDBCol md="12" xl="4">
            <MDBCard style={{ borderRadius: '15px' }}>
              <MDBCardBody classNameName="text-center">
                <div classNameName="mt-3 mb-4">
                  <MDBCardImage src="https://ca.slack-edge.com/T596V2PB7-U02BXMLKQ02-d087cebd88a1-512"
                    classNameName="rounded-circle" fluid style={{ width: '100px' }} />
                </div>
                <MDBTypography tag="h4">Abhishek Tiwari</MDBTypography>
                <MDBCardText classNameName="text-muted mb-4">
                  @SE <span classNameName="mx-2">|</span> <a href="#!">abhishek.v.tiwari@apisero.com</a>
                </MDBCardText>
                <div classNameName="mb-4 pb-2">
                  <MDBBtn outline floating>
                    <MDBIcon fab icon="twitter" size="lg" />
                  </MDBBtn>
                  <MDBBtn outline floating classNameName="mx-1">
                    <MDBIcon fab icon="github" size="lg"/>
                  </MDBBtn>
                  <MDBBtn outline floating  href="https://www.linkedin.com/in/abhishek-tiwari-00901a207/">
                    <MDBIcon fab icon="linkedin" size="lg" />
                  </MDBBtn>
                </div>
                <MDBBtn rounded size="lg">
                  Message now
                </MDBBtn>
                <div classNameName="d-flex justify-content-between text-center mt-5 mb-2">
                </div>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>

        

        </MDBRow>
      </MDBContainer> */}



<div className="card" style={{width: "10rem",margin:"2rem"}}>
  <img className="card-img-top" src="https://media.licdn.com/dms/image/D4D03AQFZZEKYU8rxSw/profile-displayphoto-shrink_200_200/0/1670178530513?e=1678924800&v=beta&t=cMQA88Xm0rDtdxZSgyKib7xZ0PrJWThF0I2HTitpPTQ" alt="Card image cap"/>
  <div className="card-body">
    <h6 className="card-title">Adarsh Jaiswal</h6>
    {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
    <a href="#" style={{margin:"5px"}}> <MDBIcon fab icon="linkedin" size="lg" /></a>
    <a href="#"  style={{margin:"5px"}}> <MDBIcon fab icon="github" size="lg"/></a>
    <a href="#"  style={{margin:"5px"}}>  <MDBIcon fab icon="twitter" size="lg"/></a>
  </div>
</div>


<div className="card" style={{width: "10rem",margin:"2rem"}}>
  <img className="card-img-top" src="https://media.licdn.com/dms/image/C4E03AQF4H_a847Joug/profile-displayphoto-shrink_200_200/0/1635100090357?e=1678924800&v=beta&t=EzWmk-STqDV6SXE8_0MtS7gafXon6-pd3IyxlFX3ul4" alt="Card image cap"/>
  <div className="card-body">
    <h6 className="card-title">Kavita Rana</h6>
    {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
    <a href="#" style={{margin:"5px"}}> <MDBIcon fab icon="linkedin" size="lg" /></a>
    <a href="#"  style={{margin:"5px"}}> <MDBIcon fab icon="github" size="lg"/></a>
    <a href="#"  style={{margin:"5px"}}>  <MDBIcon fab icon="twitter" size="lg"/></a>
  </div>
</div>

<div className="card" style={{width: "10rem",margin:"2rem"}}>
  <img className="card-img-top" src="https://ca.slack-edge.com/T596V2PB7-U02JJDE2D32-07b34d1cef3a-512" alt="Card image cap"/>
  <div className="card-body">
    <h6 className="card-title">Shaurya Srivastava</h6>
    {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
    <a href="#" style={{margin:"5px"}}> <MDBIcon fab icon="linkedin" size="lg" /></a>
    <a href="#"  style={{margin:"5px"}}> <MDBIcon fab icon="github" size="lg"/></a>
    <a href="#"  style={{margin:"5px"}}>  <MDBIcon fab icon="twitter" size="lg"/></a>
  </div>
</div>

<div className="card" style={{width: "10rem",margin:"2rem"}}>
  <img className="card-img-top" src="https://ca.slack-edge.com/T596V2PB7-U034FAPJL2X-e79de13a3299-512" alt="Card image cap"/>
  <div className="card-body">
    <h6 className="card-title">Anshika Jauhari</h6>
    {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
    <a href="#" style={{margin:"5px"}}> <MDBIcon fab icon="linkedin" size="lg" /></a>
    <a href="#"  style={{margin:"5px"}}> <MDBIcon fab icon="github" size="lg"/></a>
    <a href="#"  style={{margin:"5px"}}>  <MDBIcon fab icon="twitter" size="lg"/></a>
  </div>
</div>


<div className="card" style={{width: "10rem",margin:"2rem"}}>
  <img className="card-img-top" src="https://ca.slack-edge.com/T596V2PB7-U02BXMLKQ02-d087cebd88a1-512" alt="Card image cap"/>
  <div className="card-body">
    <h6 className="card-title">Abhishek Tiwari</h6>
    {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
    <a href="#" style={{margin:"5px"}}> <MDBIcon fab icon="linkedin" size="lg" /></a>
    <a href="#"  style={{margin:"5px"}}> <MDBIcon fab icon="github" size="lg"/></a>
    <a href="#"  style={{margin:"5px"}}>  <MDBIcon fab icon="twitter" size="lg"/></a>
  </div>
</div>

    </div>
  );
}