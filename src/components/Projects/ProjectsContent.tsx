import { projects } from "./ProjectsDb";
import "./Projects.css";

import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import Button from "@mui/material/Button";

import GitHub from "@mui/icons-material/GitHub";
import NorthEastIcon from "@mui/icons-material/NorthEast";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";


const ProjectsContent = () => {
 

  const openInNewTab = (url) => {
    window.open(url, "_blank", "noreferrer");
  };

  return (
    <>
    <Box
      sx={{
        "@media(max-width: 1280px)": { width: "25rem" },
        "@media(max-width: 375px)": { marginTop: "2rem" },
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "center",
        width: "43.75rem",
      }}
    >
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={{ el: ".swiper-pagination", clickable: true }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
          // clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="swiper_container"
      >
        {projects.map((project, id) => (
          <SwiperSlide key={id}>
            <Card
              key={id}
              sx={{
                "@media(max-width: 1280px)": {
                  width: "19rem",
                  height: "33rem",
                  justifyContent: "flex-start"
                },
                "@media(max-width: 1024px)": {
                  width: "19rem",
                  height: "34rem",
                  justifyContent: "flex-start"
                },
                "@media(max-width: 912px)": {
                  height: "36rem",
                  justifyContent: "flex-start", 
                },
                "@media(max-width: 820px)": {
                    height: "33rem",
                    justifyContent: "center",  
                  },
                "@media(max-width: 540px)": {
                  height: "36.25rem",
                  justifyContent: "flex-start",
                },
                "@media(max-width: 414px)": {
                  height: "34rem",
                },
                "@media(max-width: 280px)": { height:"30rem" },
                width: 400,
                height: 550,
                display: "flex",
                flexDirection: "column",
                padding: "0.625rem",
                borderRadius: "0.625rem",
                justifyContent: "flex-start",
                backgroundColor: "pink",
                border: "0.125rem solid #543336",
              }}
            >
              <CardMedia
                sx={{
                  "@media(max-width: 1280px)":{height:"15rem"},
                  "@media(max-width: 820px)":{height: "18rem"},
                  "@media(max-width: 280px)": { height:"10rem" },
                  height: 300,
                  objectFit: "contain",
                  borderRadius: "0.625rem",
                  border: "0.125rem solid #543336",
                }}
                image={project.image}
              ></CardMedia>
              <CardContent
                sx={{
                  "@media(max-width: 414px)": { justifyContent: "flex-start" },
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  alignItems: "center",
                  maxHeight: "12.5rem",
                  height: "100%",
                }}
              >
                <Typography
                  sx={{
                    "@media(max-width: 820px)": {
                      fontSize: 20
                    },
                    "@media(max-width: 540px)": {
                      width: "100%",
                      textAlign: "center",
                      lineHeight: 1.3,
                      padding: "6px",
                    },
                    "@media(max-width: 280px)": {lineHeight: 0.8, paddingBottom:"1.2rem", width: "15rem", fontSize: 26 },
                    textAlign:"center"
                  }}
                  variant="h6"
                  component="h6"
                >
                  {project.name}
                </Typography>
                <Typography variant="subtitle1" sx={{"@media(max-width: 280px)": {width: "15.2rem", textAlign: "center", paddingBottom:"1rem"}, textAlign: "center" }}>
                  {project.description}
                </Typography>

                <Box
                  sx={{
                    "@media(max-width: 414px)": {
                      justifyContent: "flex-start",
                    },
                    "@media(max-width: 280px)": { flexWrap: "wrap", display:"flex", justifyContent:"center" },
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  {project.stack.map((st, id) => (
                    <Tooltip key={id} title={st.name} placement="bottom">
                      <Avatar
                        key={id}
                        variant="square"
                        src={st.logo}
                        sx={{
                          width: "1.875rem",
                          height: "1.875rem",
                          margin: "0.625rem",
                        }}
                      ></Avatar>
                    </Tooltip>
                  ))}
                </Box>
                <Box
                  sx={{
                    "@media(max-width: 1280px)": {
                      width: "80%"
                    },
                    "@media(max-width: 540px)": {
                      width: "100%",
                      marginBottom: "0.625rem",
                      justifyContent: "space-around",
                    },
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    width: "70%",
                    paddingTop: "0.625rem",
                  }}
                >
                  <Button
                    variant="contained"
                    disabled={project.github == "disabled"}
                    sx={{
                      backgroundColor: "#543336",
                      ":hover": { backgroundColor: "#67595E" },
                    }}
                    onClick={() => {
                      openInNewTab(project.github);
                    }}
                  >
                    <GitHub />
                    <Typography
                      variant="subtitle2"
                      sx={{ paddingLeft: "0.313rem" }}
                    >
                      GitHub
                    </Typography>
                  </Button>
                  <Button
                    variant="contained"
                    disabled={project.live == "disabled"}
                    sx={{
                      backgroundColor: "#543336",
                      ":hover": { backgroundColor: "#67595E" },
                    }}
                    onClick={() => openInNewTab(project.live)}
                  >
                    <NorthEastIcon />
                    <Typography
                      variant="subtitle2"
                      sx={{ paddingLeft: "0.125rem" }}
                    >
                      Live
                    </Typography>
                  </Button>
                </Box>
              </CardContent>
            </Card>
          </SwiperSlide>
        ))}
        <div className="slider-controler">
          <div className="swiper-button-prev slider-arrow">
            <div className="arrow-back-outline"></div>
          </div>
          <div className="swiper-button-next slider-arrow">
            <div className="arrow-forward-outline"></div>
          </div>
        </div>
      </Swiper>
    </Box>
    </>
  );
};

export default ProjectsContent;
