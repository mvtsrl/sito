import React, {useEffect} from 'react'
import { CheckOutlined  } from '@ant-design/icons';

import './AboutUs.scss'
import images from '../../../constants/images.js'
import {PagesHeaderImage} from '../../../components/'

import {useTranslation} from 'react-i18next'

const AboutUs = () => {
    const {t}  = useTranslation(['about'])

    const {about_title,
    section_one_title,
    section_one_content_paragraph_one,
    sections_one_content_paragraph_two,
    section_two_title,
    section_two_paragraph_one,
    section_two_paragraph_two,
    section_two_processes,
    section_three_title,
    section_three_paragraph_one,
    section_three_paragraph_two,
    section_three_list,
    section_four_title,
    section_four_paragraph_one,
    section_four_paragraph_two,
    section_four_list,
    section_five_title,
    section_five_paragraph_one} = t('about_page', { returnObjects: true })


    useEffect(() => {
      let subscribed = true;

      if(subscribed) window.scrollTo(0, 0);
   
    return () => {
      subscribed=false;
    }
    }, [])
    return (
        <div className='app__about'>
        <PagesHeaderImage/>

        <div className='app__about-content-wrapper'>

        <div className="app__about-page-title-wrapper">
          <h1>
            {about_title}
          </h1>
        </div>
      
        <div className='app__about-page-divider'/>

        <div className='app__about-page-section'>
        <h2>
        {section_one_title}
        </h2>

        <p>
        {section_one_content_paragraph_one}
        </p>

        <p>
        {sections_one_content_paragraph_two}
        </p>
        
        </div>

        <div className='app__about-page-section'>
        <h2>
        {section_two_title}
        </h2>

        <p>
        {section_two_paragraph_one}
        </p>

        <div className="app__about-p-title">
        {section_two_paragraph_two}
        </div>
        {section_two_processes?.map((item, index)=>(
            <div className='app__about-p-list-item' key={index}>
            <CheckOutlined />
            {item}
            </div>
        ))}
        
        </div>


        <div className='app__about-page-section'>
        <h2>
        {section_three_title}
        </h2>

        <p>
        {section_three_paragraph_one}
        </p>

        <div className="app__about-p-title">
        {section_three_paragraph_two}
        </div>
        {section_three_list?.map((item, index)=>(
            <div className='app__about-p-list-item' key={index}>
            <CheckOutlined />
            {item}
            </div>
        ))}
        
        </div>


        <div className='app__about-page-section'>
        <h2>
        {section_four_title}
        </h2>

        <p>
        {section_four_paragraph_one}
        </p>

        <div className="app__about-p-title">
        {section_four_paragraph_two}
        </div>
        {section_four_list?.map((item, index)=>(
            <div className='app__about-p-list-item' key={index}>
            <CheckOutlined />
            {item}
            </div>
        ))}
        
        </div>

        <div className='app__about-page-section'>
        <h2>
        {section_five_title}
        </h2>

        <p>
        {section_five_paragraph_one}
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

export default AboutUs
