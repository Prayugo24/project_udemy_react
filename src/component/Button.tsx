import React from "react";
import '../assets/style/Button.css';

interface Props {
    text:string;
    variant?: string;
    action?:() => void
}

const Button: React.FC<Props> = ({text, variant, action}) =>{
    return(
        <button className={variant} onClick={action}>{text} Click</button>
    )
}

export default Button;