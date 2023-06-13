import React from 'react'

import {AppWrap} from '../../../wrapper'
import {ContactForm} from '../../../components'

// import {useTranslation} from 'react-i18next'

import './Contact.scss'

const Contact = () => {

    return (
      <div className='app__homepage-contact'>
        <ContactForm/>
      </div>


    )
}

export default AppWrap(Contact, 'contact', 'app__lightGray',  'homepage')
