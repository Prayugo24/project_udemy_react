import React, { Component } from "react";
import Button from "./Button";

interface stateModalConfirm {

}

interface propsModalConfirm {
    update:() => void
    editConfirm:Boolean
    close:() => void
}


class ModalConfirm extends Component<propsModalConfirm, stateModalConfirm>{

    render(): React.ReactNode {
        const { update, editConfirm, close} = this.props
        if(editConfirm){
            return (
                <div className="modal-confirm">
                    <div className="modal-box">
                        <h3>Are You Sure ?</h3>
                        <div className="btn-group">
                            <Button text="Yes" variant="btn btn-success" action={update} />
                            <Button text="Cancel" variant="btn btn-warning" action={close}/>
                        </div>
                    </div>
                </div>
            )
        }else{
            return null
        }
        
    }
}
export default ModalConfirm