import React, {useState} from 'react'
import {Outlet} from 'react-router-dom'
import Header from './Header'
import Faq from './Faq'
import Contact from './Contact'
import Footer from './Footer'

export default function Layout(){
  const [faqs, setFaqs] = useState([
    {
      question: "Do you need a commercial driver's license (CDL)?",
      answer: "A special driver&#39;s license is a plus but not required.",
      open: false
    },
    {
      question: "Can I choose how many hours I want to work every day?",
      answer: "Delivery drivers are full-time jobs, requiring 40 hours a week. We are currently ONLY hiring Full-time",
      open: false
    },
    {
      question: "Do I need to provide my own vehicle?",
      answer: "315 Logistics will provide Amazon branded delivery vehicles or alike.",
      open: false
    },
    {
      question: "What is an Amazon delivery service partner?",
      answer: "315 Logistics is a local veteran owned Amazon delivery service partner providing a small parcel package delivery capability to customers every day.",
      open: false
    },

  ]);

  const toggleFAQ = index => {
    setFaqs(
      faqs.map((faq, i) => {
        if(i === index) {
          faq.open = !faq.open;
        } else {
          faq.open = false;
        }
        return faq;
      })
    );
  };

  return (
    <div  className='site-wrapper'>
      <Header />
      <Outlet />
      <div className="revolving-container">
     <div className="contact">
       <h2>Contact Us!</h2>
      <Contact />
    </div>
      <div className='faqs'><h2>Frequently Asked Questions</h2>
        {faqs.map((faq, index) => (
          <Faq faq={faq} index={index} key={index} toggleFAQ={toggleFAQ} />
        ))}
      </div>
      </div>
      <Footer />
      </div>
  )
}

//Career page - dek