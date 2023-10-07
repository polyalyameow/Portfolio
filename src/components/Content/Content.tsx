import { Link } from "react-router-dom";

import "./Content.css";
import avatar from "../Images/avatar.png";

import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

const Content = () => {
  return (
    <Box
      sx={{
        "@media(max-width: 912px)": {
          marginTop: "1.875rem",
          paddingTop: "1.875rem",
        },
        "@media(max-width: 375px)": {
          height: "43.75rem",
          marginTop: 0,
          paddingTop: 0,
        },
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "3%",
        height: "80%",
        flexWrap: "wrap",
      }}
    >
      <Box
        sx={{
          "@media(max-width: 1025px)": { width: "50rem" },
          "@media(max-width: 912px)": {
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            paddingTop: 0,
          },
          "@media(max-width: 375px)": { justifyContent: "space-around" },
          "@media(max-width: 280px)": {
            marginTop: "1.875rem",
            paddingTop: "1.875rem",
          },
          display: "flex",
          flexDirection: "row-reverse",
          justifyContent: "center",
          width: "75rem",
          paddingTop: 5,
        }}
      >
        <Avatar
          alt="Polyalya"
          src={avatar}
          sx={{
            "@media(max-width: 1024px)": { width: "15rem", height: "15rem" },
            "@media(max-width: 912px)": {
              width: "20rem",
              height: "20rem",
              marginBottom: 6,
              marginLeft: 0,
              marginTop: "1.875rem",
            },
            "@media(max-width: 768px)": { marginBottom: "0.625rem" },
            "@media(max-width: 540px)": { width: "10rem", height: "10rem" },
            "@media(max-width: 375px)": {
              width: "15rem",
              height: "15rem",
              marginTop: "1.25rem",
            },
            "@media(max-width: 280px)": { width: "12rem", height: "12rem" },
            width: "18.75rem",
            height: "18.75rem",
            border: "0.125rem solid #533638",
            padding: 1,
            marginLeft: 4,
          }}
        ></Avatar>
        <Box
          sx={{
            "@media(max-width: 1500px)": { width: "40rem" },
            "@media(max-width: 912px)": {
              height: "23.75rem",
              alignItems: "center",
              justifyContent: "space-between",
              marginTop: "1.25rem",
            },
            "@media(max-width: 540px)": {
              marginRight: 0,
              width: "60%",
              height: "auto",
            },
            "@media(max-width: 375px)": {},
            display: "flex",
            flexDirection: "column",
            marginRight: 3,
            width: "50rem",
          }}
        >
          <Typography
            sx={{
              "@media(max-width: 1024px)": { fontSize: 25 },
              "@media(max-width: 540px)": { fontSize: 20 },
              "@media(max-width: 375px)": { fontSize: 22 },
            }}
            variant="h2"
            component="h2"
          >
            Hi! I’m Polly
          </Typography>
          <Typography
            sx={{
              "@media(max-width: 1024px)": { fontSize: 35 },
              "@media(max-width: 912px)": { textAlign: "center", fontSize: 40 },
              "@media(max-width: 540px)": { fontSize: 30 },
              "@media(max-width: 414px)": { fontSize: 25 },
              "@media(max-width: 375px)": { fontSize: 28 },
              "@media(max-width: 360px)": { width: "50%" },
              "@media(max-width: 280px)": { width: "50%" },
            }}
            variant="h3"
            component="h3"
            align="right"
            paddingTop={2}
            paddingBottom={3}
          >
            JUNIOR FRONT-END DEVELOPER
          </Typography>
          <Typography
            sx={{
              "@media(max-width: 1024px)": { fontSize: 23 },
              "@media(max-width: 912px)": { textAlign: "center", fontSize: 28 },
              "@media(max-width: 540px)": { fontSize: 17 },
              "@media(max-width: 414px)": { width: "80%" },
              "@media(max-width: 360px)": { width: "60%" },
              "@media(max-width: 280px)": { width: "50%" },
            }}
            variant="h4"
            component="h4"
            align="right"
          >
            A stereotypical bookworm and lifelong learner on my way to becoming
            a programming geek
          </Typography>
          <Link style={{ textDecoration: "none" }} to="/projects">
            <Button
              sx={{
                "@media(max-width: 1024px)": { width: "18rem" },
                "@media(max-width: 912px)": {
                  width: "21rem",
                  padding: "0.4rem",
                  alignSelf: "center",
                },
                "@media(max-width: 540px)": {
                  width: "12rem",
                  marginTop: "1rem",
                  padding: 0,
                },
                "@media(max-width: 414px)": {
                  marginTop: "2rem",
                  width: "14rem",
                  paddingBottom: "0.5rem",
                },
                width: "21.875rem",
                padding: "0.188rem",
                backgroundColor: "#533638",
                color: "#FFF",
                ":hover": { backgroundColor: "#67595E" },
                alignSelf: "flex-end",
                marginTop: "2rem",
              }}
            >
              <Typography
                sx={{
                  "@media(max-width: 1024px)": { fontSize: 15 },
                  "@media(max-width: 912px)": { fontSize: 20 },
                  "@media(max-width: 540px)": { fontSize: 12, padding: 0 },
                  color: "white",
                }}
              >
                VIEW MY WORK HERE<span className="blink">_</span>
              </Typography>
            </Button>
          </Link>
        </Box>
      </Box>
    </Box>
  );
};

export default Content;
