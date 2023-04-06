import React, {useState} from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Typography } from '@mui/material';
import './style.css'
import {Button} from '@mui/material'
import emailjs from "emailjs-com"; 

const EMAILJS_SERVICE_ID = "service_2lyhxfb";
const EMAILJS_TEMPLATE_ID = "template_95xjrxn";
const EMAILJS_USER_ID = "jemLsqsOmUA2njnd9";








const Contact = () => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [subject, setSubject] = useState('')
    const [message, setMessage] = useState('')

    const sendEmail = (e) => {
        e.preventDefault()
        emailjs.sendForm(
            EMAILJS_SERVICE_ID,
            EMAILJS_TEMPLATE_ID,
            e.target,
            EMAILJS_USER_ID
        ).then(
            (response)=> {
                 console.log('Sent, we will be in touch',response.status, response.text)
                setName('Sent, we will be in touch',response.status, response.text)

                
            }, (err)=>{console.log('FAILED...', err)}
        )
    }

    return (
           <>
        <div className='container'>
            <div className='row'>
                <Typography variant='h3' sx={{textAlign: 'center'}}> Get in touch</Typography>
                <Typography variant='body2' sx={{textAlign: 'center'}}>I will reach out within 24hrs to provide you the information you need. Thank you for getting in touch.</Typography>
            </div>
            <div className='row'>
             <form className='contact-form' id='contactForm' onSubmit={(e) => sendEmail(e)}>
  <div className="row">
    <div className="col-lg-6 col-sm-12">
      <label htmlFor="validationTextarea">Full name</label>
      <input  type="text" className="form-control" placeholder="Full name" required id='name' name='name'/>
    </div>
    <div className="col-lg-6 col-sm-12">
      <label htmlFor="validationTextarea">Email</label>
      <input type="email" id='email' name='email' className="form-control" placeholder="Email" required/>
    </div>
    <div className='col'>
      <label htmlFor="validationTextarea">Subject</label>
      <input type='text' id='subject' name='subject' className='form-control' placeholder='subject' required/>
    </div>
    <div className="mb-3">
      <label htmlFor="validationTextarea">Message</label>
      <textarea className="form-control" id='message' name='message' placeholder="Message" required></textarea>
    </div>
  </div>
  <Button variant="contained" size="large" style={{backgroundColor: 'grey'}} type="submit">Submit</Button>
</form>

            </div>
        </div>
        <div id='response'>{name}</div>
        </>
    )
}


export default Contact