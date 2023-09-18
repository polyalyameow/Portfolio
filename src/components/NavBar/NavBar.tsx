import React, {useState} from "react";

import Tooltip from '@mui/material/Tooltip';

import MenuOpenRoundedIcon from '@mui/icons-material/MenuOpenRounded';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import HomeRepairServiceOutlinedIcon from '@mui/icons-material/HomeRepairServiceOutlined';
import MailOutlinedIcon from '@mui/icons-material/MailOutlined';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const NavBar = () => {

  const [show, setShow] = useState(false);

  return (
    <>
      <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', width: '100%', height: '10%', marginTop: 3 ,border: "2px solid red"}}>
        <Box sx={{alignSelf: "center"}}>
          <Typography variant="h3" component="h3">&#62;&#95;Polyalya</Typography>
        </Box>
        
        <Box sx={{ display: 'flex', flexDirection: 'row-reverse', alignSelf: "center"}}>
          <MenuOpenRoundedIcon sx={{fontSize: 50, pl: 10, pr: 3, color: "#533638"}} onClick={() => setShow(prev => !prev)}></MenuOpenRoundedIcon>
          {show && 
          <Box sx={{ display: 'flex', flexDirection: 'row-reverse'}}>
          <Tooltip title="Home" placement="bottom">
            <HomeOutlinedIcon sx={{fontSize: 50, marginLeft: 4, color: "#533638"}}/>
          </Tooltip>
          <Tooltip title="Projects" placement="bottom">
          <HomeRepairServiceOutlinedIcon sx={{fontSize: 50, marginLeft: 4, color: "#533638"}}/>
        </Tooltip>
        <Tooltip title="Contacts" placement="bottom">
          <MailOutlinedIcon sx={{fontSize: 50, color: "#533638"}}/>
        </Tooltip>
        </Box>
          }
          </Box>
        </Box>
      
      </>
  );
};

export default NavBar;
