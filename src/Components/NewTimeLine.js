import React from 'react'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import CodeIcon from '@material-ui/icons/Code';
import StarIcon from '@material-ui/icons/Star';
import StorageIcon from '@material-ui/icons/Storage';
import "./NewTimeLine.css"


const NewTimeLine = () => {
    return (
        
<VerticalTimeline className={ "vertical-time-line" }>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: '##ffffff', color: 'black' , border: "3px solid #1260a1"}}
    contentArrowStyle={{ borderRight: '7px solid  rgb(18, 96, 161)' }}
    date="Aug 2020 - Dec 2020"
    iconStyle={{ background: 'rgb(18, 96, 161)', color: '#fff' }}
    icon={<StorageIcon />}    
  >
      
    <h3 className="vertical-timeline-element-title" style = {{letterSpacing : "2.48px", textAlign : "right", color : "#1260a1"}}>Data base Designer</h3>
    <h4 className="vertical-timeline-element-subtitle" style = {{letterSpacing : "0.98px", textAlign : "right", color: 'rgb(103, 143, 218)'}}>Bogota, Col</h4>
    <p>
    ▪ Worked with another engineer developing an information system using T-sql in Azuere server . The software was
    launched as an internal tool, decreasing the information loss to 0%.    <br/>
    ▪ Improved the logical model and queries of the database increasing the total speed of the application in 500%.
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: '##ffffff', color: 'black' , border: "3px solid #1260a1"}}
    contentArrowStyle={{ borderRight: '7px solid  rgb(18, 96, 161)' }}
    date="Jan 2018 - Dec 2018"
    iconStyle={{ background: 'rgb(18, 96, 161)', color: '#fff' }}
    icon={<CodeIcon />}    
  >
      
    <h3 className="vertical-timeline-element-title" style = {{letterSpacing : "2.48px", textAlign : "right", color : "#1260a1"}}>Python teacher</h3>
    <h4 className="vertical-timeline-element-subtitle"style = {{letterSpacing : "0.98px", textAlign : "right", color: 'rgb(103, 143, 218)'}}>Medellin, Col</h4>
    <p>
    Worked as volunteer teaching python programming basics to more than 150 kids under 10 and 15 years old in the
    remotest regions of Antioquia Colombia.
    </p>
  </VerticalTimelineElement>

  <VerticalTimelineElement
    iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
    icon={<StarIcon />}
  />
</VerticalTimeline>
    )
}

export default NewTimeLine
