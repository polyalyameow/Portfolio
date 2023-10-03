import { useState } from "react";
import { useForm } from "react-hook-form";

import "./Modal.css";

import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAlt";

const Contacts = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [submitted, setSubmitted] = useState(false)

  const [user, setUser] = useState({
    name: "",
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
      name: "",
      email: "",
      message: "",
    }));
  };

  const onSubmit = (data) => {
    
    console.log(user);
    setSubmitted(true)
   
  };

  return (
    <>
      <form  onSubmit={handleSubmit(onSubmit)}>
        <Stack
          sx={{
            border: "2px solid #543336",
            width: "500px",
            alignItems: "center",
            justifyContent:"center",
            borderRadius: "10px",
            p: "1rem",
          }}
        >
          <Typography
            variant="h3"
            component="h3"
            sx={{ justifyContent: "center", marginBottom: "40px" }}
          >
            Contact Me
          </Typography>
          <Box sx={{  margin: "10px auto 10px auto", width: "400px" }}>
            <TextField
            sx={{width: "100%"}}
              autoComplete="off"
              {...register("name", { required: true, pattern: /^[A-Za-z]+$/i })}
              placeholder="Name"
              value={user.name}
              onChange={(e) => {
                setUser(() => ({
                  ...user,
                  name: e.target.value,
                }));
              }}
              />
            {errors?.name?.type === "required" && (
              <Typography>This field is required</Typography>
            )}
            {errors?.name?.type === "pattern" && (
              <Typography>Alphabetical characters only</Typography>
            )}
          </Box>
          <Box sx={{ margin: "10px auto 10px auto", width: "400px" }}>
            <TextField
            sx={{width: "100%"}}
              autoComplete="new-off"
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
          <TextField autoComplete="on" style={{ display: 'none' }}
          id="fake-hidden-input-to-stop-google-address-lookup"></TextField>
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
