import React from 'react'
import drivers from '../images/drivers.jpeg'
import {Link} from 'react-router-dom'

export default function Home(){
  return(
    <>
    <div className="home-container">
      <div className="home-img-container">
        <img src={drivers} className="home-pic" alt="drivers image"/>
        <h3 className="img-statement">Delivering smiles throughout our communities – <Link to="/career"><i className="home-start">Start your career now!</i></Link></h3>
      </div>
      <div className='home-statement'>
        <h4>As an Amazon Delivery Associate, you are an invaluable member of your community delivering smiles to
            every Amazon customer. In this fast-paced environment, you will have the opportunity to interact with
            community members as you deliver packages while building your career.</h4>
        </div>
      </div>
      <div className="line"></div>
    </>
  )
}