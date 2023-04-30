import React from 'react';
import './App.css';
import TeacherStudentPortal from './Component/Pages/PortalHomePage';
import UserLogin from "./Component/Pages/UserLoginPage";
import UserSignUp from "./Component/Pages/UserSignUpPage";
import AdminLogin from "./Component/Pages/AdminLoginPage";
import AdminSignUp from "./Component/Pages/AdminSignUpPage";
import Error from './Component/Pages/ErrorPage';
import { Route, Switch } from 'react-router-dom';
import Navbar from './Component/Navbar/NavBar';
import Aboutus from './Component/Aboutus';
import Footer from './Component/Footer/Footer';
import GetSkills from './Component/Skill';
import UserSidebar from './Component/Pages/UserPages/UserSidebar';
import Sidebar from './Component/Pages/AdminPages/Sidebar';
import UnderProgress from './Component/Pages/Underprogress';
// import Form from './Adarsh/Form';


function App() {
  return (
    <>
      <Navbar/>
      <Switch>
          <Route path="/" component={TeacherStudentPortal} exact/>
          <Route path="/aboutUs" component={Aboutus}/>
          <Route path="/userLogin" component={UserLogin} />
          <Route path="/userSignUp" component={UserSignUp} />
          <Route path="/userportal" component={UserSidebar } />
          <Route path="/adminLogin" component={AdminLogin} />
          <Route path="/adminSignUp" component={AdminSignUp} />
          <Route path="/adminportal" component={Sidebar } />
          <Route path="/skills" component={GetSkills} />
          <Route path="/footer" component={Footer} />
          <Route path="/underProgress" component={UnderProgress} />
          <Route path="/error"component={Error} />
      </Switch>
  {/* <Form /> */}
    </>
  );
}

export default App;
