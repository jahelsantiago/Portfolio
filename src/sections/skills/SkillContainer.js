import React from 'react'
import "./SkillContainer.css"
import Fade from 'react-reveal/Fade';

const SkillContainer = ({title, title_color, children}) => {
    return (
        <Fade right>
        <div className = "skil_container">
            <div className="skill_title" >
                <p>
                    {title}
                </p>
            </div>
            
            {children}
            
        </div>
        </Fade>
    )
}

export default SkillContainer
