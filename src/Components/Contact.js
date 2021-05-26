import Zoom from 'react-reveal/Zoom';
import Tada from 'react-reveal/Tada';
import React from 'react'
import Brush from './Brush'
import ColorText from './ColorText'
import brush_img from "../Images/black_brush.png"
import EmailIcon from '@material-ui/icons/Email';
import "./Contact.css"

const Contact = () => {
    return (
        <div id = "contact">
            <div className="fac titles">
                <Brush brush = {brush_img} heigh = {"1rem"} widht = {"70%"}/>                            
                <Zoom bottom>
                <ColorText size = {4} from = {"0, 0, 0"} to = {"50, 50, 50"} time = {"5"}>            
                    Contact Me!
                </ColorText>
                </Zoom>
            </div>

            <Tada>
            <div className="social_container">
                <div className="social_text fac">
                    <p>
                        Write me an email and let's start building amazing things together!!!
                    </p>                     
                </div>        
                <div className="social_email">
                    <EmailIcon/>
                    <p style = {{fontFamily:"Roboto"}}>
                        jleonro@unal.edu.co                    
                    </p>

                </div>        
            </div>
            </Tada>
        </div>
            
    )
}

export default Contact
