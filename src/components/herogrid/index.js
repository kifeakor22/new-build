import React, {useEffect} from 'react';

import Box from '@mui/material/Box';

import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';

import './style.css'
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import 'aos/dist/aos.css'; // animation
import AOS from 'aos';


  


const Herogrid = () => {
// animation initialize 
   useEffect(()=>{
    AOS.init({
      duration: 2000
    })
   },[])


  return (
    <>
    <Box sx={{ display: 'flex', justifyContent: 'center', padding: '20px' }}>
      <Grid container spacing={1} sx={{ maxWidth: '10000px', width: '100%', position: 'relative' }}>
        <Grid item xs={12} sm={4} md={4}>
          <Box data-aos="fade-right"  sx={{ display: 'flex', justifyContent: 'center' }}>
            <img
              className="profilePic"
              src={require("./images/img.png")}
              width="200"
              height="auto"
              alt="profile"
            />
          </Box>
        </Grid>
        <Grid item xs={12} sm={8} md={8}>
          <Box data-aos="fade-left"  sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', textAlign: 'left' }}>
            <Typography variant="h3">
              Hello my name is KC
            </Typography>
            <Typography variant="h4">
              A UX/UI Frontend developer.
            </Typography>
            <Typography variant="h5">
              With great focus on accessibility and mobile-first responsive designs. Web development allows me to combine my creative and technical skills in a way that is both challenging and rewarding.
            </Typography>
          </Box>
        </Grid>
      </Grid>
      
    </Box>
    <div>
        <Divider className='Divider' textAlign="right">
          <Link className='link' to="contact">
            <Button variant="contained" size="large" style={{backgroundColor: 'grey'}}>Contact Me</Button>
            </Link>
        </Divider>

    </div>
    </>
    
  );
};

export default Herogrid;