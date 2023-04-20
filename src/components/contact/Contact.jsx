import React, {useRef} from 'react';
import "./contact.css"
import {Mail} from "react-feather";
import emailjs from '@emailjs/browser';

export default function Contact() {

    const form = useRef()


    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_vv3fxy7', 'template_00e2hgf', form.current, 'xiTYRADVLNRUfI57z')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });

        document.getElementById("contact_name").value = ""
        document.getElementById("contact_email").value = ""
        document.getElementById("contact_message").value = ""
    };

    return (
        <section id={"contact"}>
            <h2 className={"title-right"}>Contact</h2>
            <div className={"contact_wrapper"}>
                <div className={"contact_left"}>
                    <p className={"contact_text"}>I am always looking for new and better opportunities.<br></br>
                        If you believe that my skills and experience align with your organization's vision and culture,
                        please don't hesitate to reach out to me at any time. I would welcome the chance to discuss
                        potential collaborations and learn more about what you have to offer!</p>
                    <div className={"email_button"}>
                        <Mail/>
                        <p>Email</p>
                        <p className={"text-secondary"}>eniscif@googlemail.com</p>
                        <a href={"mailto:eniscif@googlemail.com"} className={"email_button_btn"} target={"_blank"}>Send a message</a>
                    </div>
                </div>
                <div className={"contact_right"}>
                    <form ref={form} onSubmit={sendEmail}>
                        <input type={"text"} name={"contact_name"} id={"contact_name"} placeholder={"Your Name here"} required={true} className={"contact_input"}/>
                        <input type={"email"} name={"contact_email"} id={"contact_email"} placeholder={"Your Email here"} required={true} className={"contact_input"}/>
                        <textarea name={"contact_message"} id={"contact_message"} rows={7} placeholder={"Your Message here"} required={true} className={"contact_input"}></textarea>
                        <button type={"submit"} className={"contact_btn"}>Send Message</button>
                    </form>
                </div>
            </div>
        </section>
    )
}