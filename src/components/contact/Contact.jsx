import React from 'react';
import "./contact.css"
import {Mail} from "react-feather";

export default function Contact() {
    return (
        <section id={"contact"}>
            <h2 className={"title-right"}>Contact</h2>
            <div className={"contact_wrapper"}>
                <p className={"contact_text"}>I am always looking for new and better opportunities.<br></br>
                    If you feel like I fit the vibe and have the skills necessary than feel free to message me anytime!</p>
                <div className={"email_button"}>
                    <Mail/>
                    <p>Email</p>
                    <p className={"text-secondary"}>eniscif@googlemail.com</p>
                    <div className={"accent email_button_bttn"}>Send a message</div>
                </div>
            </div>
        </section>
    )
}