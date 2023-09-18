import React from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';

import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import MailIcon from '@mui/icons-material/Mail';

const Footer = () => {
  return (
    <>
      <Box sx={{display:'flex', flexDirection: 'row', justifyContent: 'center'}}>
        <List sx={{display:'flex', flexDirection: 'row', justifyContent: 'space-between', width: "20%", border: '2px solid black'}}>
            <ListItem sx={{ width: "20%", border: "2px solid orange"}}>
                <ListItemIcon sx={{}}>
                    <GitHubIcon sx={{color: "#533638", fontSize: "30px"}}/>
                </ListItemIcon>
            </ListItem>
            <ListItem sx={{ width: "20%"}}>
                <ListItemIcon>
                    <LinkedInIcon sx={{color: "#533638", fontSize: "30px"}}/>
                </ListItemIcon>
            </ListItem>
            <ListItem sx={{ width: "20%"}}>
                <ListItemIcon>
                    <FacebookIcon sx={{color: "#533638", fontSize: "30px"}}/>
                </ListItemIcon>
            </ListItem>
            <ListItem sx={{ width: "20%"}}>
                <ListItemIcon>
                    <MailIcon sx={{color: "#533638", fontSize: "30px"}}/>
                </ListItemIcon>
            </ListItem>
        </List>
      </Box>
    </>
  );
};

export default Footer;
