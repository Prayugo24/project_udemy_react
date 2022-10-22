import React, { Component } from "react";
import Button from "./Button";
import '../assets/style/FormInput.css';

class FormInput extends Component{
    render(){
        return (
            <form className="formInput">
                <input type="text" placeholder="Add Text" />
                <Button text="Add" variant="btn btn-primary"/>
            </form>
        )
    }
}

export default FormInput


