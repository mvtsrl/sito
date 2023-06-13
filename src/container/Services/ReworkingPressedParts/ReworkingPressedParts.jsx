import React,{useEffect} from 'react'


import './ReworkingPressedParts.scss'
import {PagesHeaderImage} from '../../../components'

import {useTranslation} from 'react-i18next'
import {GeneralInfo, Materials, ContactForm} from '../../../components/'

const ReworkingPressedParts = () => {
    const {t}  = useTranslation(['services'])

    const {reworking_pressed_parts} = t('services_page', { returnObjects: true })
    const {title, description, image} = reworking_pressed_parts;

    useEffect(() => {
      let subscribed = true;

      if(subscribed) window.scrollTo(0, 0);
   
    return () => {
      subscribed=false;
    }
    }, [])
    return (
        <div className="app__reworking">
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

export default ReworkingPressedParts
