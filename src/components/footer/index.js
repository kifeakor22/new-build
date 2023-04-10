import React from 'react'
import { Divider } from '@mui/material'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import {Box} from '@mui/material';
import TwitterIcon from '@mui/icons-material/Twitter';
import {Typography} from '@mui/material';


const Footer = () => {
    return(
        <>
         <Divider sx={{color: 'black'}} className='Divider' textAlign='left'>
            <Typography variant= 'h3' className='navicon' >Follow me</Typography>
        </Divider>
       
        <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', flexWrap: 'wrap', gap: '20px', padding: '20px' }}>
            
        <GitHubIcon sx={{}}  fontSize='large'/>
        <LinkedInIcon  fontSize='large'/>
        <TwitterIcon  fontSize='large'/>
        </Box>
        </>
    )
}

export default Footer 