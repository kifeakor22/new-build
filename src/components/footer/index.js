import React from 'react'
import { Divider } from '@mui/material'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import {Box} from '@mui/material';
import TwitterIcon from '@mui/icons-material/Twitter';
import {Typography} from '@mui/material';
import './style.css'


const Footer = () => {
    return(
        <>
         <Divider sx={{color: 'black'}} className='Divider' textAlign='left'>
            <Typography variant= 'h5' className='navicon' >Follow me</Typography>
        </Divider>
       
        <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', flexWrap: 'wrap', gap: '20px', padding: '20px' }}>
         <a href="https://github.com/kifeakor22" target="_blank">   
        <GitHubIcon sx={{color: '#6559cc'}}  fontSize='large'/>
        </a>
          <a href="https://https://www.linkedin.com/in/kc-ifeakor-b79a6031/" target="_blank">
            <LinkedInIcon sx={{color: '#6559cc'}} className='icon' fontSize='large'/>
        </a>
         <a href="https://twitter.com/?lang=en" target="_blank">
        <TwitterIcon sx={{color: '#6559cc'}} fontSize='large'/>
        </a>
        </Box>
         <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', flexWrap: 'wrap', gap: '20px', padding: '20px' }}>
        <p>&copy; KC Ifeakor 2022. All Rights Reserved.</p>
        </Box>
        </>
    )
}

export default Footer 