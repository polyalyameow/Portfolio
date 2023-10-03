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
          sx={{
            border: "2px solid #543336",
            width: "900px",
            alignItems: "center",
            justifyContent:"center",
            borderRadius: "10px",
            p: "2rem",
          }}
        >
          <Typography
            variant="h3"
            component="h3"
            sx={{ justifyContent: "center", marginBottom: "40px" }}
          >
            Contact Me
          </Typography>
          <Box sx={{ width: "100%", display: "flex", flexDirection: "row", justifyContent: "space-between", flexWrap: "wrap"}}>
            <Stack>
          <Box sx={{  margin: "10px auto 10px auto", width: "400px" }}>
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
              <Typography>This field is required</Typography>
            )}
            {errors?.firstName?.type === "pattern" && (
              <Typography>Alphabetical characters only</Typography>
            )}
          </Box>
          <TextField autoComplete="on" style={{ display: 'none' }}
          id="fake-hidden-input-to-stop-google-address-lookup"></TextField>
          <Box sx={{  margin: "10px auto 10px auto", width: "400px" }}>
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
              <Typography>This field is required</Typography>
            )}
            {errors?.surname?.type === "pattern" && (
              <Typography>Alphabetical characters only</Typography>
            )}
          </Box>
          <Box sx={{ margin: "10px auto 10px auto", width: "400px" }}>
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
              <Typography>This field is required</Typography>
            )}
            {errors?.email?.type === "pattern" && (
              <Typography>Invalid email address</Typography>
            )}
          </Box>
          {/* <TextField autoComplete="on" style={{ display: 'none' }}
          id="fake-hidden-input-to-stop-google-address-lookup"></TextField> */}
          </Stack>
          <Stack sx={{flexWrap: "wrap"}}>
          <Box sx={{ margin: "10px auto 10px auto", width: "400px" }}>
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
              <Typography>This field is required</Typography>
            )}
          </Box>
          <Button
          onClick={handleOpen}
            variant="contained"
            sx={{
              width: "50%",
              padding: "15px",
              backgroundColor: "#543336",
              ":hover": { backgroundColor: "#67595E" },
            }}
            type="submit"
          >
            <Typography
              variant="caption"
              sx={{ fontSize: "22px", lineHeight: 1.5 }}
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
        
        <Box className='modal__content' sx={{width: "450px", height:"170px", display:"flex", flexDirection:"column", justifyContent:"space-around", alignItems:"center"}}>
          
          <Typography id="modal-modal-title" variant="h6" component="h2" sx={{textAlign:"center"}}>
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
