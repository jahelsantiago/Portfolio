import React from 'react'
import "./ColorText.css"

const ColorText = ({from,to, time, children, size}) => {
    const styles = {
        background: `linear-gradient(71deg, rgba(${from},1) 0%, rgba(${to},1) 100%)` ,
        animation: `textclip ${time}s linear infinite`,
        fontSize: `${size}rem`,
        backgroundSize: "auto auto",
        backgroundClip: "border-box",
        backgroundSize: "200% auto",
        color: "#fff",
        backgroundClip: "text",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",        
    }

    return (
        <div className = "ColorText">
            <h1 style = {styles}>
                {children}
            </h1>            
        </div>
    )
}

export default ColorText
