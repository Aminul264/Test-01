import React from "react";
import "./style.css";

import Bio from "./Bio";
import Skills from "./Skills";
import SocialsLink from "./Links";

class Profile extends React.Component {
  render() {
    return (
      <div className="container">
        <Bio />
        <Skills />
        <SocialsLink />
      </div>
    );
  }
}
export default Profile;
