import React from 'react'
import ColorText from "../../Components/ColorText"
import "./Education.css"
import brush_img from "../../Images/red_brush.png"
import Brush from "../../Components/Brush"
import unal from "../../Images/Escudo_unal.png"
import SchoolIcon from '@material-ui/icons/School';
import GradeIcon from '@material-ui/icons/Grade';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import PageviewIcon from '@material-ui/icons/Pageview';
import Fade from 'react-reveal/Fade';
import StarsIcon from '@material-ui/icons/Stars';
import CurrencyExchangeIcon from '@material-ui/icons/';

const Education = () => {
    return (
        <div className = "Education" id = "education">
            <div className="Education__header">
                <ColorText size = {3} from = {"244,128,128"} to = {"243, 8, 8"} time = {"5"}>
                    Education
                </ColorText>
                <Brush brush = {brush_img} heigh = {"1rem"} widht = {"60%"}/>            
            </div>
            
            <Fade right>
            <div className="description-container">
                <img className ="univerity-logo" src={unal} alt=""width = "150rem"/>     
                <div className="description-container-text">                    
                    <p className = "title-text">B.S. Computer and Systems Engineer</p>  
                    <div className = "university-text">
                        <SchoolIcon className = "icon"/>
                        <p style = {{fontWeight : "600"}}>National University of Colombia</p>
                    </div>
                    
                    <div className = "course-list">
                        <p>Full scholarship for academic excellence <br/> <span style = {{color : "#e71825", whiteSpace: "nowrap"}} >Fundacion Bancolombia GEN50</span></p>
                    </div>
                    <div className = "university-text">
                        <CalendarTodayIcon className = "icon"/>
                        <p>Expected Graduation: <span style = {{color : "#e71825", whiteSpace: "nowrap"}} >December-2023</span></p>
                    </div>
                    <div className = "university-text">
                        <GradeIcon className = "icon"/>
                        <p>GPA: <span style = {{color : "#e71825"}}>4.5 / 5</span></p>                         
                    </div>                    
                    <div className = "university-text">
                        <PageviewIcon className = "icon"/>
                        <p>Relevant Course Work</p>                         
                    </div>
                    <ul className = "course-list">
                        <li>Data structures and algorithms</li>
                        <li>OPP</li>
                        <li>Calculus and advanced math</li>                                                
                        <li>Statistics and Probability</li>
                        <li>Software Engineer</li>
                        <li>Data Bases (SQL and NoSQL)</li>                        
                    </ul>                                                            
                </div> 

 

                <div className ="certifications" >
                    <p className = "title-text" style = {{fontSize : "1.rem", color : "black"}}>Aditional Studies</p> 
                    <div className = "university-text">
                        <StarsIcon className = "icon"/>
                        <p >Deep learning specialization</p>
                    </div> 
                        <p style = {{marginLeft: "3rem"}}>Coursera (<span style = {{color : "#e71825", whiteSpace: "nowrap"}} >September-2020</span>)</p>                        
                    
                    <div className = "university-text">
                        <StarsIcon className = "icon"/>
                        <p >
                            Tensor Flow developer:
                            <span style = {{fontSize: "1.3rem"}}>
                                profesional certificate 
                            </span>
                        </p>                        
                    </div> 
                        <p style = {{marginLeft: "3rem"}}>Coursera (<span style = {{color : "#e71825", whiteSpace: "nowrap"}} >September-2020</span>)</p>                        
                </div>

            </div>
        </Fade>
            
        </div>
    )
}

export default Education
