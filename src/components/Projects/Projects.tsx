
import Skills from '../Skills/Skills';
import ProjectsContent from './ProjectsContent';


import Box from '@mui/material/Box';


const Projects = () => {

  return (
    <>
    <Box sx={{width: "85%", display:"flex", flexDirection:"row", justifyContent:"space-around"}}>
        <Box sx={{display:"flex", flexDirection:"row", alignItems:"center", justifyContent:"center", width: "43.75rem", padding: "1.25rem"}}>
              <Box sx={{ width: "100%", display: "flex", justifyContent:"flex-start"}}>
                <ProjectsContent />
              </Box >
        </Box> 
        <Skills/>
    </Box>
    </>
  )
}

export default Projects