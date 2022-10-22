import React from "react";
import { text } from "stream/consumers";
import '../assets/style/Button.css';

interface Props {
    text:string;
    variant?: string;
}

const Button: React.FC<Props> = ({text, variant}) =>{
    return(
        <button className={variant}>{text} Click</button>
    )
}

export default Button;