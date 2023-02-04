import React from "react";

class Projects extends React.Component {

  render() {   
    return (
      <div className="Housing">
        <h1> Housing map </h1>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2483.784307432938!2d-0.17706218440698293!3d51.49882551915134!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48760567da220a01%3A0x31911b371c692e86!2sImperial%20College%20London!5e0!3m2!1sen!2suk!4v1675529431712!5m2!1sen!2suk" width="600" height="450" frameborder="0" style={{border:0}} allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
      </div>
    );
  }
}

export default Projects;