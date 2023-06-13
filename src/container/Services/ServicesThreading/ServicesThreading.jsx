import React,{useEffect} from 'react'


import './ServicesThreading.scss'
import {PagesHeaderImage} from '../../../components'

import {useTranslation} from 'react-i18next'
import {GeneralInfo, Materials, ContactForm} from '../../../components/'


const ServicesThreading = () => {
    const {t}  = useTranslation(['services'])

    const {CNC_Threading} = t('services_page', { returnObjects: true })
    const {title, description, image} = CNC_Threading;

    useEffect(() => {
      let subscribed = true;

      if(subscribed) window.scrollTo(0, 0);
   
    return () => {
      subscribed=false;
    }
    }, [])

    return (
        <div className='app__threading'> 
            <PagesHeaderImage image={image} hasImage={true}/>

             <div className='app__about-content-wrapper'>

        <div className="app__about-page-title-wrapper">
          <h1>
            {title}
          </h1>
        </div>
      
        <div className='app__about-page-divider'/>

        <div className='app__about-page-section'>
          <p>
        {description}
        </p>
       
       

        <GeneralInfo/>
        <Materials/>
        <ContactForm/>

    
        
        
        </div>

    
        
        </div>  
        </div>
    )
}

export default ServicesThreading
