

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";

import {skills} from "./SkillData.tsx";

const Skills = () => {
  const onButtonClick = () => {
    fetch("CV_BassLarsson_Polina.pdf").then((response) => {
      response.blob().then((blob) => {
        const fileURL = window.URL.createObjectURL(blob);
        const alink = document.createElement("a");
        alink.href = fileURL;
        alink.download = "CV_BassLarsson_Polina.pdf";
        alink.click();
      });
    });
  };




  return (
    <Box
      sx={{
        "@media(max-width: 1280px)": { width: "90%", padding: "1.25rem" },
        width: "35%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0.625rem",
      }}
    >
      <Typography
        sx={{ "@media(max-width: 1280px)": { mt: 4, mb: 4 }, mb: 2 }}
        variant="h3"
        component="h3"
      >
        Skills
      </Typography>
      <Box
        sx={{
          "@media(max-width: 1280px)": {
            display: "flex",
            flexDirection: "row",
            mb: 4,
          },
          "@media(max-width: 540px)": { mb: 0 },
          flexWrap: "wrap",
        }}
      >
        {skills.map((skill, id) => (
          <Box
            key={id}
            sx={{
              "@media(max-width: 1280px)": {
                display: "flex",
                justifyContent: "space-around",
              },
              "@media(max-width: 540px)": {
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              },
            }}
          >
            <Box
              sx={{
                "@media(max-width: 1280px)": {
                  width: "20%",
                  margin: 0,
                  padding: 0,
                },
                "@media(max-width: 540px)": {
                  width: "auto",
                  marginBottom: "1.563rem",
                },
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                flexWrap: "wrap",
                marginBottom: "1.25rem",
                paddingBottom: "0.625rem",
              }}
            >
              {skill.stack1.map((sk, one) => (
                <Box
                  key={one}
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    margin: "0.063rem",
                    padding: "0.063rem",
                  }}
                >
                  <Avatar
                    sx={{ paddingRight: "0.125rem" }}
                    src={sk.logo}
                  ></Avatar>
                  <Typography variant="subtitle1">{sk.name}</Typography>
                </Box>
              ))}
            </Box>
            <Box
              sx={{
                "@media(max-width: 1280px)": {
                  width: "30%",
                  margin: 0,
                  padding: 0,
                  justifyContent: "center",
                },
                "@media(max-width: 540px)": {
                  width: "auto",
                  marginBottom: "1.563rem",
                },
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                flexWrap: "wrap",
                marginBottom: "1.25rem",
                paddingBottom: "0.625rem",
              }}
            >
              {skill.stack2.map((sk, two) => (
                <Box
                  key={two}
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "0.063rem",
                    padding: "0.063rem",
                  }}
                >
                  <Avatar
                    sx={{ paddingRight: "0.125rem" }}
                    src={sk.logo}
                  ></Avatar>
                  <Typography
                    variant="subtitle1"
                  >
                    {sk.name}
                  </Typography>
                </Box>
              ))}
            </Box>
            <Box
              sx={{
                "@media(max-width: 1280px)": {
                  width: "20%",
                  margin: 0,
                  padding: 0,
                },
                "@media(max-width: 540px)": {
                  width: "auto",
                  marginBottom: "1.563rem",
                },
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                flexWrap: "wrap",
                marginBottom: "1.25rem",
                pb: 4,
              }}
            >
              {skill.stack3.map((sk, three) => (
                <Box
                  key={three}
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "0.188rem",
                    padding: "0.313rem",
                  }}
                >
                  <Avatar
                    sx={{ paddingRight: "0.125rem" }}
                    src={sk.logo}
                  ></Avatar>
                  <Typography variant="subtitle1">{sk.name}</Typography>
                </Box>
              ))}
            </Box>
            <Box
              sx={{
                "@media(max-width: 1280px)": { display: "none" },
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                width: "auto",
                flexWrap: "wrap",
                marginTop: "0.625rem",
              }}
            >
              {skill.learningSkills.map((sk, four) => (
                <Box
                  key={four}
                  sx={{
                    "@media(max-width: 1280px)": {
                      flexDirection: "column",
                      justifyContent: "flex-end",
                    },
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-around",
                    alignItems: "center",
                  }}
                >
                  <Typography variant="body1">Learning now: </Typography>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <Avatar
                      sx={{ paddingRight: "0.125rem" }}
                      src={sk.logo}
                    ></Avatar>
                    <Typography variant="subtitle1">{sk.name}</Typography>
                  </Box>
                </Box>
              ))}
            </Box>
          </Box>
        ))}
      </Box>
      <Button
        variant="contained"
        sx={{
          "@media(max-width: 1280px)": { mb: 3 },
          "@media(max-width: 540px)": { mb: 0 },
          "@media(max-width: 414px)": { width: "70%" },
          width: "50%",
          height: "10%",
          marginTop: "1.563rem",
          backgroundColor: "#543336",
          ":hover": { backgroundColor: "#67595E" },
        }}
        onClick={onButtonClick}
      >
          <Typography variant="caption">DOWNLOAD MY CV</Typography>
      </Button>
    </Box>
  );
};

export default Skills;
