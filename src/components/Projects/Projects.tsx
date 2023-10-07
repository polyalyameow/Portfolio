import ScrollToTop from "react-scroll-to-top";

import Skills from '../Skills/Skills';
import ProjectsContent from './ProjectsContent';

import Box from '@mui/material/Box';


const Projects = () => {
 

  return (
    <>
     <ScrollToTop smooth />
    <Box sx={{'@media(max-width: 1280px)':{flexDirection:"column", alignItems:"center", paddingTop: "1.8rem"}, '@media(max-width: 540px)':{paddingTop: 0}, width: "85%", display:"flex", flexDirection:"row", justifyContent:"space-around"}}>
        <Box sx={{display:"flex", flexDirection:"row", alignItems:"center", justifyContent:"center", width: "43.75rem", padding: "1.25rem"}}>
              <Box sx={{'@media(max-width: 1280px)':{display:"flex", flexDirection:"row", justifyContent:"center"}, width: "100%", display: "flex", justifyContent:"flex-start"}}>
                <ProjectsContent />
              </Box >
        </Box> 
        <Skills/>
    </Box>
    </>
  )
}

export default Projects