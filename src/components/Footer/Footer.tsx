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
import { Link as RouterLink} from "react-router-dom";


const Footer = () => {
  return (
    <>
      <Box sx={{'@media(max-width: 820px)':{paddingBottom:"20px"}, '@media(max-width: 768px)':{paddingBottom: 0}, display:'flex', flexDirection: 'row', justifyContent: 'center', marginBottom: 2}}>
        <List sx={{display:'flex', flexDirection: 'row', justifyContent: 'space-between', width: "80%"}}>
            <ListItem sx={{ width: "20%"}}>
                <ListItemIcon sx={{}}>
                <Link href="https://github.com/polyalyameow?tab=repositories" underline="none" target="_blank" rel="noopener"><GitHubIcon sx={{color: "#533638", fontSize: "1.875rem"}}></GitHubIcon></Link>
                </ListItemIcon>
            </ListItem>
            <ListItem sx={{ width: "20%"}}>
                <ListItemIcon>
                <Link href="https://www.linkedin.com/in/polina-bass-larsson-a2b014289/?locale=sv_SE" underline="none" target="_blank" rel="noopener"><LinkedInIcon sx={{color: "#533638", fontSize: "1.875rem"}}></LinkedInIcon></Link>
                </ListItemIcon>
            </ListItem>
            <ListItem sx={{ width: "20%"}}>
                <ListItemIcon>
                <Link href="https://www.facebook.com/polina.bass.9" underline="none" target="_blank" rel="noopener"><FacebookIcon sx={{color: "#533638", fontSize: "1.875rem"}}></FacebookIcon></Link>
                </ListItemIcon>
            </ListItem>
            <ListItem sx={{ width: "20%"}}>
                <ListItemIcon>
                <RouterLink to="/contacts"><MailIcon sx={{color: "#533638", fontSize: "1.875rem"}}/></RouterLink>
                </ListItemIcon>
            </ListItem>
        </List>
      </Box>
    </>
  );
};

export default Footer;
