import React,{useEffect} from 'react'


import './GetQuotation.scss'
import {ContactForm} from '../../../components/index.js'

const GetQuotation = () => {   
    useEffect(() => {
      let subscribed = true;

      if(subscribed) window.scrollTo(0, 0);
   
    return () => {
      subscribed=false;
    }
    }, []) 
    return (
        <div className='app__get-quotation-page'>
            <ContactForm />
        </div>
    )
}

export default GetQuotation
