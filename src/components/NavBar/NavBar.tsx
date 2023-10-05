import {useState} from "react";
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
      <Box sx={{'@media(max-width: 1024px)': {width : "90%"}, '@media(max-width: 912px)': {marginBottom:"1.875rem", height: "6.25rem", marginTop: "1.875rem", paddingTop:"1.25rem"},  '@media(max-width: 820px)':{width: "85%", height: "6.25rem", marginTop: "1.875rem", paddingTop:"1.25rem"}, '@media(max-width: 540px)':{marginTop: "0.625rem"}, '@media(max-width: 414px)' : {flexDirection: "column", alignItems:"center", height: "5rem", marginTop:"1.875rem", paddingTop:"1.875rem"}, '@media(max-width: 375px)': {paddingTop: "0.938rem"}, display: 'flex', flexDirection: 'row', justifyContent: 'space-between', width: "90%", height: '10%', margin: "2rem auto 0.5rem auto"}}>
        <Box sx={{alignSelf: "center"}}>
          <Link to="/" style={{ textDecoration: 'none' }}><Typography variant="h1" component="h1" sx={{'@media(max-width: 1024px)': {fontSize : 30}, '@media(max-width: 820px)':{fontSize: 28}, '@media(max-width: 414px)': {fontSize: 25}, '@media(max-width: 375px)': {fontSize: 30}, paddingTop:"0.625rem", paddingBottom:"0.625rem"}}>&#62;&#95;Polyalya</Typography></Link>
        </Box>
        
        <Box sx={{'@media(max-width: 414px)' : {display: "none"}, display: 'flex', flexDirection: 'row-reverse', alignSelf: "center"}}>
          <MenuIcon sx={{'@media(max-width: 1024px)': {fontSize : 43}, '@media(max-width: 820px)': {fontSize: 40, paddingRight: 0, paddingLeft: "1.375rem"}, '@media(max-width: 540px)' :{fontSize: 32}, fontSize: 50, pl: 10, pr: 3, color: "#533638", cursor: "pointer"}} onClick={() => setShow(prev => !prev)}></MenuIcon>
          {show && 
          <Box sx={{ display: 'flex', flexDirection: 'row-reverse'}}>
          <Tooltip title="Home" placement="bottom-end">
            <Link to="/"><HomeOutlinedIcon sx={{'@media(max-width: 1024px)': {fontSize : 43}, '@media(max-width: 820px)': {fontSize: 40}, '@media(max-width: 540px)' :{fontSize: 32}, fontSize: 50, marginLeft: 4, color: "#533638"}}/></Link>
          </Tooltip>
          <Tooltip title="Projects" placement="bottom-end">
          <Link to="/projects"><HomeRepairServiceOutlinedIcon sx={{'@media(max-width: 1024px)': {fontSize : 43}, '@media(max-width: 820px)': {fontSize: 40}, '@media(max-width: 540px)' :{fontSize: 32}, fontSize: 50, marginLeft: 4, color: "#533638"}}/></Link>
        </Tooltip>
        <Tooltip title="Contacts" placement="bottom-end">
          <Link to="/contacts"><MailOutlinedIcon sx={{'@media(max-width: 1024px)': {fontSize : 43}, '@media(max-width: 820px)': {fontSize: 40}, '@media(max-width: 540px)' :{fontSize: 32}, fontSize: 50, color: "#533638"}}/></Link>
        </Tooltip>
        </Box>
          }
          </Box>
          <Box sx={{display: "none", '@media(max-width: 414px)': {display: "block"} }}>
          <Box sx={{ display: 'flex', flexDirection: 'row-reverse', '@media(max-width: 414px)' : {display: "flex", flexDirection: "row", justifyContent:"space-between", width: "12.5rem", marginTop: "1.563rem"}}}>
          <Tooltip title="Home" placement="bottom-end">
            <Link to="/"><HomeOutlinedIcon sx={{'@media(max-width: 414px)': {fontSize: 30, marginLeft: 0}, '@media(max-width: 375px)': {fontSize: 43}, marginLeft: 4, color: "#533638"}}/></Link>
          </Tooltip>
          <Tooltip title="Projects" placement="bottom-end">
          <Link to="/projects"><HomeRepairServiceOutlinedIcon sx={{'@media(max-width: 414px)': {fontSize: 30, marginLeft: 0}, '@media(max-width: 375px)': {fontSize: 43}, marginLeft: 4, color: "#533638"}}/></Link>
        </Tooltip>
        <Tooltip title="Contacts" placement="bottom-end">
          <Link to="/contacts"><MailOutlinedIcon sx={{'@media(max-width: 414px)': {fontSize: 30, marginLeft: 0}, '@media(max-width: 375px)': {fontSize: 43}, marginLeft: 4, color: "#533638"}}/></Link>
        </Tooltip>
        </Box>
          </Box>
        </Box>
      
      </>
  );
};

export default NavBar;
