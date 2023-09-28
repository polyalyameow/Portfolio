import { useRef } from 'react';

import ProjectsContent from './ProjectsContent';


import Box from '@mui/material/Box';
import Content from '../Content/Content';
import Button from '@mui/material/Button';


import SouthIcon from '@mui/icons-material/South';

const Projects = () => {
  const ref = useRef(null);

  const handleClick = () => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
    <Box sx={{width: "80%", marginBottom: "5%", paddingTop:"40px"}}>
        <Box sx={{display:"flex", flexDirection:"row", border:"2px solid purple"}}>
              <Box sx={{width: "130px", height: "80vh", border:"1px solid red", display:"flex", flexDirection:"column", justifyContent:"flex-end", alignItems:"center"}}>
              <Button onClick={handleClick} sx={{height:"15%", width: "70px", border:"1px solid red"}}><SouthIcon sx={{fontSize: "90px"}} /></Button>
              </Box>
              <Box >
                <ProjectsContent />
              </Box >
          
        </Box> 
    </Box>
    <Box ref={ref} sx={{border:"2px solid purple"}}>
      <Content/>
    </Box>
    </>
  )
}

export default Projects