import React from "react";
import './Button.css'

type ScrumProps = {
    children: React.ReactNode
    onClickFunction: () => void;
}
const ScrumButton = ({children, onClickFunction}: ScrumProps) => {
    return <button onClick={onClickFunction}>{children}</button>
};


export default ScrumButton;