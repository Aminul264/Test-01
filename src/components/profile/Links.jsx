import React from "react";

const SocialsLink = (props) => (
  <div className="socials-links">
    <h3>Socials links :</h3>
    <ul>
      <li>
        <a href={props.facebook}>FaceBook</a>
      </li>
      <li>
        <a href={props.linkedin}>linkedIn</a>
      </li>
      <li>
        <a href={props.github}>Github</a>
      </li>
    </ul>
  </div>
);
export default SocialsLink;
