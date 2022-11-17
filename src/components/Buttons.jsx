import React from "react";


export default function Buttons(props){
    const buttonStyles ={
        backgroundColor:"",
    }

     if(typeof props.buttonValue === "number") {
            buttonStyles.backgroundColor = "#ef476f99"
            
        }else {
            
            buttonStyles.backgroundColor = "#A5243d99"
        }

    return(
        <button style={buttonStyles} onClick={props.buttonClicked} className="text-white text-3xl w-full h-full m-0 backdrop-blur-lg ">{props.buttonValue}</button>
    )
}