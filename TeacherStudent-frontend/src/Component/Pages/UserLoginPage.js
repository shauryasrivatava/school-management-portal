import React,{useState,useEffect} from "react";
import { NavLink,useHistory,Switch,Route } from "react-router-dom";
import {  } from "react-router-dom";
import {MDBContainer,MDBCol, MDBRow, MDBBtn, MDBIcon, MDBInput, MDBCheckbox,MDBRadio } from 'mdb-react-ui-kit';
import UserMyProfile from "./UserPages/UserMyProfile";



function UserLogin(){

    const [username,setUsername]=useState('');
    const [password,setPassword]=useState('');
    const [Student,setStudent]=useState('student');
    const [Teacher,setTeacher]=useState('teacher');
    const [category,setCategory]=useState('student');
    const [errorIn,setErrorIn]=useState('');

    const history=useHistory();

    useEffect(
        () => {
            if(localStorage.getItem('user_info')){
                history.push("/userPortal");
            }
        }
   ,[]);

   async function handleSubmit(){
    console.log(username,password);
    let item={username,password};
    if(username==="" || password===""){
        history.push("/error");
    }

    else{
        if(category==='teacher'){

            let result=await fetch("http://localhost:9091/user/login/teacher",{
                method: 'POST',
                headers: {
                    "Content-Type":"application/json",
                    "Accept":"*/*"
                },
                body: JSON.stringify(item)
            })
            console.log(result.status);
            console.log(result.ok);

            // check for error response
            if (!result.ok) {
                // get error message from body or default to response status
                const error = (result && result.data) || result.status;
                console.log("Got error");
                setErrorIn(error);
                history.push("/error",errorIn);//Not able to pass the state 
                
            }

            else{
                result=await result.json();
                console.log(Response)
                console.log(result);
                localStorage.setItem("user_info",JSON.stringify(result));
                
                // const myProfile=(JSON.parse(localStorage.getItem('user_info'))).result;
                // console.log(JSON.stringify(myProfile));
                history.push("/userPortal");
            }
            
        }

            
    else if(category==='student'){
        let result=await fetch("http://localhost:9091/user/login/student",{
            method: 'POST',
            headers: {
                "Content-Type":"application/json",
                "Accept":"*/*"
            },
            body: JSON.stringify(item)
        });
    
        console.log(result.status);
            console.log(result.ok);

            // check for error response
            if (!result.ok) {
                // get error message from body or default to response status
                const error = (result && result.data) || result.status;
                console.log("Got error");
                history.push("/error");
                
            }

            else{
                result=await result.json();
                console.log(Response)
                console.log(result);
                localStorage.setItem("user_info",JSON.stringify(result));
                
                // const myProfile=(JSON.parse(localStorage.getItem('user_info'))).result;
                // console.log(JSON.stringify(myProfile));
                history.push("/userportal",);
            }
    }
   

    }
    
    
   }

    return(


<MDBContainer fluid className="p-3 my-5 h-custom">
      <MDBRow >

        <MDBCol col='10' md='6'>
          <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp" class="img-fluid" alt="Sample image" />
        </MDBCol>

        <MDBCol col='4' md='6'>
            <div className="d-flex flex-row align-items-center justify-content-center">
            <p className="lead fw-normal mb-0 me-3">Sign in as</p>
                <MDBRadio  name='inlineRadio' id='inlineRadio1' value={Teacher} onChange={(e)=>setCategory(e.target.value)} label='Teacher' inline />
                <MDBRadio name='inlineRadio' id='inlineRadio2' value={Student}  onChange={(e)=>setCategory(e.target.value)} label='Student' inline />
        
            </div>
            <div className="divider d-flex align-items-center my-4">
            </div>
          <MDBInput wrapperClass='mb-4' label='User Name' value={username} onChange={(e)=>setUsername(e.target.value)}  id='formControlLg' type='text' size="lg"/>
          <MDBInput wrapperClass='mb-4' label='Password' value={password} onChange={(e)=>setPassword(e.target.value)} id='formControlLg' type='password' size="lg"/>

          <div className="d-flex justify-content-between mb-4">
            <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Remember me' />
            <a href="!#">Forgot password?</a>
          </div>

          <div className='text-center text-md-start mt-4 pt-2'>
            <MDBBtn className="mb-0 px-5" size='lg' onClick={handleSubmit} >

            <NavLink activeClassName="active_class" to="/userPortal"
            style={{color:"white", textDecoration:"none"}}>LogIn </NavLink>
             
             </MDBBtn>
            <p className="large fw-bold mt-3 pt-1 mb-5">
            <NavLink activeClassName="active_class" to="/userSignUp"><button onClick={()=>{history.push("/userSignUp")}}
            style={{border:"none",padding:"10px",borderRadius:"12px"}}
            >SignUp for new Account/Register Here</button></NavLink>
              </p>
          </div>

        </MDBCol>
      </MDBRow>

      <Switch>
          <Route path="/userportal" component={UserMyProfile} exact />
      </Switch>

    </MDBContainer>



        // <div>
            
        //     <form>
        //         <label htmlFor="username">username</label><br/>
        //         <input type="text" value={username} onChange={(e)=>setUsername(e.target.value)} placeholder="username"/><br/>
        //         <label htmlFor="password">password</label><br/>
        //         <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="*******"/><br/>
        //         {/* <button onClick={handleSubmit}>LogIn</button> */}
        //         <br/>
        //         <NavLink activeClassName="active_class" to="/userPortal"><button onClick={handleSubmit}>LogIn</button> </NavLink>
        //     </form>
        //     <br/>
        //     <NavLink activeClassName="active_class" to="/userSignUp"><button onClick={()=>{history.push("/userSignUp")}}>SignUp for new Account/Register Here</button></NavLink>
        //     {/* <button onClick={()=>{history.push("/userSignUp")}}>SignUp for new Account/Register Here</button> */}
        // </div>
    );
}

export default UserLogin;