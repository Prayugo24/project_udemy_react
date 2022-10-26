import React, { Component } from "react";
import Button from "./Button";
import '../assets/style/FormInput.css';

interface stateFormInput{
    text?: string
}

interface propsFormInput{
    add:(texts?:string) => void
}

class FormInput extends Component<propsFormInput, stateFormInput>{
    // stateForm: stateFormInput;
    propsForm: propsFormInput;
    constructor(props:propsFormInput, stetes:stateFormInput){
        super(props, stetes)
        // this.stateForm = stetes
        this.propsForm = props 
    }
    state: stateFormInput={
        text:""
    }
    
    chenge = (e: React.ChangeEvent<HTMLInputElement>): void => {
        this.setState({
            text: e.target.value
        })
    }
    
    submitForm = (e:  React.SyntheticEvent) =>{
        e.preventDefault()
        if(this.state.text !== ""){
            this.propsForm.add(this.state.text)
        }
        this.setState({
            text:""
        })
    }
    
    render(){
        return (
            <form className="formInput" onSubmit={this.submitForm} >
                <input type="text" placeholder="Add Text" onChange={this.chenge} value={this.state.text}/>
                <Button text="Add" variant="btn btn-primary" action={() => this.submitForm}/>
            </form>
        )
    }
}

export default FormInput


