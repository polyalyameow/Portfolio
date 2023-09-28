import React from 'react'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Content from '../Content/Content';
import ProjectsContent from './ProjectsContent';

const Projects = () => {
  return (
    <>
    <Box sx={{height: "80vh", width: "80%", border: "2px solid green", marginBottom: "10%", marginTop: "5%"}}>
        <Box>
          <Box>
              <ProjectsContent/>
          </Box>
          <Button variant="contained">
              Download my resume
          </Button>
        </Box> 
    </Box>
    <Content/>
    </>
  )
}

export default Projects