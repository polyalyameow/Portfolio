
import ProjectsContent from './ProjectsContent';


import Box from '@mui/material/Box';


const Projects = () => {

  return (
    <>
    <Box sx={{width: "85%", border:"2px solid red"}}>
        <Box sx={{display:"flex", flexDirection:"row", alignItems:"center", justifyContent:"center", width: "700px", padding: "20px"}}>
              <Box sx={{ width: "100%", display: "flex", justifyContent:"flex-start"}}>
                <ProjectsContent />
              </Box >
        </Box> 
        
    </Box>
    </>
  )
}

export default Projects