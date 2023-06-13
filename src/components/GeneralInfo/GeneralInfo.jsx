import React from 'react'
import { CheckOutlined   } from '@ant-design/icons';

import {useTranslation} from 'react-i18next'
import './GeneralInfo.scss'

const GeneralInfo = () => {
    const {t}  = useTranslation(['services'])

    const {generic} = t('services_page', { returnObjects: true })
    const {generic_tolerances,
    tolerances_title,
    industries_title,
    appliances_title,
    standard,
    industries,
    industries_subtitle,
    appliances } = generic;

    return (
        <div className='app__general-info-content-wrapper'>
        
       
             <div className='app__general-section-wrapper'>
             <h2>
             {tolerances_title}
             </h2>
            <div className='app__general-info-list-wrapper'>
            {generic_tolerances?.map((item, index)=>(
             <div className='app__general-info-tolerance-list-item' key={index}>
             {item}
             </div>
            ))}
            </div>
             
             <p>
             {standard}
             </p>
             
             </div> 


            <div className='app__general-section-wrapper'>
             <h2>
             {industries_title}
             </h2>

             <p>{industries_subtitle}</p>
            <div className='app__general-info-list-wrapper-styled'>
            {industries?.map((item, index)=>(
             <div className='app__general-info-tolerance-list-item-styled' key={index}>
             <div className="app__general-info-list-item-svg-wrapper">
             <CheckOutlined />
             </div>
             <h6>
             {item}
             </h6>
             </div>
            ))}
            </div>
             
             <p>
             {standard}
             </p>
             
             </div> 



            <div className='app__general-section-wrapper'>
             <h2>
             {appliances_title}
             </h2>

             <p>{industries_subtitle}</p>
            <div className='app__general-info-list-wrapper-styled'>
            {appliances?.map((item, index)=>(
             <div className='app__general-info-tolerance-list-item-styled' key={index}>
             <div className="app__general-info-list-item-svg-wrapper">
             <CheckOutlined />
             </div>
             <h6>
             {item}
             </h6>
             </div>
            ))}
            </div>
             
             
             </div> 

        </div>
    )
}

export default GeneralInfo
