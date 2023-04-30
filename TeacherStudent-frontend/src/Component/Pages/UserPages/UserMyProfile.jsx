import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBCard, MDBCardText, MDBCardBody, MDBCardImage, MDBBtn, MDBTypography, MDBIcon } from 'mdb-react-ui-kit';

const UserMyProfile =()=>{


// console.log("jai shree Ram")
const obj=JSON.parse(localStorage.getItem('user_info'))
const FirstName=obj.result.firstName
const LastName=obj.result.lastName
const gender=obj.result.gender
const username=obj.result.username
const contact=obj.result.contactNumber
const age=obj.result.age
console.log(obj.result);

    return(
        <>
        
        <MDBContainer className="container py-5 h-100">
        <MDBRow className="justify-content-center align-items-center h-100">
          <MDBCol md="12" xl="4">
            <MDBCard style={{ borderRadius: '15px' }}>
              <MDBCardBody className="text-center">
                <div className="mt-3 mb-4">
                  <MDBCardImage src="/images/avatar.png"
                    className="" fluid style={{ width: '100px' }} />
                </div>
                <MDBTypography tag="h6">@{username} !</MDBTypography>
                <MDBTypography tag="h4">{FirstName} {LastName} </MDBTypography>
                <div className=" justify-content-between text-center ">
                  {/* <h5></h5> */}
                  <h6>Gender : {gender} </h6> 
                  <h6>Age : {age}</h6>
                  <h6>Contact Number : {contact}</h6>

                </div>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          </MDBRow>
          </MDBContainer>


        </>
    )
}

export default UserMyProfile;