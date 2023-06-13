import React from 'react'

import {useTranslation} from 'react-i18next'
import './MaterialsInfo.scss'
import images from '../../constants/images.js'

const MaterialsInfo = () => {
    const {t}  = useTranslation(['services'])

    const {materials, materials_title, materials_subtitle} = t('services_page', { returnObjects: true })
  
    return (
        <div className='app__materials'>
         <h2>
             {materials_title}
        </h2>

        <p>{materials_subtitle}</p>
        <div className='app__materials-wrapper'>
         
            {materials.map((item, index)=>(
            <div className='app__materials-card' key={index}>
            <div className='app__materials-image-wrapper'>
            <img src={images[item.image]} alt={`material-${item.title}`} />
            </div>
            <div className='app__materials-title-wrapper'>
            <h3>
            {item.title}
            </h3>
            </div>
            </div>
            ))}
        </div>
        </div>
    )
}

export default MaterialsInfo
