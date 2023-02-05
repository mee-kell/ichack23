import React from "react";
import ProjectTable from "../components/ProjectTable";
import AddProject from "../components/AddProject";
import logo from '../assets/pxArt.png'

class Projects extends React.Component {

  render() {   
    return (
      <div className="Projects">
        <div className="header">
            <img id="logo" src={logo} alt="logo"/>
            <h1> CHOCS </h1>
            <p>Community Hub of College Students</p>
        </div>
        <AddProject />
        <ProjectTable />
      </div>
    );
  }
}

export default Projects;