import React from 'react'
import NavBar from '../NavBar/NavBar';
import Content from '../Content/Content';


import Box from '@mui/material/Box';
import Footer from '../Footer/Footer';


const HeroSection = () => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', width: "85%", border: "2px solid purple"}}>
     <NavBar/>
     <Content />
     <Footer/>
    </Box>
  )
}

export default HeroSection