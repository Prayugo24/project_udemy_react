import React, { Component } from "react";
import FormInput from "./FormInput";
import TodoItem from "./TodoItem";
// import Button from "./Button"; typescript tidak bisa mengmport svg
import '../assets/style/App.css';
import '../assets/style/index.css';
import EditModal from "./EditModal";
const logo: string = require("../assets/images/logo.svg").default;


interface statesApp {
    todos:Data[],
    isEdit:Boolean
    editData:Data
}


type Data = {
    id: number;
    title?: string;
}

interface propsApps {

}

class App extends Component<propsApps, statesApp>{
    state:statesApp = {
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
        ],
        isEdit:false,
        editData:{
            id: 0,
            title: "",
            
        }
    }

    setTitle = (e : React.ChangeEvent<HTMLInputElement>):void => {
        this.setState({
            editData:{
                ...this.state.editData,
                title: e.target.value
            }
        })
    }
    
    openModal = (id:number, data?:string) => {
        this.setState({
            isEdit:true,
            editData:{
                id,
                title:data
            }
        })
        
    }
    closeModal = () => {
        this.setState({
            isEdit:false
        })
    }
    
    deleteTask = (id?:number) =>  {
        console.log("delete "+id)
        this.setState({
            todos: this.state.todos.filter(item => item.id != id)
        })
    }
    addTask = (text?:string) =>{
        console.log("add "+text)
        const id = this.state.todos.length
        const newData: Data = {
            id: id + 1,
            title: text
        }
        this.setState({
            todos: [...this.state.todos,newData]
        })
    }
    
    render(){
        const { todos, isEdit } = this.state
        return(
            <div className="app">
                <div className="logo">
                    <img src={logo} alt="logo"></img>
                    <h3>Task List</h3>
                </div>
                <div className="list">
                    
                {
                    Object.keys(todos).map((index,i) => (
                        <TodoItem  open={() => this.openModal(todos[Number(i)].id,todos[Number(index)].title)} key={todos[Number(i)].id} idData={todos[Number(i)].id} todos={todos[Number(index)].title} del={() => this.deleteTask(todos[Number(index)].id)}/>
                    ))
                    
                }
                </div>
                
                <div className="input-form">
                    <FormInput add={this.addTask}/>
                </div>
                
                <EditModal edit={isEdit} close={() => this.closeModal()} change={this.setTitle} data={this.state.editData}/>
            </div>
            
        )
        
    }
}

export default App;