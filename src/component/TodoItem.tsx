import React from "react";
import Button from "./Button";
import PropTypes from "prop-types"
import '../assets/style/TodoItem.css';

interface TodosProps {
    idData?:number
    todos?:string
    del:(id?:number) => void
}

const TodoItem: React.FC<TodosProps> = ({idData, todos, del}) => {
    const deleteById = (id?:number) => {
        del(id)
    }
    return(
        <div className="todoItem">
            <p>{todos}</p>
            <div>
                <Button text="Edit" variant="btn btn-success" />
                <Button text="Delete" variant="btn btn-warning" action={() => deleteById(idData)}/>
            </div>
        </div>
    )
}

export default TodoItem



