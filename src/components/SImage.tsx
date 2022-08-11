import React, { Component } from "react";
import "./Skills.css";

class Simage extends Component {
  render() {
    const { url, familiar } = this.props;
    return (
      <div
        className="Skill_image_container"
        style={{ backgroundImage: `url(${url})` }}
      >
        <div className="Skill_label">{familiar}</div>
      </div>
    );
  }
}

export default Simage;
