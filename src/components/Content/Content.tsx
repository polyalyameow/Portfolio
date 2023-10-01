import React from 'react'
import { Link } from "react-router-dom";

import "./Content.css"
import avatar from "../Images/avatar.png"


import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';



const Content = () => {

  return (
    
    <Box sx={{ display: "flex", flexDirection:"column", alignItems:"center", justifyContent: "center", padding: "3%"}}>
    <Box sx={{display: "flex", flexDirection:"row-reverse", justifyContent:"center", width: "80%", paddingTop: 5}}>
        <Avatar alt="Polyalya"
        src={avatar}
        sx={{ width: 300, height: 300, border: "0.125rem solid #533638", padding: 1, marginLeft: 4 }}></Avatar>
        <Box sx={{width: "54%", display: "flex", flexDirection:"column", marginRight: 3}}>
            <Typography variant="h2" component="h2">Hi! I’m Polly</Typography>
            <Typography variant="h3" component="h3" align="right" paddingTop={2} paddingBottom={3}>JUNIOR FRONT-END DEVELOPER</Typography>
            <Typography variant="h4" component="h4" align="right">A stereotypical bookworm whose life has been completely changed by a wonderful world of IT</Typography>
            <Button sx={{width:"40%", backgroundColor: "#533638", color: "#FFF", ":hover": {backgroundColor: "#67595E"}, alignSelf:"flex-end", marginTop:"1.25rem"}}><Link style={{textDecoration: "none"}} to="/projects"><Typography sx={{color:"white"}}>VIEW MY WORK HERE<span className="blink">_</span></Typography></Link></Button>
        </Box>
    
    </Box>
    </Box>
  )
}

export default Content