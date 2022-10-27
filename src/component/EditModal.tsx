import React, { Component } from "react";
import Button from "./Button";
import '../assets/style/EditModal.css';

interface stateEditModal {

}

interface propsEditModal {
    edit:Boolean
    close: () => void
    change:(e: React.ChangeEvent<HTMLInputElement>) => void
    data:Data
}
type Data = {
    id?: number
    title?: string
}

class EditModal extends Component<propsEditModal, stateEditModal>{
    
    render(): React.ReactNode {
        const { close , edit, data, change} = this.props
        if(edit){
            return(
                <div className="modal-container">
                    <div className="modal-box">
                        <h3>Edit Task</h3>
                        <div className="input">
                            <input type="text" value={data.title} onChange={change}/>
                        </div>
                        <div className="btn-group">
                            <Button text="edit" variant="btn btn-success"/>
                            <Button text="cancel" variant="btn btn-warning" action={close}/>
                        </div>
                    </div>
                </div>
            )
        }else{
            return null
        }
        
    }
}


export default EditModal