import {useState, useRef} from 'react';
import {projects} from "./ProjectsDb"

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import Button from '@mui/material/Button';

import GitHub from '@mui/icons-material/GitHub';
import NorthEastIcon from '@mui/icons-material/NorthEast';



const ProjectsContent = () => {
   

    const openInNewTab = (url) => {
        window.open(url, "_blank", "noreferrer");
      };



  return (
    <Box sx={{display:"flex", flexDirection:"row", flexWrap: "wrap", justifyContent:"center"}}>
        {projects.map((project, id) => (
            <Card key={id} sx={{ width: 300, height: 450, display:"flex", flexDirection: "column", margin: "5px", padding: "10px", borderRadius:"10px", border: "1px solid orange", justifyContent:"space-between"}}>
                <CardMedia sx={{ height: 200, objectFit:"contain", borderRadius:"10px"}} image={project.image}></CardMedia>
                <CardContent sx={{display:"flex", flexDirection:"column",justifyContent:"space-between", alignItems:"center", border:"1px solid yellowgreen", maxHeight: "150px", height:"100%", padding:"0"}}>
                    <Typography>{project.name}</Typography>
                    <Typography sx={{textAlign:"center"}}>{project.description}</Typography>
                    
                    <Box sx={{display:"flex", flexDirection:"row", justifyContent:"space-between"}}>
                        
                    { project.stack.map((st, id) => (
                        <Tooltip key={id} title={st.name} placement="bottom">
                        <Avatar key={id} variant="square" src={st.logo} sx={{width:"20px", height:"20px"}}></Avatar>
                        </Tooltip>
                    ))
                    }
                    </Box>
                    <Box sx={{display:"flex", flexDirection:"row", justifyContent:"space-between", width: "70%"}}>
                        
                        <Button variant="contained" disabled={project.github == "disabled"} onClick={() => {openInNewTab(project.github)}}><GitHub /> GitHub </Button>
                        <Button variant="contained" disabled={project.live == "disabled"}onClick={() => openInNewTab(project.live)}><NorthEastIcon /> Live</Button>
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