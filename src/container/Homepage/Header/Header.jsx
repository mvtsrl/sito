import React, {useState, useEffect} from 'react'
import {images} from '../../../constants'
import {motion} from 'framer-motion'
import {AppWrap} from '../../../wrapper'

import { CheckCircleOutlined } from '@ant-design/icons';
import {useTranslation} from 'react-i18next'

import './Header.scss'

const Header = () => {
    const[contactFormOpen, setContactFormOpen] = useState(false)
    const {t}  = useTranslation(['home'])

    const {title , items, buttonTitle} = t('fastQuoteCard', { returnObjects: true })
    
    

    return (
        <div className='app__homepage-header'>



        <div 
        // whileInView={{x:[-100,0]}}
        // transition={{duration: 0.3}}
        className='app__homepage-header-wrapper'>

        <div

        className='app__homepage-fastQuote-card'
        >
        <div className='app__hero-card-content'>
        <h2 >{title}</h2>
        {items.map((item, index)=>(
            <div className='app__header-fastQuote-listItem' key={index}>
            <CheckCircleOutlined />
            <p>{item}</p>
            </div>
        ))}

         <div className='app__hero-btn-wrapper'>
            <a className='app__hero-btn' href="#contact"> 
         
                {buttonTitle}
            </a> 
        </div>
    
        </div>

       
   
        </div>

        </div>
{/* 
        <img
        whileInView={{opacity:[0,1]}}
        transition={{duration: 0.3 , ease:'easeInOut'}}
        alt='hero'
        className='app__homepage-hero-image'
         src={images.header_home} /> */}
        </div>
    )
}

export default AppWrap(Header,'header', 'app__whitebg',  'homepage');
