import React, {useEffect} from 'react'


import './Legislation.scss'
import {images} from '../../../constants'
import {PagesHeaderImage} from '../../../components/'


import {useTranslation} from 'react-i18next'


const Legislation = () => {
    const {t}  = useTranslation(['legislation'])

    const {
    legislation_title,
    section_one_title,
    section_one_paragraph_one} = t('legislation_page', { returnObjects: true })


    useEffect(() => {
      let subscribed = true;

      if(subscribed) window.scrollTo(0, 0);
   
    return () => {
      subscribed=false;
    }
    }, [])
    return (
        <div className='app__legislation'>
        <PagesHeaderImage/>

        <div className='app__legislation-content-wrapper'>

        <div className="app__legislation-page-title-wrapper">
          <h1>
            {legislation_title}
          </h1>
        </div>
      
        <div className='app__legislation-page-divider'/>

        <div className='app__legislation-page-section'>
        <h2>
        {section_one_title}
        </h2>

        <p>
        {section_one_paragraph_one}
        </p>

        <div className='app__about-logo-wrapper'>
        <div className='app__about-logo-card'>
        <img src={images.logo_dnv} alt='logo-dnv'/>
        </div>
        <div className='app__about-logo-card'>
        <img src={images.industry_40} alt='logo-industry_40'/>
        </div>
        <div className='app__about-logo-card'>
        <img src={images.logo_accredia} alt='logo-accredia'/>
        </div>
        </div>
        

    
        
        </div>
        </div>


    
        </div>
    )
}

export default Legislation
