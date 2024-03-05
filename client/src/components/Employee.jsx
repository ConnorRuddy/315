import React from 'react'
import Holmes from '../images/Holmes.jpg'
import Julia from '../images/Julia.jpg'
import AshleyDonna from '../images/AshleyDonna.jpg'
import Javier from '../images/Javier.jpg'

export default function Employee(){
  return (
    <div className='home-employees'>
    <div className='employee-container'>
    <img src={Holmes} className="home-employees-pic" id='holmes'/>
    <p>Clark H.<i>(Driver)</i></p>
    </div>
    <div className='employee-container'>
    <img src={Julia} className="home-employees-pic" id='julia'/>
    <p>Julia<i>(Stocker)</i></p>
    </div>
    <div className='employee-container'>
    <img src={Javier} className="home-employees-pic"/>
    <p>Javier<i>(Driver)</i></p>
    </div>
    <div className='employee-container'>
    <img src={AshleyDonna} className="home-employees-pic"/>
    <p>Ashley And Donna<i>(Drivers)</i></p>
    </div>
  </div>
  )
}
