import React, { Component } from "react";

// class App extends Component {
//   render() {
//     return <h1>Yes! React is awesome</h1>;
//   }
// }

// export default App;

// custom component  creat kore porobortite  <componentName/> evabe use kora jay...obossoi component name Capital diye suru korte hobe
const MyComponent = () => {
  return (
    <div>
      <h1>this is my component </h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, qui.
      </p>
    </div>
  );
};

class App extends Component {
  render() {
    //  object hisebeo jsx er code er modde atttribute(props) gula add kora jay
    const obj1 = {
      title: "hello i'm title",
      className: "head1",
    };
    const name = "Aminul  Islam";
    {
      /* javascript code variable er modde store kore porobortite just second bracket use kore {name} use kora jay! */
    }
    const bio = (
      <div>
        <h3>Aminul Islam</h3>
        <p>FullStack JavaScript Developer </p>
        <span>Email : aminulislam681538@gmail.com</span>
      </div>
    );

    return (
      <div className="header">
        {/* <h1 title="I am title">What is Jsx</h1> */}
        {/* er modde comment er jonnno second bracket then commemnt */}

        <h1 {...obj1}>What is jsx</h1>

        <p>Jsx is awesome and its means javascript extention</p>

        <p> My name is {name}</p>
        <button type="submit" class="btn btn-primary">
          Submit
        </button>
        <MyComponent />
        {bio}
      </div>
    );
  }
}

export default App;
