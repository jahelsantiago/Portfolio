import React from 'react'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import CodeIcon from '@material-ui/icons/Code';
import StarIcon from '@material-ui/icons/Star';
import StorageIcon from '@material-ui/icons/Storage';
import "./NewTimeLine.css"

const experience = [
  {
    icon : <StorageIcon />, title : "Front-end developer", subTitle : "Bogota, Col", descrpition : ["• Closely worked with the design team to create the front end of the main page of DIME, the organization that control the pharmaceutical prices in Latin America.", "• Implemented an auxiliar web application with react and firebase to automate the process of modifying the main web site."], date: "Aug 2021 - Present"
  },
  {
    icon : <StorageIcon />, title : "Back-end developer", subTitle : "Bogota, Col", descrpition : ["• Developed an information system using T-sql in Azure server. The software was launched as an internal tool, decreasing the information loss to 0%."," • Decreased the execution time of the information retrieval in a factor of 10 by improving the logical model, the queries and indexes of the data base. "], date: "Aug 2020 - Dec 2020"
  },
  {
    icon : <CodeIcon />, title : "Python teacher", subTitle : "Medellin, Col", descrpition : ["▪ Worked as volunteer teaching python programming basics to more than 150 kids under 10 and 15 years old in the remotest regions of Antioquia Colombia."], date: "Jan 2018 - Dec 2018"
  }
]


const NewTimeLine = () => {
    return (
      <VerticalTimeline className={ "vertical-time-line" } animate = {false}>
        {experience.map(exp => (
          <TimeLineElement icon={exp.icon} title={exp.title} subTitle={exp.subTitle} descrpition = {exp.descrpition} date = {exp.date}/>
        ))}


        <VerticalTimelineElement
          iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
          icon={<StarIcon />}
        />
      </VerticalTimeline>
  )
}


function TimeLineElement({icon, title, subTitle, descrpition = [], date}){
  return(
    <VerticalTimelineElement
      className="vertical-timeline-element--work"
      contentStyle={{ background: '##ffffff', color: 'black' , border: "3px solid #1260a1"}}
      contentArrowStyle={{ borderRight: '7px solid  rgb(18, 96, 161)' }}
      date={date}
      iconStyle={{ background: 'rgb(18, 96, 161)', color: '#fff' }}
      icon={icon}
    >
      <h3 className="vertical-timeline-element-title" style = {{letterSpacing : "2.48px", textAlign : "right", color : "#1260a1"}}>{title}</h3>
      <h4 className="vertical-timeline-element-subtitle" style = {{letterSpacing : "0.98px", textAlign : "right", color: 'rgb(103, 143, 218)'}}>{subTitle}</h4>
      {descrpition.map(elem => <p>{elem}</p>)}
    </VerticalTimelineElement>
  )
}


export default NewTimeLine
