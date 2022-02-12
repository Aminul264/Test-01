import React from "react";
import "./style.css";

const Bio = () => (
  <div className="bio">
    <h3>Aminul Islam</h3>
    <p>FullStack JavaScript Developer</p>
  </div>
);

const Skills = () => (
  <div className="skills">
    <h3>Skills: </h3>
    <ul>
      <li>JavaScript</li>
      <li>C/C++</li>
      <li>Java</li>
    </ul>
  </div>
);

const SocialsLink = () => (
  <div className="socials-links">
    <h3>Socials links :</h3>
    <ul>
      <li>
        <a href="#">FaceBook</a>
      </li>
      <li>
        <a href="#">linkedIn</a>
      </li>
      <li>
        <a href="#">Github</a>
      </li>
    </ul>
  </div>
);
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
