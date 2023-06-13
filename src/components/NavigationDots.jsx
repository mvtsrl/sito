import React from 'react'

const NavigationDots = ({active, segments}) => {
    
    return (
        <div className='app__navigation'>
        <div>      
                {segments.map((item, index)=>(

                // eslint-disable-next-line jsx-a11y/anchor-has-content
                <a 
                key={item+index}
                href={`#${item}`} 
                className='app__navigation-dot'
                style={active === item ? {backgroundColor: '#005B7F'}: {}}
                />
            

             
            ))}
        </div>
        </div>
    )
}

export default NavigationDots
