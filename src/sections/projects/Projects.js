import React from 'react'
import "./Projects.css"
import green_brush from "../../Images/green_brush.png"
import Brush from "../../Components/Brush"
import ColorText from "../../Components/ColorText"
import Card from "./Card"
import waifu_img from "../../Images/waifu_net.jpg"
import minst_img from "../../Images/minst.png"
import manage_img from "../../Images/manage_app.png"
import red_board from "../../Images/redboard.png"
import talky from "../../Images/talky.png"
import shortly from "../../Images/shortly.png"

const Projects = () => {
    const porject_list = [
        {image : red_board ,img_title: "RED-BOARD", title : "RED-BOARD", content : "Web platform to share homeworks, exams, laboratories and quizzes across university students", href: "https://github.com/jumorap/red-board", hrefWeb : "https://red-board-70d99.web.app/", stacks : ["FullStack", "React", "Auth", "Firebase", "Storage", "Full-Text search"]},
        {image : talky ,img_title : "Talky", title : "TALKY", content:"Web application that can answer questions about a given text created with Tensorflow.js.", href : "https://github.com/jahelsantiago/talky", hrefWeb : "https://texttalky.web.app/", stacks: ["NLP", "Tensorflow.js", "React", "machine learning"]},
        {image : waifu_img ,img_title : "WAIFU-NET", title : "WAIFU-NET", content:"A neural network that can classify a given image into their personality archetype.", href : "https://github.com/jahelsantiago/waifu-net", hrefWeb : "https://www.kaggle.com/jahelsantiagoleon/waifu-net", stacks: ["Deep Learning", "CNN", "Image Classification", "Keras"]},
        {image : minst_img ,img_title: "MINST GAN", title : "MINST GAN", content : "In this project we created a Generative adversarial network that generates hand written numbers from a given noise vector.", href:"https://github.com/jahelsantiago/MINST-GANs", stacks: ["GANs", "Pytorch"]},
        {image : manage_img ,img_title: "MANAGE-APP", title : "MANAGE-APP", content : "This project is an ERP for small manufacturing business in Colombia, that allows the user to manage every single part of his business.", href:"https://github.com/jahelsantiago/project-VIVALDI-", stacks: ["Desktop App", "Java"]},
        {image: shortly, img_title: "Shortly", title: "Shortly", content: "Landing page for shorten links that uses an API to short the links and server side rendering with vercel", stacks: ["NextJs", "SSR", "API", "Pixel perfect"], hrefWeb: "https://shortly-sigma.vercel.app/" },
    ]

    return (
        <div id = "projects" className = "projects-container">            
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
