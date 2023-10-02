import {useState} from 'react'

import "./Modal.css"

import Box from '@mui/material/Box';
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';


const Contacts = () => {

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [user, setUser] = useState({
    name: '',
    email: '',
    message: ''
  });

  // prevent reload of the page
  const submitForm = (e) => {
    e.preventDefault();

    console.log(user);

  }

  const cleanForm = () => {
    setUser({
      name: "", 
      email: "", 
      message: ""
    })
  }

  

  return (
    <>
    <Stack sx={{border:"2px solid #543336", width: "40%", alignItems:"center", borderRadius: "10px", p:"3rem"}}>
      <Typography variant="h3" component="h3" sx={{ justifyContent: "center", marginBottom:"40px" }}>
        Contact Me
      </Typography>
        <TextField label="Name" sx={{ margin: "10px", width: "50%"}} onChange={(e) => {
                   setUser((user) => ({
                    ...user,
                    name: e.target.value,
                  }));
                  }}/>
        <TextField label="Email address" sx={{ margin: "10px", width: "50%" }} onChange={(e) => {
                   setUser((user) => ({
                    ...user,
                    email: e.target.value,
                  }));
                  }}/>
        <TextField
          id="outlined-multiline-static"
          label="Message"
          multiline
          rows={4}
          sx={{ margin: "10px", width: "50%" }}
          onChange={(e) => {
            setUser((user) => ({
             ...user,
             message: e.target.value,
           }));
           }}
        />
      <Button variant="contained" sx={{width: "50%", padding:"15px", backgroundColor: "#543336", ":hover": {backgroundColor: "#67595E"}}} type="submit" onClick={(e) => {submitForm(e); handleOpen()}}><Typography variant="caption" sx={{fontSize:"22px", lineHeight: 1.5}}>SUBMIT</Typography></Button>
    </Stack>
    <Modal className='modal' 
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"> 
        
        <Box className='modal__content' sx={{width: "450px", height:"170px", display:"flex", flexDirection:"column", justifyContent:"space-around", alignItems:"center"}}>
          
          <Typography id="modal-modal-title" variant="h6" component="h2" sx={{textAlign:"center"}}>
            Thank you for your message!
          </Typography>
          <Typography id="modal-modal-description" sx={{display:"flex", flexDirection:"row", alignItems:"center"}}>
            Have a nice day <SentimentSatisfiedAltIcon/>
          </Typography>
        </Box>
      </Modal>
    </>
  );
};

export default Contacts;
