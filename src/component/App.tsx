import React, { Component } from "react";
import FormInput from "./FormInput";
import TodoItem from "./TodoItem";
// import Button from "./Button"; typescript tidak bisa mengmport svg
import '../assets/style/App.css';
import '../assets/style/index.css';
const logo: string = require("../assets/images/logo.svg").default;



class App extends Component{
    state = {
        name: "Hello",
    }
    render(){
        return(
            <div className="app">
                <div className="logo">
                    <img src={logo} alt="logo"></img>
                    <h3>{this.state.name}</h3>
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