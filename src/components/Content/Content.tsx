import React from 'react'
import avatar from "../Images/avatar.png"
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';


import "./Content.css"



const Content = () => {

  return (
    
    <Box sx={{ display: "flex", flexDirection:"column", alignItems:"center"}}>
    <Box sx={{display: "flex", flexDirection:"row-reverse", justifyContent:"center", width: "80%", paddingTop: 5}}>
        <Avatar alt="Polyalya"
        src={avatar}
        sx={{ width: 300, height: 300, border: "2px solid #533638", padding: 1, marginLeft: 4 }}></Avatar>
        <Box sx={{width: "50%", display: "flex", flexDirection:"column", marginRight: 3}}>
            <Typography variant="h2" component="h2">Hi! I’m Polly</Typography>
            <Typography variant="h3" component="h3" align="right" paddingTop={2} paddingBottom={3}>JUNIOR FRONT-END DEVELOPER</Typography>
            <Typography variant="h4" component="h4" align="right">A stereotypical bookworm whose life has been completely changed by a wonderful world of IT</Typography>
        </Box>
    
    </Box>
    <Box sx={{width: "45%", marginTop: 3, paddingLeft: 5}}>
        <Typography variant="h5" component="h5" align="left">Follow my journey from book nerd to programming geek<span className="blink">&#95;</span></Typography>
        
        </Box>
    </Box>
  )
}

export default Content