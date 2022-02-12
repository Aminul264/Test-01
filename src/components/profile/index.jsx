import React from "react";
import './style.css';
class Profile extends React.Component{
    render(){
        return (
            <div className="container">
                <div className="bio">
                    <h3>Aminul Islam</h3>
                    <p>FullStack JavaScript Developer</p>

                </div>
                <div className="skills">
                    <h3>Skills: </h3>
                    <ul>
                        <li>JavaScript</li>
                        <li>C/C++</li>
                        <li>Java</li>
                    </ul>
                </div>
                <div className="socials-links">
                    <h3>Socials links :</h3>
                    <ul>
                        <li><a href="#">FaceBook</a></li>
                        <li><a href="#">linkedIn</a></li>
                        <li><a href="#">Github</a></li>

                    </ul>
                </div>
            </div>
        )
    }
}
export default Profile;