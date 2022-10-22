import React, { Component } from "react";
import FormInput from "./FormInput";
import TodoItem from "./TodoItem";
// import Button from "./Button"; typescript tidak bisa mengmport svg
import '../assets/style/App.css';
const logo: string = require("../assets/images/logo.svg").default;



class App extends Component{
    state = {
        name: "Hello",
    }
    render(){
        return(
            <div className="App">
                <div className="logo">
                    <img src={logo} alt="logo"></img>
                </div>
                <div className="list">
                    <TodoItem/>
                </div>
                <div className="input-form">
                    <FormInput/>
                </div>
            </div>
        )
    }
}

export default App;