import React, { Component } from "react";

import Profile from "./profile/index";
import Skills from "./profile/Skills";

import MyProps from "./props/index";
import Bio from "./profile/Bio";
import SocialsLink from "./profile/Links";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Profile />
        <div style={{ margin: "50px 35%" }}>
          <h3>Lists of programmers of my Company</h3>
          <Bio name="Zahid Hasan" profession="Premik Purush" />
          <Skills skill1="React" skill2="Angular" skill3="VueJs" />
          <SocialsLink facebook="https://www.facebook.com/aminul.264"></SocialsLink>
          <Bio
            name="Masum Billah"
            profession="Bkash sukh private limited"
          ></Bio>
          <Skills skill1="NodeJs" skill2="ExpressJs" skill3="MongoDB"></Skills>
          <SocialsLink></SocialsLink>
        </div>
      </div>
    );
  }
}
export default App;
