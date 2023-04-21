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
import { Height } from '@mui/icons-material';


  


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
      <Grid container spacing={1} sx={{ maxWidth: '10000px', width: '100%', position: 'relative'}}>
        <Grid item xs={12} sm={12} md={12}>
          <Box data-aos="fade-left"  sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', textAlign: 'center' }}>
            <Typography variant="h4">
              
            </Typography>
            <Typography variant="h4">
              A UX/UI Frontend<span className='navicon'>react developer.</span>
            </Typography>
            <Typography variant="h5">
              With great focus on accessibility and mobile-first responsive designs. Web development allows me to combine my creative and technical skills in a way that is both challenging and rewarding.
            </Typography>
          </Box>
        </Grid>
      </Grid>
      
    </Box>
    <div>
        <Divider sx={{color: 'black'}} className='Divider' textAlign="right">
          <Link className='link' to="contact">
            <Button id='cta' variant="contained" size="large" style={{backgroundColor: 'black'}}>Contact Me</Button>
            </Link>
        </Divider>

    </div>
    </>
    
  );
};

export default Herogrid;