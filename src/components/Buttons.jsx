import React from "react";


export default function Buttons(props){
     let buttonElement

     if(typeof props.buttonValue === number) {
         buttonElement = <button className="bg-white w-full h-full m-0">{props.buttonValue}</button>
        }else {
            buttonElement
        }

    return(
        {buttonElement}
    )
}