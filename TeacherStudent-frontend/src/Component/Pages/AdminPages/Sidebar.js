import React from "react";
import '../AdminPages/sidebar.css'
import AdminMyProfile from "./AdminMyProfile";
import Skills from "./Skills";
// import GetStudents from "../Student";
// import Teacher from "./Teacher";
import AdminDocument from "./AdminDocument";

import { Switch,BrowserRouter as Router, Route, useHistory } from "react-router-dom";
import GetStudents from "../../Student";
import GetTeachers from "../../Teacher";

const Sidebar =()=>{

  const history=useHistory();
  const redirectToLogin = () => {
    localStorage.clear();
    history.push("/adminLogin");
}

    return (
        <>
        <h1>hello</h1>
        {/* // <!--Main Navigation--> */}
        <header>
  {/* <!-- Sidebar --> */}
  <nav id="sidebarMenu" className=" collapse d-lg-block sidebar collapse bg-white"
  style={{float:"left"}}
  >
    <div className="">
      <div className="list-group list-group-flush mx-3 mt-4">
        
        <a href="/adminportal" className="list-group-item list-group-item-action py-2 ripple"><i className="fas fa-user fa-fw me-3"></i><span>My Profile</span></a>
        <a href="/adminportal/skills" className="list-group-item list-group-item-action py-2 ripple"><i className="fas fa-cogs fa-fw me-3"></i><span>Skills</span></a>
        <a href="/adminportal/students" className="list-group-item list-group-item-action py-2 ripple"><i className="fa fa-users me-3"></i><span>Students</span></a>
        <a href="/adminportal/teachers" className="list-group-item list-group-item-action py-2 ripple"><i className="fa-solid fa-person-chalkboard fa-fw me-3"></i><span>Teachers</span></a>
        <a href="/adminportal/documents" className="list-group-item list-group-item-action py-2 ripple"><i className="fa-solid fa-file fa-fw me-3"></i><span>Documents</span></a>
        <a onClick={redirectToLogin} className="list-group-item list-group-item-action py-2 ripple"><i className="fa fa-sign-out fa-fw me-3"></i><span>LogOut</span></a>
      </div>
    </div>
  </nav>

</header>


<Switch>
          <Route path="/adminportal" component={AdminMyProfile} exact />
          <Route path="/adminportal/documents" component={AdminDocument} />
          <Route path="/adminportal/skills" component={Skills} />
          <Route path="/adminportal/students" component={GetStudents } />
          <Route path="/adminportal/teachers" component={GetTeachers } />
          <Route>NOT FOUND</Route>
      </Switch>

    </>
    )
}

export default Sidebar;