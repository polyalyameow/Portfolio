import { useState, useRef } from "react";
import { useForm } from "react-hook-form";
import emailjs from '@emailjs/browser';


import "./Modal.css";

import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAlt";

const Contacts = () => {
  const ref = useRef();
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [submitted, setSubmitted] = useState(false)

  const [user, setUser] = useState({
    firstName: "",
    surname: "",
    email: "",
    message: "",
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();


  const cleanForm = () => {
    setUser(() => ({
      ...user,
      firstName: "",
      surname: "",
      email: "",
      message: "",
    }));
  };

  const onSubmit = (e) => {
    

    emailjs.sendForm('service_pf1d4wq', 'template_4ep6zod', ref.current , 'YPBHBlu0p3b6jhHtz')
    .then((result) => {
      console.log(result.text);
  }, (error) => {
      console.log(error.text);
  });
 

    console.log(user);
    setSubmitted(true)
   
  }

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} ref={ref}>
        <Stack
          sx={{ '@media(max-width: 1024px)' :{width: "31.25rem", marginTop: "5rem"}, '@media(max-width: 912px)' :{marginTop: 0}, 
          '@media(max-width: 540px)' :{width: "18.75rem", marginTop:"2rem"},
          '@media(max-width: 375px)' :{width: "17.5rem",marginTop: "2.5rem"},
          '@media(max-width: 280px)' :{width: "12.5rem", border: "none"},
            border: "0.125rem solid #543336",
            width: "56.25rem",
            alignItems: "center",
            justifyContent:"center",
            borderRadius: "0.625rem",
            p: "2rem",
          }}
        >
          <Typography
            variant="h3"
            component="h3"
            sx={{'@media(max-width: 540px)': {fontSize: 35}, '@media(max-width: 280px)' :{fontSize: 25}, justifyContent: "center", marginBottom: "2.5rem" }}
          >
            Contact Me
          </Typography>
          <Box sx={{ '@media(max-width: 1024px)' :{display:"flex", justifyContent:"center"}, width: "100%", display: "flex", flexDirection: "row", justifyContent: "space-between", flexWrap: "wrap"}}>
            <Stack>
          <Box sx={{'@media(max-width: 1024px)' :{width: "18.75rem"}, '@media(max-width: 280px)' :{width: "15.625rem"},  margin: "0.625rem auto 0.625rem auto", width: "25rem" }}>
            <TextField autoComplete="off"
            sx={{width: "100%"}}
              {...register("firstName", { required: true, pattern: /^[A-Za-z]+$/i })}
              placeholder="First Name"
              value={user.firstName}
              onChange={(e) => {
                setUser(() => ({
                  ...user,
                  firstName: e.target.value,
                }));
              }}
              />
            {errors?.firstName?.type === "required" && (
              <Typography sx={{'@media(max-width: 540px)':{fontSize: 15}}}>This field is required</Typography>
            )}
            {errors?.firstName?.type === "pattern" && (
              <Typography sx={{'@media(max-width: 540px)':{fontSize: 15}}}>Alphabetical characters only</Typography>
            )}
          </Box>
          <TextField autoComplete="on" style={{ display: 'none' }}
          id="fake-hidden-input-to-stop-google-address-lookup"></TextField>
          <Box sx={{'@media(max-width: 1024px)' :{width: "18.75rem"}, '@media(max-width: 280px)' :{width: "15.625rem"}, margin: "0.625rem auto 0.625rem auto", width: "25rem" }}>
            <TextField
            sx={{width: "100%"}}
            autoComplete="new-off"
              {...register("surname", { required: true, pattern: /^[A-Za-z]+$/i })}
              placeholder="Surname"
              value={user.surname}
              onChange={(e) => {
                setUser(() => ({
                  ...user,
                  surname: e.target.value,
                }));
              }}
              />
            {errors?.surname?.type === "required" && (
              <Typography sx={{'@media(max-width: 540px)':{fontSize: 15}}}>This field is required</Typography>
            )}
            {errors?.surname?.type === "pattern" && (
              <Typography sx={{'@media(max-width: 540px)':{fontSize: 15}}}>Alphabetical characters only</Typography>
            )}
          </Box>
          <Box sx={{'@media(max-width: 1024px)' :{width: "18.75rem"}, '@media(max-width: 280px)' :{width: "15.625rem"},  margin: "0.625rem auto 0.625rem auto", width: "25rem" }}>
            <TextField
            sx={{width: "100%"}}
              autoComplete="off"
              {...register("email", {
                required: true,
                pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
              })}
              placeholder="Email"
              value={user.email}
              onChange={(e) => {
                setUser(() => ({
                  ...user,
                  email: e.target.value,
                }));
              }}
            />
            {errors?.email?.type === "required" && (
              <Typography sx={{'@media(max-width: 540px)':{fontSize: 15}}}>This field is required</Typography>
            )}
            {errors?.email?.type === "pattern" && (
              <Typography sx={{'@media(max-width: 540px)':{fontSize: 15}}}>Invalid email address</Typography>
            )}
          </Box>
          </Stack>
          <Stack sx={{flexWrap: "wrap"}}>
          <Box sx={{'@media(max-width: 1024px)' :{width: "18.75rem"}, '@media(max-width: 280px)' :{width: "15.625rem"},  margin: "0.625rem auto 0.625rem auto", width: "25rem" }}>
            <TextField
            sx={{width: "100%"}}
            multiline
            rows={4}
              autoComplete="off"
              {...register("message", { required: true })}
              placeholder="Message"
              value={user.message}
              onChange={(e) => {
                setUser(() => ({
                  ...user,
                  message: e.target.value,
                }));
              }}
            />
            {errors?.message?.type === "required" && (
              <Typography sx={{'@media(max-width: 540px)':{fontSize: 15}}}>This field is required</Typography>
            )}
          </Box>
          <Button
          onClick={handleOpen}
            variant="contained"
            sx={{'@media(max-width: 1024px)' :{alignSelf: "center"},
            '@media(max-width: 540px)':{padding: "0.625rem"},
              width: "50%",
              padding: "0.938rem",
              backgroundColor: "#543336",
              ":hover": { backgroundColor: "#67595E" },
            }}
            type="submit"
          >
            <Typography
              variant="caption"
              sx={{'@media(max-width: 540px)':{fontSize: 18}, fontSize: "1.375rem", lineHeight: 1.5 }}
            >
              SUBMIT
            </Typography>
          </Button>
          </Stack>
          </Box>
        </Stack>
            
        </form>
        { submitted && 
        <Modal className='modal' 
        open={open}
        onClose={() => {handleClose(), cleanForm(), setSubmitted(false)}}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"> 
        
        <Box className='modal__content' sx={{'@media(max-width: 414px)': {width: "18.75rem"}, '@media(max-width: 360px)': {width: "15.625rem"}, '@media(max-width: 280px)': {width: "12.5rem"}, width: "28.125rem", height:"10.625rem", display:"flex", flexDirection:"column", justifyContent:"space-around", alignItems:"center"}}>
          
          <Typography id="modal-modal-title" variant="h6" component="h2" sx={{'@media(max-width: 414px)':{fontSize: 25}, '@media(max-width: 360px)': {fontSize: 22}, textAlign:"center"}}>
            Thank you for your message!
          </Typography>
          <Typography id="modal-modal-description" sx={{display:"flex", flexDirection:"row", alignItems:"center"}}>
            Have a nice day <SentimentSatisfiedAltIcon/>
          </Typography>
        </Box>
      </Modal>
}
    </>
  );
};

export default Contacts;
