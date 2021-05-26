import React from 'react'
import "./Brush.css"

const Brush = ({brush, heigh, widht}) => {
    const styles = {
        maxHeight: heigh,
        minWidth: widht,
    }    
    return (                     
        <img src={brush} style = {styles}/>                
    )
}

export default Brush
