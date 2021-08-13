import React from 'react'
import brush_img from "../../Images/purple_brush.png"
import Brush from "../../Components/Brush"
import ColorText from "../../Components/ColorText"
import SkillContainer from "./SkillContainer"



import "./Skills.css"

const Skills = () => {
    return (
        <div className = "Skills" id = "skills">
            <div className="fac titles">
                <ColorText size = {4} from = {"170, 42, 175"} to = {"198, 113, 201"} time = {"5"}>            
                    Skills
                </ColorText>
                <Brush brush = {brush_img} heigh = {"1rem"} widht = {"70%"}/>            
            </div>
            <div className="skills_body">
                <SkillContainer title = "SOFT SKILLS" title_color =  "0,100,20">                                
                    <ul>
                        <li>Leadership</li>
                        <li>Clear Communication</li>
                        <li>Problem solving</li>
                        <li>Public speaking</li>
                        <li>Charisma</li>
                    </ul>
                </SkillContainer>
                <SkillContainer title = "Programing Languages" title_color =  "200,100,20">
                    
                    <ul className = "bold">
                        <li>Python: <span className = "time">medium (2 yrs)</span></li>
                        <li>Javascript: <span className = "time">medium (2 yr)</span></li>
                        <li>Java: <span className = "time">basic (1 year)</span></li>
                        <li>Typescript: <span className = "time">basic (6 mths)</span></li>
                        <li>c++: <span className = "time">basic (6 mths)</span></li>
                        <li>Matlab: <span className = "time">basic (6 mths)</span></li>                    
                    </ul>
                </SkillContainer>
                <SkillContainer title = "Front-end" title_color =  "200,100,20">
                    <ul>
                        <li>HTML5 & CSS3</li>
                        <li>React.js</li>
                        <li>Next.js</li>
                        <li>React testing library</li>
                        <li>Tailwind</li>
                        <li>Sass</li>
                        <li>Material UI</li>
                        <li>Figma</li>
                        <li>GraphQL apollo client</li>
                    </ul>
                </SkillContainer>
                <SkillContainer title = "Back-end" title_color =  "200,100,20">
                    <ul>
                        <li>Firebase</li>
                        <li>MySql</li>
                        <li>Node.js</li>
                        <li>Express.js</li>                        
                        <li>MongoDB</li>                        
                        <li>FastApi</li>                        
                        <li>GraphQL apollo server</li>
                    </ul>
                </SkillContainer>
                <SkillContainer title = "Deep learning" title_color =  "200,100,20">
                    <ul>
                        <li>Tensorflow</li>
                        <li>Keras</li>                                                
                    </ul>
                </SkillContainer>
            </div>
        </div>
    )
}

export default Skills
