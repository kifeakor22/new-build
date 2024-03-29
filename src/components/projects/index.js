import React, {useEffect} from 'react';
import projects from '../../projects.json';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import 'aos/dist/aos.css';
import AOS from 'aos';
import './style.css'





const Projects = () => {

   useEffect(()=>{
    AOS.init({
      duration: 2000
    })
   },[])
  return (
    <>
    
      <Typography variant='h4' sx={{ textAlign: 'center', padding: '10px', color: '#6559cc' }}>Work Portfolio</Typography>
      <Box className='project' sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', flexWrap: 'wrap', gap: '20px', padding: '20px' }}>
        {projects.map((project) => (
          <Card data-aos="fade-up" key={project.id} sx={{ maxWidth: 345, padding: '10px',boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.3)' }}>
            <CardMedia
              component="img"
              alt={project.alt}
              height="140"
              image = {require(`${project.image}`)}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {project.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {project.description}
              </Typography>
            </CardContent>
            <CardActions>
              <Button className='projectBtn' size="small" href={project.deployed} target='_blank'>Visit Site</Button>
                  <Button className='projectBtn' size="small" href={project.repo} target='_blank'>Git Repo <span><GitHubIcon sx={{padding: '5px', color: '#f06548'}} /></span></Button>
            </CardActions>
          </Card>
        ))}
      </Box>
    </>
  );
}
export default Projects;
