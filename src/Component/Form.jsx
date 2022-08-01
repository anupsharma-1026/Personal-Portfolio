import React, { useRef, useState} from 'react';
import "./Form.css"
import emailjs from '@emailjs/browser';

const Form = () => {

    const form = useRef();
    const [done, setdone] = useState();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_0feoob6', 'template_zvlizwu', form.current, 'nyRL-UA8RP9gtpIeM')
            .then((result) => {
                console.log(result.text);
                setdone(true)
            }, (error) => {
                console.log(error.text);
            });
            
    }
    return (
        <div className="form">
            <h1 className='me'>Contact Me</h1>
            <form ref={form} onSubmit={sendEmail}>
                <label>Your Name</label>
                <input type="text" name='user_name'></input>
                <label>Email</label>
                <input type="text" name='user_email'></input>
                <label>Mobile No</label>
                <input type="text" name='user_mobile'></input>
                <label>Message</label>
                {/* <input type="text" name='user_message'></input> */}
                <textarea  className="textArea"rows="6" name='message' placeholder="Type Your Message Here"/>
                <button className="btn submitBtn">Submit</button>
                <span className='done'>{done && "Thanks For Contact Me!"}</span>
            </form>
        </div>
    );
};

export default Form;