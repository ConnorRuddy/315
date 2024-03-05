import React from 'react'
import {Link} from 'react-router-dom'
import amazon from '../images/amazon.jpg'
import AboutIntro from '../components/AboutIntro'
import Mgmt from '../components/Mgmt'


export default function About(){
  return(
    <>
    <div className='about-container'>
    <div className="about-background" style={{backgroundImage: `url(${amazon})`, }}>
      {/* <div className='about-overlay'>
      </div> */}
      </div>
      <AboutIntro />
     <Mgmt />
        </div>
       
    </>
  )
}