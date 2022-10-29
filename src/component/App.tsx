import React, { Component } from "react";
import FormInput from "./FormInput";
import TodoItem from "./TodoItem";
// import Button from "./Button"; typescript tidak bisa mengmport svg
import '../assets/style/App.css';
import '../assets/style/index.css';
import EditModal from "./EditModal";
import ModalConfirm from "./ModalConfirm"
const logo: string = require("../assets/images/logo.svg").default;


interface statesApp {
    todos:Data[],
    isEdit:Boolean
    isEditConfitm:Boolean
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
        isEditConfitm:false,
        editData:{
            id: 0,
            title: "",
            
        }
    }



    update = () =>{
        const {id, title}= this.state.editData
        const newData = {id, title}
        const newTodos = this.state.todos
        newTodos.splice((id-1),1,newData)
        this.setState({
            todos:newTodos,
            isEdit:false,
            isEditConfitm:false,
            editData:{
                id: 0,
                title: "",
                
            }
        })
    }

    setTitle = (e : React.ChangeEvent<HTMLInputElement>):void => {
        this.setState({
            editData:{
                ...this.state.editData,
                title: e.target.value
            }
        })
    }

    openModalConfirm = () =>{
        console.log("open")
        this.setState({
            isEditConfitm:true,
            isEdit:false,
        })
    }

    closeModalConfirm = () =>{
        this.setState({
            isEditConfitm:false,
            isEdit:false,
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
        const { todos, isEdit, isEditConfitm } = this.state
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
                
                <EditModal 
                    edit={isEdit} 
                    openConfirm={() => this.openModalConfirm()}
                    close={() => this.closeModal()} 
                    change={this.setTitle} 
                    data={this.state.editData} 
                /> 
                <ModalConfirm 
                    editConfirm={isEditConfitm}
                    update={this.update}
                    close={() => this.closeModalConfirm()} 
                />
            </div>
            
        )
        
    }
}

export default App;