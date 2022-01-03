import React from 'react'
import './mailer.css'
//import emailjs from "emailjs-com"
import emailjs from '@emailjs/browser';

const Mailer = () => {

    const sendEmail= (e)=>{
        e.preventDefault();
        emailjs.sendForm('service_o3kg5dk',
        'template_pjlu61n',
         e.target,
         'user_ElW5qdvgAg3x8lpk8XGVx')
         .then(res => {
             console.log(res);
         }).catch(err => console.log(err));
        
        window.location.reload ();
    }

    return (
        <div className='form-container' id='contact'>
            
            <div className='form-content-left'>
                <img className='form-img' src='images/mail.svg' alt='Fenix' />
                
            </div>
            
            <div className='form-content-right'>
                <form className='form' onSubmit={sendEmail}>
                    <h1>Contact Form</h1>
                    <div className='form-inputs'>
                        <label className='form-label'>Name</label>
                        <input className='form-input' type="text" placeholder='Enter your name' name="name"/>

                        <label className='form-label'>Email</label>
                        <input className='form-input' type="email" placeholder='Enter your email' name="user_email"/>

                        <label className='form-label' >Need for?</label>
                        <select className='form-input' id="job" name="job">
                            <option >Select Job</option>
                            <option value="shingle">Shingle</option>
                            <option value="tileroof">Tile Rooof</option>
                            <option value="tilefloor">Tile Floor</option>
                        </select>

                        <label className='form-label'>Message</label>
                        <textarea className='form-input' name='message' placeholder='Enter your Message' rows='5' />

                        <button className='form-input-btn' type='submit' value='Send' >Send</button>
                    </div>
                </form>
            </div>    
        </div>
    )
}

export default Mailer
