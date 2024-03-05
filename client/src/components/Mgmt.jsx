import React from 'react'
import Lugo from '../images/Lugo.jpeg'
import Emp1 from '../images/emp1.jpeg'
import Emp2 from '../images/emp2.jpeg'
import Emp3 from '../images/emp3.jpeg'
import Emp4 from '../images/emp4.jpeg'
import Emp5 from '../images/emp5.jpeg'
import Emp6 from '../images/emp6.jpeg'
import dots from '../images/dots.png'

export default function Mgmt(){
  return(
    <div className='team-container'>
            <div className='team-mission'>
              <h3 className='mission-title'>Meet Team MGMT</h3>
              <p>315 Logistics, an Amazon Delivery Service Partner, was established in late 2019 as a veteran owned last
              mile delivery business. The company is based in Chesapeake, Virginia and delivers small parcel packages
              throughout the Hampton Roads area 7 days a week, 361 days a year. On average, the company employs
              over 80 full and part-time drivers and scales up to 120 drivers during the peak season. The company
              also manages a fleet 40-45 delivery vans.</p>
              <button className='team-button'>Join Our Team</button>
              </div>
              <div className='team-pics'>
                <div className='pic-container'>
                  <img src={Lugo} className="mgmt-pic"/>
                  <div className='mgmt-bio'>
                    <ul className='mgmt-list'>
                      <li className='mgmt-list-item' id='mgmt-name'>John Lugo</li>
                      <li className='mgmt-list-item' id='mgmt-position'><i>Owner/President</i></li>
                      <li className='mgmt-list-item' id='mgmt-desc'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.</li>
                      </ul>
                  </div>
                  </div>
                <div className='pic-container'>
                  <img src={Emp1} className="mgmt-pic"/>
                  <div className='mgmt-bio'>

                  </div>
                  </div>
                <div className='pic-container'>
                  <img src={Emp2} className="mgmt-pic"/>
                  <div className='mgmt-bio'>

                  </div>
                  </div>
                <div className='pic-container'>
                  <img src={Emp3} className="mgmt-pic"/>
                  <div className='mgmt-bio'>

                  </div>
                  </div>
                <div className='pic-container'>
                  <img src={Emp4} className="mgmt-pic"/>
                  <div className='mgmt-bio'>

                  </div>
                  </div>
                <div className='pic-container'>
                  <img src={Emp5} className="mgmt-pic"/>
                  <div className='mgmt-bio'>

                  </div>
                  </div>
                <div className='pic-container'>
                  <img src={Emp6} className="mgmt-pic"/>
                  <div className='mgmt-bio'>

                  </div>
                  </div>
                </div>
            </div>
  )
}