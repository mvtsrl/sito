import React from 'react'
import {motion} from 'framer-motion'
import {AppWrap, MotionWrap} from '../../../wrapper'
import {Link} from 'react-router-dom'

import {useTranslation} from 'react-i18next'
import images from '../../../constants/images.js'


import './Services.scss'



const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.01,
      staggerChildren: 0.07
    }
  }
};

const children = {
  hidden: { y: 5, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1
  }
};

const Services = () => {
    const {t}  = useTranslation(['home'])

    const {titleServices, subtitleServices, items} = t('services', { returnObjects: true })
   
    return (
        <div className='app__homepage-services'>
            <div
            // whileInView={{ opacity: [0,1]}}
            // transition={{duration: 0.2}}
            className='app__homepage-services-title'>
            
            <h1>{titleServices}</h1>
            <p>{subtitleServices}</p>

            </div>

            <div
            // variants={container}
            // initial="hidden"
            // animate="visible"
            // whileInView={{y: [50, 0],opacity: [0 , 1]}}
            className='app__homepage-services-card-wrapper'
            >

            {items.map((item, index)=>(
            <Link
            // whileInView={{opacity: [0 , 1]}}
            // transition={{duration: 0.3}}
            // viewport={{ once: true }}
            key={index}
            className='app__homepage-services-card'
            to={item.link}
            >

            <div style={{display:'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center'}}>
            <img src={images[item.image]} alt={`${item.image}`}/>
            <h2>{item.title}</h2>
            </div>

            <p>{item?.description}</p>
            </Link>

            ))
            
            
            }
          
        
          

            </div>


        </div>
    )
}

export default AppWrap(Services, 'services','app__whitebg',  'homepage');
