import './style.css'

import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';

const Contact = () => {
    
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_hml62ds', 'contact_from_portfolio', form.current, 'nHjsaK3nnR0VC4TYR')
        .then((result) => {
            console.log(result.text);
            Swal.fire({
                icon: 'success',
                title: 'Message sent!',
                text: 'I will respond as soon as possible.'
            });
        }).catch((error) => {
            console.log(error.text);
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'An unexpected error occured, please try again!'
            });
        });
    };

    return(
        <div>
            <form ref={form} onSubmit={sendEmail}>
                <h5>Get in touch!</h5>
                <input type="text" name="name" placeholder="Your name" required />
                <input type="email" name="email" placeholder="Your e-mail" required />
                <textarea name="message" rows="4" placeholder="Message" required />
                <div className="send-btn-container">
                    <button className="btn send-btn" type="submit">Send</button>
                </div>
                
            </form>
        </div> 
    );
};

export default Contact;