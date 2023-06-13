import React from 'react'

import './ContactPopUp.scss'

import {ContactForm} from '../index.js'

const ContactPopUp = ({contactFormOpen, setContactFormOpen}) => {
    const closePopup = ()=>{
        setContactFormOpen(false);
    }
    return (
        <>
        {contactFormOpen ? 
        <div className='app__contact-form-popup-page'>
        <>
        <div className='app__contact-form-backdrop' onClick={closePopup}/>
        <div className='app__contact-form-popup' >
            <ContactForm popup={true} closePopup={closePopup}/>
        </div>
        </>
        </div>
        : null }

        </>

    )
}

export default ContactPopUp
