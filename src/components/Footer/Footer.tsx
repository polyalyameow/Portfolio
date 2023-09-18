import React from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';

import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import MailIcon from '@mui/icons-material/Mail';

import Link from '@mui/material/Link';

const Footer = () => {
  return (
    <>
      <Box sx={{display:'flex', flexDirection: 'row', justifyContent: 'center'}}>
        <List sx={{display:'flex', flexDirection: 'row', justifyContent: 'space-between', width: "80%", border: '2px solid black'}}>
            <ListItem sx={{ width: "20%"}}>
                <ListItemIcon sx={{}}>
                <Link href="https://github.com/polyalyameow?tab=repositories" underline="none" target="_blank" rel="noopener"><GitHubIcon sx={{color: "#533638", fontSize: "30px"}}></GitHubIcon></Link>
                </ListItemIcon>
            </ListItem>
            <ListItem sx={{ width: "20%"}}>
                <ListItemIcon>
                <Link href="https://www.linkedin.com/in/polina-bass-larsson-a2b014289/?locale=sv_SE" underline="none" target="_blank" rel="noopener"><LinkedInIcon sx={{color: "#533638", fontSize: "30px"}}></LinkedInIcon></Link>
                </ListItemIcon>
            </ListItem>
            <ListItem sx={{ width: "20%"}}>
                <ListItemIcon>
                <Link href="https://www.facebook.com/polina.bass.9" underline="none" target="_blank" rel="noopener"><FacebookIcon sx={{color: "#533638", fontSize: "30px"}}></FacebookIcon></Link>
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