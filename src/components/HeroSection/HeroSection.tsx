import React from 'react'

import Content from '../Content/Content';



import Box from '@mui/material/Box';


const HeroSection = () => {
  return (
    <>
    <Box sx={{display: 'flex', flexDirection: 'column', width: "85%", alignItems: 'center', justifyContent: 'space-between'}}>
     <Content />
  
    </Box>
        
 </>
  )
}

export default HeroSection