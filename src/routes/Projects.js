import React from "react";
import ProjectTable from "../components/ProjectTable";

class Projects extends React.Component {

  render() {   
    return (
      <div className="Projects">
        <h1> Projects </h1>
        <ProjectTable />
      </div>
    );
  }
}

export default Projects;