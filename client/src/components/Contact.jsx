import React, {useState, }from 'react'

export default function Contact(){
  const initInputs ={
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: ""
  }
  
  const [inputs, setInputs] = useState(initInputs)

  function handleChange(e){
    const{name, value} = event.target;
    setInputs({...inputs, [name]: value});
  };

  const {firstName, lastName, email, phone, message} = inputs

  return (
    <div className="contact-container">
    <form className='contact-form' >
      <input
        type="text"
        id="firstName"
        name="firstName"
        placeholder="First Name"
        value={firstName}
        onChange={handleChange}
        />
      <input
        type="text"
        id="lastName"
        name="lastName"
        placeholder="Last Name"
        value={lastName}
        onChange={handleChange}
        />
      <input
        type="text"
        id="email"
        name="email"
        placeholder="Email"
        value={email}
        onChange={handleChange}
        />
      <input
        type="text"
        id="phone"
        name="phone"
        placeholder="Phone #"
        value={phone}
        onChange={handleChange}
        />

<textarea
          id="message"
          name="message"
          placeholder="Add Message"
          value={message}
          onChange={handleChange}
        ></textarea>
        <button type="submit" className='submit-button'>Submit</button>
      </form>
    </div>
  )
}