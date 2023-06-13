import React,{useState, useEffect} from 'react'
import {AppWrap, MotionWrap} from '../../../wrapper'
import {motion} from 'framer-motion'
import { CheckOutlined  } from '@ant-design/icons';

import {useTranslation} from 'react-i18next'
import images from '../../../constants/images.js'


import './Flow.scss'

const Flow = () => {
     const {t}  = useTranslation(['home'])

    const {title, items} = t('flow', { returnObjects: true })

    const itemsEven= items.filter((item, index)=> index % 2 === 0)
    const itemsOdd= items.filter((item, index)=> index % 2 !== 0 )


    const  getWindowDimensions = () => {
        const { innerWidth: width, innerHeight: height } = window;
        return {
          width,
          height
        };
      }

      const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());


      useEffect(() => {
        const handleResize = ()=> {
          setWindowDimensions(getWindowDimensions());
          console.log(getWindowDimensions())
        }
    
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
      }, []);
   
    return (
        <div className='app__flow-wrapper'>
        <div style={{padding: '2rem'}}>
          <h1>
        {title}
        </h1>
        </div>

        <div className='app__flow-container'>

        {windowDimensions.width < 900 ? 
        
        <div className='app__flow-mobile-view-container'>

            <div className='app__flow-mobile-view-dotted'/>

            <div className='app__flow-mobile-list-wrapper'>
                {

                    items?.map((item, index)=>(
                        <div key={index} className='app__flow-mobile-view-list-item'>
                
                        <div className='dotted' />
                        
                        <img src={images[item.image]} alt='flow'/>

                        <div className='app__flow-mobile-view-content-container'>
                                <h3>{item.title}</h3>

                                <div>
                                {item?.subItems?.map((item, index)=>(
                <div className='app__flow-mobile-view-subitems' key={index}>
                <CheckOutlined />
                <p>{item}</p>
                </div>
            ))}
                                </div>
                        </div>
                        </div>
                    ))
                }
           
           
            </div>

            


        </div>
        :
        <>
        <div className="app__flow-container-top">
        {itemsEven?.map((item, index)=>(
            <div className="app__flow-card-top" key={index}>
           

               <div style={{ width: '100%', display: 'flex', flexDirection:'column', justifyContent: 'flex-start', alignItems: 'flex-start'}}>
            {item?.subItems?.map((item, index)=>(
                <div className='app__flow-cars-subitems' style={{}} key={index}>
                <CheckOutlined />
                <p>{item}</p>
                </div>
            ))}
            </div>


            <div className='app__flow-card-wrapper'>
            <img src={images[item.image]} alt='flow'/>
            </div>
            <div style={{height:'1.5rem', borderLeft:'3px dotted var(--lightBlue-color)', position:'absolute', bottom:'-1.5rem'}}/>
             <h3>{item.title}</h3>
            </div>
            ))}
       </div>

        <div className='app__flow-timeline'/>

        <div className="app__flow-container-bottom">
           {itemsOdd?.map((item, index)=>(
            <div className="app__flow-card-bottom" key={index}>

           

            <div style={{ width: '100%', display: 'flex', flexDirection:'column', justifyContent: 'flex-start', alignItems: 'flex-start'}}>
            {item?.subItems?.map((item, index)=>(
                <div className='app__flow-cars-subitems' key={index}>
                <CheckOutlined />
                <p>{item}</p>
                </div>
            ))}
            </div>
            


             <div className='app__flow-card-wrapper'>
            <img src={images[item.image]} alt='flow'/>
            </div>


            <div style={{height:'1.5rem', borderLeft:'3px dotted var(--lightBlue-color)', position:'absolute', top: '-1.5rem'}}/>
             <h3>{item.title}</h3>
            </div>
            ))}
       </div>
       </>
    }
        </div>
       
           


            

            
        </div>
    )
}

export default AppWrap(Flow, 'flow', 'app__whitebg',  'homepage')