import React from "react";
import Button from "./Button";
import '../assets/style/TodoItem.css';


const TodoItem = () =>{
    const propEdit = {
        textButton:"Edit",
        variant:""
    }
    return(
        <div className="todoItem">
            <p>Title Item</p>
            <div>
                <Button text="Edit" variant="btn btn-success"/>
                <Button text="Delete" variant="btn btn-warning"/>
            </div>
        </div>
    )
}


export default TodoItem

