import React from "react";
import Button from "./Button";
import '../assets/style/TodoItem.css';

interface TodosProps {
    key?:number
    todos?:string
}

const TodoItem: React.FC<TodosProps> = ({key, todos}) => {
    return(
        <div className="todoItem">
            <p>{todos}</p>
            <div>
                <Button text="Edit" variant="btn btn-success"/>
                <Button text="Delete" variant="btn btn-warning"/>
            </div>
        </div>
    )
}


export default TodoItem

