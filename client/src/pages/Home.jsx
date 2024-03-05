import React from 'react'
import drivers from '../images/drivers.jpeg'
import van from '../images/van.jpeg'
import {Link} from 'react-router-dom'
import Employee from '../components/Employee'

export default function Home(){
  return(
    <>
    <div className="home-container">
      <div className="home-img-container">
        <img src={van} className="home-pic" alt="drivers image"/>
        <div className='overlay'></div>
        <div className='test1'></div>
        <h1 className='home-title'>315 Logistics</h1>
        <h3 className="img-statement">Delivering smiles throughout our communities<Link to="/career"><i className="home-start"> - Start your career now!</i></Link></h3>
        <div className='test2'></div>
      </div>
      <div className='home-statement'>
        <h4>As an Amazon Delivery Associate, you are an invaluable member of your community delivering smiles to
            every Amazon customer. In this fast-paced environment, you will have the opportunity to interact with
            community members as you deliver packages while building your career.</h4>
        </div>
      </div>
     <Employee />
      <div className="line"></div>
    </>
  )
}