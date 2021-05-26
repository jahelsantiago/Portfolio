import React from 'react'
import "./Projects.css"
import green_brush from "../Images/green_brush.png"
import Brush from "./Brush"
import ColorText from "./ColorText"
import Card from "./Card"
import waifu_img from "../Images/waifu_net.jpg" 
import minst_img from "../Images/minst.png"
import manage_img from "../Images/manage_app.png"


const Projects = () => {
    const porject_list = [
        {image : waifu_img ,img_title : "WAIFU-NEW", title : "WAIFU-NET", content:"The main objective of our project is to create a neural network that can classify a given image into their personality archetype.", href : "https://github.com/jahelsantiago/waifu-net"},
        {image : minst_img ,img_title: "MINST GAN", title : "MINST GAN", content : "In this project we created a Generative adversarial network that generates hand written numbers from a given noise vector.", href:"https://github.com/jahelsantiago/MINST-GANs"},
        {image : manage_img ,img_title: "MANAGE-APP", title : "MANAGE-APP", content : "This project is an ERP for small manufacturing business in Colombia, that allows the user to manage every single part of his business.", href:"https://github.com/jahelsantiago/project-VIVALDI-"},
        {image : manage_img ,img_title: "RED-BOARD", title : "RED-BOARD", content : "Web application to share homeworks, exams, laboratories and quizes across university students, it was lanched internally and currently has more than 30000 users"}
    ]

    return (
        <div id = "projects">            
            <div className="projects_header fac">                
                <ColorText size = {3.5} from = {"115, 224, 81"} to = {"208, 244, 197"} time = {"5"}>
                        Projects
                </ColorText>
                <Brush brush = {green_brush} heigh = {"1rem"} widht = {"60vw"}/>    
            </div>

            <div className="projects">                
                {porject_list.map((pj, ix)=>(<Card key = {ix} {...pj} />))}                                                
            </div>
            
        </div>
    )
}

export default Projects
