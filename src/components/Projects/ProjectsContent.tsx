import React from 'react'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';

import sneakers from "../Images/sneakers.jpg.png";
import goodNews from "../Images/goodNews.png"

/*ICONS*/
import react from "../../assets/Icons/react.svg";
import css from "../../assets/Icons/css.svg";
import git from "../../assets/Icons/git.svg";
import figma from "../../assets/Icons/figma.svg";
import vercel from  "../../assets/Icons/vercel.svg";
import javascript from "../../assets/Icons/javascript.svg";
import html from "../../assets/Icons/html.svg";
import netlify from "../../assets/Icons/netlify.svg";



export const projects =[
{
    id: 0,
    image: sneakers,
    name: "Sneakers",
    description: "E-commerce product page. Design created by Frontend Mentors",
    stack: [
        {
            name: "React",
            logo: react
        },
        {
            name: "CSS",
            logo: css
        },
        {
            name: "Git",
            logo: git
        },
        {
            name: "Figma",
            logo: figma
        },
        {
            name: "Vercel",
            logo: vercel
        }], 
    live: "https://sneakers-peach.vercel.app/",
    github: "https://github.com/polyalyameow/Sneakers"
},

{
    id: 1,
    image: goodNews,
    name: "Good News",
    description: "Individual project created for front-end course at Teknikhögskolan. Good News still exist!",
    stack: [
        {
            name: "JavaScript",
            logo: javascript,
            
        },
        {
            name: "HTML",
            logo: html
        },
        {
            name: "CSS",
            logo: css
        },
        {
            name: "Figma",
            logo: figma
        },
        {
            name: "Git",
            logo: git
        },
        {
            name: "Netlify", 
            logo: netlify
        }
        
    ],
    live: "https://melodious-otter-3f6d38.netlify.app/",
    github: "https://github.com/polyalyameow/GoodNews"

}]



const ProjectsContent = () => {
  return (
    <Box sx={{display:"flex", flexDirection:"row"}}>
        {projects.map((project, id) => (
            <Card key={id} sx={{ maxWidth: 345, height: 400, display:"flex", flexDirection: "column", margin: "5px", padding: "10px", borderRadius:"10px" }}>
                <CardMedia sx={{ height: 200, objectFit:"contain", borderRadius:"10px"}} image={project.image}></CardMedia>
                <CardContent>
                    <Typography>{project.name}</Typography>
                    <Typography>{project.description}</Typography>
                    <Box sx={{display:"flex", flexDirection:"row", justifyContent:"space-between"}}>
                        
                    { project.stack.map((st, id) => (
                        <Tooltip title={st.name} placement="bottom">
                        <Avatar key={id} variant="square" src={st.logo} sx={{width:"20px", height:"20px"}}></Avatar>
                        </Tooltip>
                    ))
                    }
                    
                    </Box>
                    
                </CardContent>
            </Card>
        ))}
        <Box>


        </Box>
    </Box>
  )
}

export default ProjectsContent