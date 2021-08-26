import React from 'react'
import NewTimeLine from "./NewTimeLine"
import brush_img from "../../Images/blue_brush.png"
import Brush from "../../Components/Brush"
import ColorText from "../../Components/ColorText"
import "./Experience.css"

const Experience = () => {
    return (
        <div id = "experience" className = "experience-container">
            <div className="fac experience">
                <Brush brush = {brush_img} heigh = {"1rem"} widht = {"60%"}/>            
                <ColorText size = {4} from = {"9, 53, 139"} to = {"91, 120, 177"} time = {"5"}>            
                    Work Experience
                </ColorText>
            </div>
            <NewTimeLine/>
        </div>
    )
}

export default Experience