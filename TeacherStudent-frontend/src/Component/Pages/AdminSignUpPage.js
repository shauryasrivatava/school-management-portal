import React,{ useState,useEffect }  from "react";
import { useHistory } from "react-router-dom";
import {
    MDBBtn,
    MDBContainer,
    MDBCard,
    MDBCardBody,
    MDBCardImage,
    MDBRow,
    MDBCol,
    MDBInput,
    MDBRadio,
  //   MDBSelect
  } from 'mdb-react-ui-kit';

  import { NavLink } from "react-router-dom";


function  AdminSignUp(){

    const[adminname,setAdminname]=useState('');
    const[firstName,setFirstName]=useState('');
    const[lastName,setLastName]=useState('');
    const[age,setAge]=useState(0);
    const[password,setPassword]=useState('');
    const[gender,setGender]=useState('');
    const[contactNumber,setContactNumber]=useState('');
   


    const history=useHistory();

    const redirectToLogin = () => {
        localStorage.clear();
        history.push("/adminLogin");
    }

    useEffect(
        () => {
            if(localStorage.getItem('user_info')){
                history.push("/adminLogin");
            }
        }
   ,[]);

   async function handleSubmit(){

    let item={adminname,firstName,lastName,age,password,gender,contactNumber};

    if(adminname===""&&firstName===""&&lastName===""&&age===0&&password===""&&gender===""&&contactNumber===""){
        history.push("/error");
    }
    else{
    let result=await fetch("http://localhost:9091/admin/signUp",{
        method: 'POST',
        body: JSON.stringify(item),
        headers: {
            "Content-Type":"application/json",
            "Accept":"*/*"
        },
    })
    result=await result.json();
    localStorage.setItem("user_info",JSON.stringify(result));
    history.push("/adminLogin");
    }

    redirectToLogin();
   }
  

    return(
        <div>
            <MDBContainer fluid className=''>
                <MDBRow className='d-flex justify-content-center align-items-center h-100'>
                
                    <MDBCol>
                    <MDBCard className='my-4'>
                        <MDBRow className='g-0'>
                        <MDBCol col='10' md='6'>
                        <MDBCardImage src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg" class="img-fluid" alt="Sample image" />
                        </MDBCol>

                    
                        <MDBCol md='6'>
                            <MDBCardBody className='text-black d-flex flex-column justify-content-center'>
                            <h3 className="mb-5 text-uppercase fw-bold">Registration form</h3>
                            
                            <div className="divider d-flex align-items-center my-4"/>
                            <MDBRow>
                            <MDBCol md='6'>
                                <MDBInput wrapperClass='mb-4' label='' size='md' id='form1' type='text'
                                value={adminname} onChange={(e)=>setAdminname(e.target.value)} placeholder='Admin Name'/>
                                </MDBCol>
                            <MDBCol md='6'>
                                <MDBInput wrapperClass='mb-4' label='' size='md' id='form1' type='text'
                                value={firstName} onChange={(e)=>setFirstName(e.target.value)}placeholder='First Name'/>
                                </MDBCol>
                                <MDBCol md='6'>
                                <MDBInput wrapperClass='mb-4' label='' size='md' id='form1' type='text'
                                value={lastName} onChange={(e)=>setLastName(e.target.value)} placeholder='Last Name'/>
                                </MDBCol>
                                <MDBCol md='6'>
                                <MDBInput wrapperClass='mb-4' label='' size='md' id='form4' type="number" value={age}
                                onChange={(e)=>setAge(e.target.value)} placeholder="Age"/>
                                </MDBCol>
                                <MDBCol md='6'>
                                <MDBInput wrapperClass='mb-4' label='' size='md' id='form1'  type="text" value={gender}
                                onChange={(e)=>setGender(e.target.value)} placeholder="Gender"/>
                                </MDBCol>
                                <MDBCol md='6'>
                                <MDBInput wrapperClass='mb-4' label='' size='md' id='form4' type="password" value={password}
                                onChange={(e)=>setPassword(e.target.value)} placeholder="Password"/>
                                </MDBCol>
                                {/* <MDBCol md='6'>
                                <MDBInput wrapperClass='mb-4' label='' size='md' id='form4' type="password" value={retypePassword}
                                onChange={(e)=>setRetypePassword(e.target.value)} placeholder="Retype Password"/>
                                </MDBCol> */}
                            </MDBRow>
                            <MDBInput wrapperClass='mb-4' label='' size='md' id='form3' type='number'
                            value={contactNumber} onChange={(e)=>setContactNumber(e.target.value)} placeholder='Contact Number'/>
                            <MDBRow>
                            <div className='text-center text-md-start mt-4 pt-2'>
                            <MDBBtn className="mb-0 px-5" size='lg' onClick={handleSubmit} >
                                <NavLink activeClassName="active_class" to="/adminLogin"
                                style={{color:"blue", textDecoration:"none"}}
                                >SignUp</NavLink></MDBBtn>
                                </div>
                            </MDBRow>
                            {/* <div className="d-flex justify-content-end pt-3">
                                <MDBBtn className='ms-2' color='blue' onClick={handleSubmit} size='md'>SignUp</MDBBtn>
                            </div> */}
                            </MDBCardBody>
                        </MDBCol>
                        </MDBRow>
                    </MDBCard>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        </div>
    );
}

export default AdminSignUp;

