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


function UserSignUp(){

    const[username,setUsername]=useState('');
    const[firstName,setFirstName]=useState('');
    const[lastName,setLastName]=useState('');
    const[age,setAge]=useState(0);
    const[password,setPassword]=useState('');
    const[gender,setGender]=useState('');
    const[category,setCategory]=useState('');
    const[contactNumber,setContactNumber]=useState('');
    const[Student,setStudent]=useState('Student');
    const[Teacher,setTeacher]=useState('Teacher');


    const history=useHistory();

    const redirectToLogin = () => {
        localStorage.clear();
        history.push("/userLogin");
    }

    useEffect(
        () => {
            if(localStorage.getItem('user_info')){
                history.push("/userLogin");
            }
        }
   ,[]);

   async function handleSubmit(){

    let item={username,firstName,lastName,age,password,gender,category,contactNumber};

    if(username===""&&firstName===""&&lastName===""&&age===0&&password===""&&gender===""&&category===""&&contactNumber===""){
        history.push("/error");
    }
    else{
    let result=await fetch("http://localhost:9091/user/signUp",{
        method: 'POST',
        body: JSON.stringify(item),
        headers: {
            "Content-Type":"application/json",
            "Accept":"*/*"
        },
    })
    result=await result.json();
    localStorage.setItem("user_info",JSON.stringify(result));
    history.push("/userLogin");
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
                            <div className="d-flex flex-row align-items-center justify-content-left">
                                <p className="lead fw-normal mb-0 me-3">Sign Up as</p>
                                <MDBRadio name='inlineRadio' id='inlineRadio1' value={Teacher} onChange={(e)=>setCategory(e.target.value)} label='Teacher' inline />
                                <MDBRadio name='inlineRadio' id='inlineRadio2' value={Student}  onChange={(e)=>setCategory(e.target.value)} label='Student' inline />
                            </div>
                            <div className="divider d-flex align-items-center my-4"/>
                            <MDBRow>
                            <MDBCol md='6'>
                                <MDBInput wrapperClass='mb-4' label='' size='md' id='form1' type='text'
                                value={username} onChange={(e)=>setUsername(e.target.value)} placeholder='User Name'/>
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
                                <NavLink activeClassName="active_class" to="/userLogin"
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

export default UserSignUp;