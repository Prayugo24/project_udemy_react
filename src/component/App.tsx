import React, { Component } from "react";
import FormInput from "./FormInput";
import TodoItem from "./TodoItem";
// import Button from "./Button"; typescript tidak bisa mengmport svg
import '../assets/style/App.css';
import '../assets/style/index.css';
const logo: string = require("../assets/images/logo.svg").default;


interface state {
    todos:Data[]
}

type Data = {
    id: number;
    title: string;
}

interface props {

}

class App extends Component<props, state>{
    constructor(states:state){
        super(states)
        this.state = {
            todos : [
                {
                    id:1,
                    title:"reading book"
                },
                {
                    id:2,
                    title:"reading book 2"
                },
                {
                    id:3,
                    title:"reading book 2"
                }
            ]
        }
            
    }
    
    deleteTask = (id?:number) =>  {
        console.log("delete "+id)
        this.setState({
            todos: this.state.todos.filter(item => item.id != id)
        })
    }
    
    render(){
        const { todos } = this.state
        return(
            <div className="app">
                <div className="logo">
                    <img src={logo} alt="logo"></img>
                    <h3>Task List</h3>
                </div>
                <div className="list">
                    
                {
                    Object.keys(todos).map((index,i) => (
                        <TodoItem key={todos[Number(i)].id} idData={todos[Number(i)].id} todos={todos[Number(index)].title} del={() => this.deleteTask(todos[Number(index)].id)}/>
                    ))
                }
                </div>
                
                <div className="input-form">
                    <FormInput/>
                </div>
            </div>
        )
    }
}

export default App;