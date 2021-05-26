import React, { useState } from 'react'
import menu from "../Images/menu.svg" 
import close from "../Images/close.svg" 
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';
import Rotate from 'react-reveal/Rotate';
import Flip from 'react-reveal/Flip';
import "./NavBar.css"




    
    

const MenuOpen = ({open, setopen}) => {
    return (
        <div className = "side-menu">
            <img src={close} alt="" className = "menu-icon" onClick = {()=>{setopen(prev => !prev)}}/>            

            <div className="links">                
                <a href="#projects">Projects</a>
                <a href="#experience">Experience</a>
                <a href="#education">Education</a>
                <a href="#skills">Skills</a>
                <a href="#contact">Contact</a>                
            </div>                            
        </div>
    )    
}

const MenuClose = ({open, setopen})=>{
    return(
        <div className ="nav-container">
            <img src={menu} alt="" className = "menu-icon" onClick = {()=>{setopen(prev => !prev)}}/>
        </div>
    )
}



const NavBar = () => {
    const [open, setopen] = useState(false)

    return (        
        <div className = "nav-container-big">            
            <Fade top collapse   when={open} className = "side-menu">
                <MenuOpen setopen = {open, setopen}/>
            </Fade>
            <Fade left collapse   when={!open} className = "side-menu">
                <MenuClose setopen = {open, setopen}/>
            </Fade>
        
        </div>
    )
}

export default NavBar
