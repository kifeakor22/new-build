import React, {useState, useEffect} from 'react'
import { Typography } from '@mui/material';
import './style.css'
import {Button} from '@mui/material'
import emailjs from "emailjs-com"; // handles email
import {Divider} from '@mui/material';
import 'aos/dist/aos.css';
import AOS from 'aos';


// emailjs configuration 
const EMAILJS_SERVICE_ID = "service_2lyhxfb";
const EMAILJS_TEMPLATE_ID = "template_95xjrxn";
const EMAILJS_USER_ID = "jemLsqsOmUA2njnd9"; //public key


const Contact = () => {

    useEffect(()=>{
    AOS.init({
      duration: 2000
    })
   },[])

    const [response, setResponse] = useState('')
   
// a function to send email, e .target is the form
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
                setResponse('Sent, we will be in touch. Thank you',response.status, response.text)
                 e.target.reset(); // reset the form after email is sent
                 setTimeout(() => {
                    setResponse('')
                }, 3000) // set the timeout for 3 seconds

                
            }, (err)=>{console.log('FAILED...', err)}
        )
    }

    return (
           <>
        <div className='container contact'>
            <div data-aos="fade-down"  className='row'>
                <Typography variant='h4' sx={{textAlign: 'center', color: '#6559cc'}}> Get in touch</Typography>
                <Typography variant='body2' sx={{textAlign: 'center'}}>I will reach out within 24hrs to provide you the information you need. Thank you for getting in touch.</Typography>
            </div>
            <div data-aos="fade-up"  className='row'>
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
                    <div id='response'>{response}</div>
                     <Divider className='Divider' textAlign="center">
                    <Button id='submit' variant="contained" size="large" style={{backgroundColor: 'grey'}} type="submit">Submit</Button>
                    </Divider>
                </form>
            </div>
        </div>
    
        </>
    )
}


export default Contact