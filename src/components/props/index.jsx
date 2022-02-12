/**
 * @props er modde  kono kichu  ase .....koi theke ase!!!!>>>>> jokhn call kora hoy,tokhn argument er moto atribute akare ase....that menas call korar somoy attribute akare  pass korte hoy
 */

import React from "react";

function MyProps(props) {
  console.log(props);
  return <h1>My name is {props.name}</h1>;
}

// class MyProps extends React.Component{
//     render(){
//         console.log(this.props)
//         return (

//              <h1>My name is</h1>
//         );
//     }
// }
export default MyProps;
