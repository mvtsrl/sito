import React from 'react'
import {AppWrap, MotionWrap} from '../../../wrapper/index.js';
import {motion} from 'framer-motion';
import {CheckCircleOutlined } from '@ant-design/icons'

import {images} from '../../../constants'
import {useTranslation} from 'react-i18next'


import './Experience.scss'

const Experience = () => {
    const {t}  = useTranslation(['home'])

    const {title , items} = t('experience', { returnObjects: true })
    
    

    return (
        <div className='app__experience-wrapper'>
        <div style={{display: 'flex'}} className='app__experience-card-wrap'>
        <div
        // whileInView={{ x:[-150,0], opacity:[0,1]}}
        className='app__experience-image'
        >
        <img src={images.experienceIMG} alt='experience'/>
        </div>
        

        <div
        // whileInView={{ x:[150, 0 ], opacity:[0,1]}}
        className='app__experience-content-wrapper'
        >
        <h2>
        {title}
        </h2>
        
        {items.map((item, index)=>(
            <div key={index} className='app__experience-list-item'>
            <CheckCircleOutlined />
            <p>{item}</p>
            </div>
        ))}

        </div>
        </div>
        </div>
    )
}

export default AppWrap(Experience, 'experience','app__lightGray',  'homepage');
