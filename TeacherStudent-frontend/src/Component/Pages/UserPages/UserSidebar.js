import React from "react";
import './usersidebar.css'
import { Switch,BrowserRouter as Router, Route } from "react-router-dom";
import UserMyProfile from "./UserMyProfile";
import UserStudent from "./UserStudent";
import UserTeacher from "./UserTeacher";

import UserDocument from "./UserDocuments";
import {useHistory} from "react-router-dom";
import GetTeachers from "../../Teacher";
import GetStudents from "../../Student";


const UserSidebar =()=>{

  const history=useHistory();

  const redirectToLogin = () => {
    localStorage.clear();
    history.push("/userLogin");
      }

  return (
        <>
        <header>
            <nav id="sidebarMenu" className="collapse d-lg-block sidebar collapse bg-white">
              <div className="">
                <div className="list-group list-group-flush mx-3 mt-4">
                  
                  <a href="/userportal" className="list-group-item list-group-item-action py-2 ripple"
                    ><i className="fas fa-user fa-fw me-3"></i><span>My Profile</span></a>
                  <a href="/userportal/students" className="list-group-item list-group-item-action py-2 ripple"
                    ><i className="fa fa-users me-3"></i><span>Students</span></a>
                  <a href="/userportal/teachers" className="list-group-item list-group-item-action py-2 ripple"
                    ><i className="fa-solid fa-person-chalkboard fa-fw me-3"></i><span>Teachers</span></a>
                  <a href="/userportal/documents" className="list-group-item list-group-item-action py-2 ripple"
                    ><i className="fa-solid fa-file fa-fw me-3"></i><span>Documents</span></a>
                  <a onClick={redirectToLogin} className="list-group-item list-group-item-action py-2 ripple"
                    ><i className="fa fa-sign-out fa-fw me-3"></i><span>LogOut</span></a>
                </div>
              </div>
            </nav>
        </header>


<Switch>
          <Route path="/userportal" component={UserMyProfile} exact  />
          <Route path="/userportal/students" component={GetStudents } />
          <Route path="/userportal/teachers" component={GetTeachers } />
          <Route path="/userportal/documents" component={UserDocument} />
          <Route>NOT FOUND</Route>
      </Switch>

    </>
    );
}

export default UserSidebar;