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
    
    <Box sx={{'@media(max-width: 912px)':{height: "400px"}, '@media(max-width: 820px)':{}, display: "flex", flexDirection:"column", alignItems:"center", justifyContent: "center", padding: "3%", height:"80%", flexWrap:'wrap'}}>
    <Box sx={{'@media(max-width: 1025px)': {width : "50rem"}, '@media(max-width: 912px)': {flexDirection : "column", alignItems:"center", justifyContent:"center", paddingTop: 0}, display: "flex", flexDirection:"row-reverse", justifyContent:"center", width: "75rem", paddingTop: 5}}>
        <Avatar alt="Polyalya"
        src={avatar}
        sx={{'@media(max-width: 1024px)': {width : "15rem", height :"15rem"}, '@media(max-width: 912px)': {width: "20rem", height: "20rem", marginBottom: 6, marginLeft: 0}, '@media(max-width: 768px)':{marginBottom: "10px"}, width: "18.75rem", height: "18.75rem", border: "0.125rem solid #533638", padding: 1, marginLeft: 4 }}></Avatar>
        <Box sx={{'@media(max-width: 1500px)': {width : '40rem'}, '@media(max-width: 912px)':{height: "380px", alignItems:"center", justifyContent:"space-between", marginTop: "20px"},  display: "flex", flexDirection:"column", marginRight: 3, width: "50rem"}}>
            <Typography sx={{'@media(max-width: 1024px)': {fontSize : 25}}} variant="h2" component="h2">Hi! I’m Polly</Typography>
            <Typography sx={{'@media(max-width: 1024px)': {fontSize : 35}, '@media(max-width: 912px)': {textAlign:"center", fontSize: 40}}} variant="h3" component="h3" align="right" paddingTop={2} paddingBottom={3}>JUNIOR FRONT-END DEVELOPER</Typography>
            <Typography sx={{'@media(max-width: 1024px)': {fontSize : 23}, '@media(max-width: 912px)': {textAlign:"center", fontSize: 28}}} variant="h4" component="h4" align="right">A stereotypical bookworm and lifelong learner on my way to becoming a programming geek</Typography>
            <Button sx={{'@media(max-width: 1024px)': {width: "18rem"}, '@media(max-width: 912px)': {width: "21rem", padding: "0.4rem", alignSelf: "center"}, width:"21.875rem", padding:"0.188rem", backgroundColor: "#533638", color: "#FFF", ":hover": {backgroundColor: "#67595E"}, alignSelf:"flex-end", marginTop:"2rem"}}><Link style={{textDecoration: "none"}} to="/projects"><Typography sx={{'@media(max-width: 1024px)': {fontSize: 15}, '@media(max-width: 912px)': {fontSize: 20}, color:"white"}}>VIEW MY WORK HERE<span className="blink">_</span></Typography></Link></Button>
        </Box>
    
    </Box>

    
    </Box>
    
  )
}

export default Content