import React from 'react'
import amazon from '../images/amazon.jpg'
import {Link} from 'react-router-dom'
import packages from '../images/packages.jpg'



export default function Career(){
  return(
    <>
    <div className="career-container">
      <div className="career-main" >
          <p className="career-statement" >
            315 Logistics, is looking for reliable, independent, flexible, hard
            workers who pay attention to details, can quickly problem solve a wide range of situations, and win in a
            fast-paced environment! <i className="home-start">Apply Now!</i></p>
        <div className='career-pic'>
          <img src={packages} className='packages' />
          </div>
        {/* <div className="main-text">
          <h4>Delivery Stations:</h4>
          <ul>
         <div className="station-list"><li><FaMapMarkerAlt className="location-marker" />DOR1 Chesapeake, VA - 1920 Campostella Rd, Chesapeake, VA 23324;</li>
          <li><FaMapMarkerAlt className="location-marker" />DOR2 – Norfolk, VA - 1400 Sewells Point Rd, Norfolk, VA 23502</li>
          </div>
          </ul>
<h4>Delivery routes: </h4>
  <ul>
  <li>Chesapeake</li><li>Portsmouth</li><li>Virginia Beach</li></ul>
<h4>Compensation/Benefits:</h4> 
<ul>
  <li>$18.50+/hr</li>
  <li> potential to work over-time</li>
  <li> 401(k) matching</li>
  <li>Health, Dental and
Vision Insurance available</li> 
<li> Tuition reimbursement</li>

</ul>
<div className="main-footer">
<h3>Military veterans are welcome!</h3>
<h3>No experience required!</h3>
</div>
</div> */}
          </div>
        </div>
      <div className="career-hero-container">
        <div className="job-detail">
          <h4>Job Description</h4>
          <ul>
            <li>Our Delivery Associates/Drivers drive a delivery van to drop off Amazon packages to customers
                within their community</li>
            <li>10-hour shifts are typical</li>
            <li>4-day work week (40 hours) is typical with potential for overtime</li>
            <li>Daytime shift beginning at 10:30 AM</li>
            <li>One weekend day of work required</li>
            </ul>
          </div>
        <div className="job-detail">
          <h4>315 Logistics Offers</h4>
          <ul>
          <li>Competitive Compensation</li>
          <li>Employee benefits/insurance available (Health, Vision, Dental, 401K matching, Tuition
              reimbursement)</li>
          <li>Paid time off</li>
          <li>Community interaction</li>
          <li>Every day is fun and different</li>
          <li>Performance incentives and bonuses</li>
            </ul>
          </div>
        <div className="job-detail">
          <h4>Delivery Associates/Drivers Must Meet The Following</h4>
          <ul>
          <li>Must be at least 21+ years old</li>
          <li>Must have a valid driver's license</li>
          <li>Authorized to work in the United States</li>
          <li>Successfully pass a background check</li>
          <li>Successfully pass a 5-Panel Drug Screening</li>
          <li>Must have a clean motor vehicle report</li>
          <li>Must be able to operate &amp; navigate an Amazon branded delivery van, GVWR 10,000 lbs. or less
              (Initial training provided)</li>
          <li>Must be able to move boxes up to 50 lbs., with or without reasonable accommodation</li>
          <li>Communicate effectively with support team to provide exceptional customer service and ensure
              deliveries are completed</li>
            </ul>
          </div>
        <div className="job-detail">
          <h4>Duties And Responsibilities:</h4>
          <ul>
          <li>Safely drive and operate a delivery vehicle on and off the road</li>
          <li>Use handheld smart phone device for routing information, customer delivery information</li>
          <li>Load and unload packages in delivery vehicle</li>
          <li>Navigate a variety of routes throughout delivery area</li>
          <li>Support the team in daily work requirements including participation in rescue calls when other
              team members need assistance with their routes</li>
          <li>Must be comfortable driving and working in varying weather conditions</li>
          <li>Load and unload packages to be delivered</li>
          <li>Be <b className="customer-obsessed">CUSTOMER OBSESSED!!</b> We strive to deliver packages and smiles to our customer</li>
            </ul>
          </div>
        </div>
        <div className="button-container">
        <button className="apply-button">Apply Now</button>
        </div>
        <div className="line"></div>
    </>
  )
}