import React from 'react';
import Fade from 'react-reveal/Fade';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    margin : "1rem"
  },
  media: {
    height: 140,
  },
  title:{
    fontFamily: 'DotGothic16',
    fontSize: "2rem",
    letterSpacing: "0.05rem",
    color: "#7ce456",
    fontWeight: "500"
  },
  text:{
    fontSize: "1rem",
    letterSpacing: "0.04rem",
    textAlign: "justify",
    color: "black"
  }
});

export default function MediaCard({image,img_title, title, content, href, hrefWeb, stacks = []}) {
  const classes = useStyles();

  return (
    
    <Fade left>    
    <Card className={classes.root}>      
      <div className={"stack"}>
        {stacks.map(stack => <div className={"stack-item"}>{stack}</div>)}
      </div>
      <a href = {hrefWeb} target = "_blank" rel = "noreferrer">
      <CardActionArea>
        <CardMedia
          className={classes.media}          
          image = {image}
          title={img_title}
        />        
        <CardContent>
          <p className = {classes.title}>
            {title}
          </p>
          <p className = {classes.title + " " +  classes.text}>
            {content}
          </p>                      
        </CardContent>
      </CardActionArea>
      </a>
      <CardActions>
        <Button size="small" color="primary" target="_blank" href={href}>
          {"Learn More"}
        </Button>
{/*         <Button size="small" color="primary">
          Learn More
        </Button> */}
      </CardActions>
    </Card>
    </Fade>
  );
}