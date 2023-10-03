import React, {useState} from "react";
import { Link } from "react-router-dom";

import Tooltip from '@mui/material/Tooltip';

import MenuIcon from '@mui/icons-material/Menu';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import HomeRepairServiceOutlinedIcon from '@mui/icons-material/HomeRepairServiceOutlined';
import MailOutlinedIcon from '@mui/icons-material/MailOutlined';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';


const NavBar = () => {

  const [show, setShow] = useState(false);

  return (
    <>
      <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', width: "80%", height: '10%', margin: "32px auto 8px auto"}}>
        <Box sx={{alignSelf: "center"}}>
          <Link to="/" style={{ textDecoration: 'none' }}><Typography variant="h1" component="h1" sx={{paddingTop:"0.625rem", paddingBottom:"0.625rem"}}>&#62;&#95;Polyalya</Typography></Link>
        </Box>
        
        <Box sx={{ display: 'flex', flexDirection: 'row-reverse', alignSelf: "center"}}>
          <MenuIcon sx={{fontSize: 50, pl: 10, pr: 3, color: "#533638"}} onClick={() => setShow(prev => !prev)}></MenuIcon>
          {show && 
          <Box sx={{ display: 'flex', flexDirection: 'row-reverse'}}>
          <Tooltip title="Home" placement="bottom-end">
            <Link to="/"><HomeOutlinedIcon sx={{fontSize: 50, marginLeft: 4, color: "#533638"}}/></Link>
          </Tooltip>
          <Tooltip title="Projects" placement="bottom-end">
          <Link to="/projects"><HomeRepairServiceOutlinedIcon sx={{fontSize: 50, marginLeft: 4, color: "#533638"}}/></Link>
        </Tooltip>
        <Tooltip title="Contacts" placement="bottom-end">
          <Link to="/contacts"><MailOutlinedIcon sx={{fontSize: 50, color: "#533638"}}/></Link>
        </Tooltip>
        </Box>
          }
          </Box>
        </Box>
      
      </>
  );
};

export default NavBar;
