import React from 'react'
import { Link } from "react-router-dom";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';

// ICONS
import react from "../../assets/Icons/react.svg";
import javascript from "../../assets/Icons/javascript.svg";
import python from "../../assets/Icons/python.svg";
import html from "../../assets/Icons/html.svg";
import css from "../../assets/Icons/css.svg";
import styledComponents from "../../assets/Icons/styled-components.svg";
import sass from "../../assets/Icons/sass.svg";
import bootstrap from "../../assets/Icons/bootstrap.svg";
import materialUi from "../../assets/Icons/material-ui.svg";
import chakraUI from "../../assets/Icons/chakra-ui.svg";
import git from "../../assets/Icons/git.svg";
import github from "../../assets/Icons/github.svg";
import api from "../../assets/Icons/api.svg";
import figma from "../../assets/Icons/figma.svg";
import typescript from "../../assets/Icons/typescript.svg";


export const skills = [{
    stack1:[
        {
            name: "React",
            logo: react
        },
        { 
            name: "JavaScript",
            logo: javascript
        },
        {
            name: "Python",
            logo: python
        },
        {
            name: "HTML",
            logo: html
        },
        {
            name: "CSS",
            logo: css
        }
    ],
    stack2: [
        {
            name: "styled-components",
            logo: styledComponents
        },
        {
            name: "Sass",
            logo: sass
        },
        {
            name: "Bootstrap",
            logo: bootstrap
        },
        {
            name: "Material UI",
            logo: materialUi
        },
        {
            name: "Chakra UI",
            logo: chakraUI
        },
    ],
    stack3: [
        {
            name: "Git",
            logo: git
        },
        {
            name: "Github",
            logo: github
        },
        {
            name: "API",
            logo: api
        },
        {
            name: "Figma",
            logo: figma
        }
    ],
    learningSkills: [
        {
            name: "TypeScript",
            logo: typescript
        }
    ]
}]

const Skills = () => {
  return (
    <Box sx={{width:"35%", display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"space-between", padding:"0.625rem"}}>
        <Typography sx={{mb:2}} variant="h3" component="h3">Skills</Typography>
        <Box>
            {skills.map((skill, id) => (
                <div key={id}>
                <Box sx={{display:"flex", flexDirection:"row", justifyContent:"center", flexWrap:"wrap", marginBottom: "1.25rem", paddingBottom:"0.625rem"}}>
                    {skill.stack1.map((sk, one) => (
                        <Box key={one} sx={{display:"flex", flexDirection:"row", alignItems:"center", margin: "0.063rem", padding:"0.063rem"}}>
                        <Avatar sx={{paddingRight:"0.125rem"}} src={sk.logo}></Avatar>
                        <Typography variant="subtitle1">{sk.name}</Typography>
                        </Box>
                    ))}
                </Box>
                <Box sx={{display:"flex", flexDirection:"row", justifyContent:"center", alignItems:"center", flexWrap:"wrap", marginBottom: "1.25rem", paddingBottom:"0.625rem"}}>
                {skill.stack2.map((sk, two) => (
                    <Box key={two} sx={{display:"flex", flexDirection:"row", alignItems:"center", justifyContent:"center", margin: "0.063rem", padding:"0.063rem"}}>
                    <Avatar sx={{paddingRight:"0.125rem"}} src={sk.logo}></Avatar>
                    <Typography variant="subtitle1">{sk.name}</Typography>
                    </Box>
                ))}
            </Box>
            <Box sx={{display:"flex", flexDirection:"row", justifyContent:"center", alignItems:"center", flexWrap:"wrap", marginBottom: "1.25rem", pb:4}}>
                    {skill.stack3.map((sk, three) => (
                        <Box key={three} sx={{display:"flex", flexDirection:"row", alignItems:"center", justifyContent:"center", margin: "0.188rem", padding:"0.313rem"}}>
                        <Avatar sx={{paddingRight:"0.125rem"}} src={sk.logo}></Avatar>
                        <Typography variant="subtitle1">{sk.name}</Typography>
                        </Box>
                    ))}
            </Box>
            <Box sx={{display:"flex", flexDirection:"row", justifyContent:"center", width:"auto", flexWrap:"wrap", marginTop:"0.625rem"}}>
                    {skill.learningSkills.map((sk, four) => (
                        <Box key={four} sx={{display:"flex", flexDirection:"row", justifyContent:"space-around", alignItems:"center"}}>
                        <Typography variant="body1">Learning now: </Typography>
                            <Box sx={{display:"flex", flexDirection:"row", justifyContent:"space-between", alignItems:"center"}}>
                                <Avatar sx={{paddingRight:"0.125rem"}} src={sk.logo}></Avatar>
                                <Typography variant="subtitle1">{sk.name}</Typography>
                            </Box>
                        </Box>
                    ))}
                </Box>
            </div>
            ))}
        </Box>
        <Button variant='contained' sx={{width:"50%", height:"10%", marginTop:"1.563rem", backgroundColor: "#543336", ":hover": {backgroundColor: "#67595E"}}}><Link style={{textDecoration: "none"}} to="" target="_blank" download><Typography variant="caption">DOWNLOAD MY CV</Typography></Link></Button>
    </Box>
  )
}

export default Skills

