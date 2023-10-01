import {useState} from 'react'

import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Button from '@mui/material/Button';

const Contacts = () => {

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
    setUser(...user, "");
  }

  return (
    <Stack sx={{border:"2px solid orange", width: "60%", alignItems:"center"}}>
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
      <Button variant="contained" sx={{width: "50%", padding:"15px", backgroundColor: "#543336", ":hover": {backgroundColor: "#67595E"}}} type="submit" onClick={(e) => {submitForm(e); cleanForm()}}><Typography variant="caption" sx={{fontSize:"22px", lineHeight: 1.5}}>SUBMIT</Typography></Button>
    </Stack>
  );
};

export default Contacts;
