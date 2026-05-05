import React from 'react'
import { IoLocationSharp } from "react-icons/io5";
import { FaInstagram } from "react-icons/fa";
import { RxGithubLogo } from "react-icons/rx";
import { FaLinkedin } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { FaPhone } from "react-icons/fa6";
import emailjs from '@emailjs/browser';
import { useState } from 'react';



const Contact = () => {

  const fromref = React.useRef();
  const [issending, setIsSending] = useState(false);


  const sendEmail = (e) => {
    e.preventDefault();


    setIsSending(true);

   emailjs.sendForm(
    import.meta.env.VITE_EMIALJS_SERVICE_ID,
    import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
    fromref.current, 
    import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
   ).then(
    () => {
      alert("Message sent successfully!");
      fromref.current.reset();
      setIsSending(false);
    },
    (error) => {
      alert("Failed to send message. Please try again later.");
      console.error("EmailJS Error:", error);
      setIsSending(false);
    }
   )

  }

  return (
    <>

    <div className='min-h-screen bg-black flex items-center
bg-[radial-gradient(circle_at_center,rgba(0,0,0,1)_0%,rgba(0,0,0,1)_45%,rgba(0,128,128,0.22)_70%,rgba(0,0,0,1)_100%)]'>
  
  
  
  <div className='w-[54rem] bg-white/5 ml-35'>

  <div className='text-2xl text-white mt-5 flex justify-center '>

<div>
     <h2 className=''> Contact Me</h2>
      <hr className='text-[#008080] mt-1 w-15 ml-8 border-1'/>
      <hr className='text-[#008080] w-8 mt-1 ml-11.5 border-1'/>
</div>

  </div>
   
    <div className='flex text-white space-x-30 mt-8'>

      <div className='w-50 pl-5 border-l-8 border-[#008080]'>
        <p className='text-2xl font-bold'>Get in Touch </p>
        <p className='text-md font-medium text-[#008080]'>Socials</p>
        <ul className='grid gap-5 m-5 text-xl text-[#008080]'>
        <div className='flex items-center gap-3 git'> <a href=""><RxGithubLogo/></a> <a href='' className='text-sm font-bold text-white flex items-center git' id='git'>GitHub</a> </div>
        <div className='flex items-center gap-3 git'> <a href=""><FaLinkedin /></a> <a href='' className='text-sm font-bold text-white flex items-center git' id='git'>LinkedIn</a> </div>
        <div className='flex items-center gap-3 git'>  <a href=""><FaInstagram/></a> <a href='' className='text-sm font-bold text-white flex items-center git' id='git'>Moses.lal07</a> </div>
        </ul>
        <hr className='w-50 ml-5 my-5 text-[#008080]'/>
        <p className='text-md font-medium text-[#008080]'>Contact</p>
        <ul className='grid gap-5 m-5 text-xl text-[#008080]'>
        <div className='flex items-center gap-3 git'> <a href=""><IoMail /></a> <a href='' className='text-sm font-bold text-white flex items-center git'>moseslal2692@gmail.com</a> </div> 
        <div className='flex items-center gap-3 git'> <a href=""><FaPhone /></a> <a href='' className='text-sm font-bold text-white flex items-center git' >8269672164</a> </div> 
        <div className='flex items-center gap-3 git'> <a href=""><IoLocationSharp /></a> <a href='' className='text-sm font-bold text-white flex items-center git' >Bhopal, Madhya Pradesh</a> </div> 
        </ul>
      </div>

      <form className=' w-full p-5' ref={fromref} onSubmit={sendEmail}>

        <div className='flex gap-10 '>
        <div>
          <label htmlFor="name" className='text-sm font-bold'>Full Name</label>
          <input type="text" name="from_name" className='border-b-2 p-2 border-white focus:outline-none focus:border-[#008080] font-bold placeholder:font-medium placeholder:text-sm' placeholder='Employee' required/>
        </div>

        <div>
          <label htmlFor="name" className='text-sm font-bold'>Company Name</label>
          <input type="text" name='company_name' className='border-b-2 p-2 border-white focus:outline-none focus:border-[#008080] font-bold placeholder:font-medium placeholder:text-sm' placeholder='Company' />
        </div>

        </div>

       <div className='flex gap-10 mt-10'>

        <div>
          <label htmlFor="emial" className='text-sm font-bold'>Email</label>
          <input type="email" name='email' className='border-b-2 p-2 border-white focus:outline-none focus:border-[#008080] font-bold placeholder:font-medium placeholder:text-sm' placeholder='user@gmail.com' required />
        </div>

        <div>
          <label htmlFor="name" className='text-sm font-bold'>Phone Number</label>
          <input type="phone" name='phone' className='border-b-2 p-2 border-white focus:outline-none focus:border-[#008080] font-bold placeholder:font-medium placeholder:text-sm' placeholder='+91' required />
        </div>

       </div>

       <div className='mt-10'>

        <span className='text-sm font-bold'>Subject</span>


        <div className='flex gap-3 ml-10 mt-2'>

        <div className='flex gap-1'>
        <input type="radio" name="subject" value="Internship" required />
        <label>Internship</label>
        </div>

        <div className='flex gap-1'>
        <input type="radio" name="subject" value="Full-Time Job" />
        <label>Full-Time Job</label>
        </div>

        <div className='flex gap-1'>
        <input type="radio" name="subject" value="Freelance" />
        <label>Freelance</label>
        </div>

        <div className='flex gap-1'>
        <input type="radio" name="subject" value="Other" />
        <label>Other</label>
        </div>
       
        </div>
       
       </div>



  <div className='grid mt-10 space-y-1'>
    <label htmlFor="message" className='text-sm font-bold'>Message</label>
    <textarea name="message" id="message" className='border-b-2 p-1 border-white focus:outline-none focus:border-[#008080] font-bold placeholder:font-medium placeholder:text-sm' placeholder='write your answer' required></textarea>
  </div>


<div className='flex justify-end mt-5'> 
  <button type='submit'  disabled={issending}    className='flex justify-end p-2 border-2 border-[#008080] text-white'>{ issending ? "Sending..." : "Send Message"}</button>
</div>

      </form>

    </div>

  </div>
  
  
  
  
  
  
  
  </div>
    
    
    
    
    </>
  )
}


export default Contact;
