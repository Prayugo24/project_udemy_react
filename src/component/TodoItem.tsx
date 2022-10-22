import React from "react";
import Button from "./Button";
import '../assets/style/TodoItem.css';

const TodoItem = () =>{
    return(
        <div className="todoItem">
            <p>Title Item</p>
            <div>
                <Button/>
                <Button/>
            </div>
        </div>
    )
}


export default TodoItem

