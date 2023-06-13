import React from 'react'
import {UpOutlined, MailOutlined, PhoneOutlined } from '@ant-design/icons'
import {Link} from 'react-router-dom'

import './Footer.scss'
import {useTranslation} from 'react-i18next'

const Footer = () => {
    const {t}  = useTranslation(['footer'])

    const {about_title, about,quick_links_title,quick_links, copyright, vat_number,
    office_and_plant,
    plant_address,
    telephone,
    fax_title,
    fax,
    email,
    contact,
    registered_office,
    registered_office_address} = t('about_section', { returnObjects: true })
   
      // This function will scroll the window to the top 
    const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // for smoothly scrolling
      });
     };


    return (
        <div className='app__footer'>

        <div className='app__footer-wrapper'>

        <div className='app__footer-return-to-top-arrow'  onClick={scrollToTop}>
        <UpOutlined />
        </div>

        <div className='app__footer-content-wrapper'>
        <div className='app__footer-content-section'>
        <div className='app__footer-about'>
        <h3>
        {about_title}
        </h3>
        <p>
        {about}
        </p>

    
        </div>
        <div className='app__footer-quickLinks'>
        <h3>
        {quick_links_title}
        </h3>
        <div className='app__footer-quickLinks-wrapper'>
        {quick_links.map((item, index)=>(
            <Link to={item.link} key={index}>
            <p>
            {item.title}
            </p>
            </Link>
        ))}
        </div>
        </div>
        </div>

        <div className='app__footer-map-wrapper'>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2814.7422985051608!2d7.589420780390697!3d45.13155764325877!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4788418251c874e5%3A0x501d2fecfaa30fb4!2sTorneria%20Automatica%20Mivit%20S.r.l.!5e0!3m2!1sen!2sro!4v1667304239483!5m2!1sen!2sro" className='app__footer-map' allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" title='map'/>
        <div className='app__footer-map-contents'>

        <div className='app__footer-map-details'>

        <div className='app__footer-address-container'>
        <h3>
        {office_and_plant}
        </h3>

        <p>
        {plant_address}
        </p>
        <h3>
        {registered_office}
        </h3>

        <p>
        {registered_office_address}
        </p>
        </div>


        <div className='app__footer-contact-container'>
        <h3>
        {contact}
        </h3>
        <div className='footer_telephone'>
        <a href={`tel:${telephone}`}>
        <PhoneOutlined />
        <p>
        {telephone}
        </p>
        </a>
        </div>

        <div className='footer_email'>
        <a href={`mailto:${email}`}>
        <MailOutlined />
        <p>
        {email}
        </p>
        </a>
        </div>

        <div className='footer_fax'>
        <h4>
        {fax_title}
        </h4>
        <p>
        {fax}
        </p>
        </div>


        </div>

        </div>
        </div>
        </div>

        


        <div className='app__footer-divider'/>

        </div>

        
        <div className='app__footer-copyright'>
        <p>
        {copyright}
        </p>
        <p>
        {vat_number}
        </p>
        </div>
        </div>
        
        
     

        </div>
    )
}

export default Footer
