import React from 'react'
import "./Header.css"
import ColorText from "../../Components/ColorText"
const Header = () => {
    

    return (
        <div className = "Header">
            <ColorText size = {"6"} time = {"2"}>
                JAHEL
            </ColorText>
            <div className="color-text">
                <p>More than a developer</p>
            </div>
        </div>
    )
}

export default Header
