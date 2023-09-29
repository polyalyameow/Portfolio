
import {projects} from "./ProjectsDb";
import "./Projects.css";

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import Button from '@mui/material/Button';

import GitHub from '@mui/icons-material/GitHub';
import NorthEastIcon from '@mui/icons-material/NorthEast';

import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


const ProjectsContent = () => {
   

    const openInNewTab = (url) => {
        window.open(url, "_blank", "noreferrer");
      };



  return (

    
    <Box sx={{display:"flex", flexDirection:"row", flexWrap: "wrap", justifyContent:"center", width: "700px"}}>
            <Swiper
    effect={'coverflow'}
    grabCursor={true}
    centeredSlides={true}
    loop={true}
    slidesPerView={'auto'}
    coverflowEffect={{
      rotate: 0,
      stretch: 0,
      depth: 100,
      modifier: 2.5,
    }}
    pagination={{ el: '.swiper-pagination', clickable: true }}
    navigation={{
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
      clickable: true,
    }}
    modules={[EffectCoverflow, Pagination, Navigation]}
    className="swiper_container"
  >                
        {projects.map((project, id) => (

            <SwiperSlide >
             <Card key={id} sx={{ width: 400, height: 550, display:"flex", flexDirection: "column", padding: "10px", borderRadius:"10px", justifyContent:"space-between", backgroundColor: "pink", border: "2px solid #543336"}}>
                <CardMedia sx={{ height: 300, objectFit:"contain", borderRadius:"10px", border: "2px solid #543336"}} image={project.image}></CardMedia>
                <CardContent sx={{display:"flex", flexDirection:"column",justifyContent:"space-between", alignItems:"center", maxHeight: "200px", height:"100%"}}>
                    <Typography variant="h6" component="h6">{project.name}</Typography>
                    <Typography variant="subtitle1" sx={{textAlign:"center"}}>{project.description}</Typography>
                    
                    <Box sx={{display:"flex", flexDirection:"row", justifyContent:"space-between"}}>
                        
                    { project.stack.map((st, id) => (
                        <Tooltip key={id} title={st.name} placement="bottom">
                        <Avatar key={id} variant="square" src={st.logo} sx={{width:"30px", height:"30px", margin: "10px"}}></Avatar>
                        </Tooltip>
                    ))
                    }
                    </Box>
                    <Box sx={{display:"flex", flexDirection:"row", justifyContent:"space-between", width: "70%", paddingTop:"10px"}}>
                        
                        <Button variant="contained" disabled={project.github == "disabled"} sx={{backgroundColor: "#543336", ":hover": {backgroundColor: "#67595E"}}} onClick={() => {openInNewTab(project.github)}}><GitHub/><Typography variant="subtitle2" sx={{paddingLeft:"5px"}}>GitHub</Typography></Button>
                        <Button variant="contained" disabled={project.live == "disabled"} sx={{backgroundColor: "#543336", ":hover": {backgroundColor: "#67595E"}}} onClick={() => openInNewTab(project.live)}><NorthEastIcon /><Typography variant="subtitle2" sx={{paddingLeft:"2px"}}>Live</Typography></Button>
                    </Box>
                    
                </CardContent>
            </Card>
            </SwiperSlide>
            
        ))}
      
      </Swiper> 
    </Box>
   
    
  )
}

export default ProjectsContent