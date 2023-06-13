import React,{useEffect} from 'react'
import Header from './Header/Header'
import Services from './Services/Services'   
import Experience from './Experience/Experience.jsx'
import Flow from './Flow/Flow'
import Contact from './Contact/Contact'


import './Homepage.scss'

const Homepage = () => {

    useEffect(() => {
      let subscribed = true;

      if(subscribed) window.scrollTo(0, 0);
   
    return () => {
      subscribed=false;
    }
    }, []) 
    return (
        <div className='app__wrapper'>
            <Header />
            <Services />
            <Experience />
            <Flow/>
            <Contact />
        </div>
    )
}

export default Homepage
