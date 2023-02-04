import React from "react";
import ProjectTable from "../components/ProjectTable";
import AddProject from "../components/AddProject";

class Projects extends React.Component {

  render() {   
    return (
      <div className="Projects">
        <h1> Projects </h1>
        <ProjectTable />
        <AddProject />
      </div>
    );
  }
}

export default Projects;