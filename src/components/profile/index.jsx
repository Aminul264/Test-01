import React from "react";
import "./style.css";

import Bio from "./Bio";
import Skills from "./Skills";
import SocialsLink from "./Links";

class Profile extends React.Component {
  myself = {
    name: "Aminul",
    profession: "FullStack WebDeveloper",
  };
  render() {
    return (
      <div className="container">
        <Bio name={this.myself.name} profession={this.myself.profession} />
        <Skills skill1="JavaScript" skill2="Java" skill3="C/C++" />
        <SocialsLink />
      </div>
    );
  }
}
export default Profile;
