import React from 'react'
import {Link} from 'react-router-dom'
import road from '../images/road.jpg'
import { PiMedalMilitaryDuotone } from "react-icons/pi";
import { PiRoadHorizonDuotone } from "react-icons/pi";

export default function About(){
  return(
    <>
    <div className='about-container'>
      <div className='about-founding'>
        <div className="founding-text">
      <PiMedalMilitaryDuotone className="about-icon"/>
          <p><b className="bold-text">315 Logistics</b>, an Amazon Delivery Service Partner, was established in late 2019 as a veteran owned last
              mile delivery business. The company is based in Chesapeake, Virginia and delivers small parcel packages
              throughout the Hampton Roads area 7 days a week, 361 days a year. On average, the company employs
              over 80 full and part-time drivers and scales up to 120 drivers during the peak season. The company
              also manages a fleet 40-45 delivery vans.</p>
             
                <PiRoadHorizonDuotone className="about-icon"/>
            <p>315 Logistics is an <b className="bold-text">equal opportunity employer</b> and always striving to hire the best. We are a “Put
                People First” company that values our employees, and partnerships with Amazon and our surrounding
                communities. 315 Logistics is a performance-based company who continually empowers our staff and
                employees to achieve excellence in the workplace.</p>
            </div>
            <div className="road-img">
              <img src={road} className="road-img" alt="Road"/>
              <div className="overlay"></div>
            </div>
          </div>
        </div>
        <div className="line"></div>
    </>
  )
}