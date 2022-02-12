import React,{Component} from "react";

import Profile from './profile/index'
//import Skills from "./profile/Skills";
import MyProps from './props';

class App extends Component{
    render(){
        return(
            <div className="App">
                <Profile/>
                <div style ={{margin:'50px 35%'}}>
                    <h3>Lists of programmers of my Company</h3>
                    <MyProps name='Aminul Islam'/>
                    <MyProps name='Nasim'/>
                </div>
            </div>
        )
    }

}
export default App;