import React, {useState} from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Typography } from '@mui/material';
import './style.css'
import {Button} from '@mui/material';






const Contact = () => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [subject, setSubject] = useState('')
    const [message, setMessage] = useState('')

    return (
           <>
        <div className='container'>
            <div className='row'>
                <Typography variant='h3' sx={{textAlign: 'center'}}> Get in touch</Typography>
                <Typography variant='body2' sx={{textAlign: 'center'}}>I will reach out within 24hrs to provide you the information you need. Thank you for getting in touch.</Typography>
            </div>
            <div className='row'>
                <form className='contact-form'>
                    <div className="row">
                        <div className="col-lg-6 col-sm-12">
                            <label for="validationTextarea">Full name</label>
                            <input onChange={(e) => {setName(e.target.value)}} type="text" className="form-control" placeholder="Full name" required/>
                        </div>
                        <div className="col-lg-6 col-sm-12">
                            <label for="validationTextarea">Email</label>
                            <input type="text" className="form-control" placeholder="Email" required/>
                        </div>
                        <div className='col'>
                            <label for="validationTextarea">Subject</label>
                            <input type='text' className='form-control' placeholder='subject' required/>
                        </div>
                        <div class="mb-3">
                            <label for="validationTextarea">Message</label>
                            <textarea class="form-control"  placeholder="Message" required></textarea>
                        </div>
                    </div>
                     <Button variant="contained" size="large" style={{backgroundColor: 'grey'}}>Submit</Button>
                </form>
            </div>
        </div>
        <div>{name}</div>
        </>
    )
}


export default Contact