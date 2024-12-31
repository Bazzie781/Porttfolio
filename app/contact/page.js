"use client";
 import React, { useState } from 'react';
  import emailjs from 'emailjs-com';
   const ContactPage = () => {
     const [formData, setFormData] = useState({ name: '',
         email: '', phone: '', message: '', });
          const [showPopup, setShowPopup] = useState(false); 
    const [popupMessage, setPopupMessage] = useState('');
     const [error, setError] = useState('');
     const handleChange = (e) => { 
        const { name, value } = e.target; setFormData({ ...formData, [name]: value });
     };
      const validateEmail = (email) => {
     const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; return re.test(String(email).toLowerCase()); };
     const handleSubmit = (e) => { e.preventDefault();
         if (!formData.name || !formData.email || !formData.phone || !formData.message)
             { setError('All fields are required.');
                 return;
     } 
     if (!validateEmail(formData.email)) 
        { setError('Please enter a valid email address.');
             return;
             }
              setError('');
         emailjs.send('service_jybm419', 'template_1g6q58t', formData, 'F_hH2eKAP7Qyu_Sfv') .then((result) => { setPopupMessage('Your message has been sent successfully.');
             setShowPopup(true); setFormData({ name: '',
             email: '', phone: '', message: '', });
             },
              (error) => { setPopupMessage('Failed to send message. Please try again.');
                 setShowPopup(true);
                 }); 
                }; 
                return (
         <div className="text-white mt-12 p-6">
         <h2 className="text-2xl font-bold">CONTACT <span className="text-orange-500">ME</span></h2> <p className="text-xl text-white mt-4">Let&apos;s get in touch</p> <form onSubmit={handleSubmit} className="mt-6 flex flex-col space-y-4"> {error && <p className="text-red-500">{error}</p>} <div className="grid grid-cols-1 md:grid-cols-2 gap-4"> <div className="flex flex-col"> <label className="text-orange-500 text-sm mb-1">YOUR NAME</label> <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="" className="border-b border-black bg-transparent text-white p-2 focus:outline-none focus:border-orange-500 placeholder-white" /> </div> <div className="flex flex-col"> <label className="text-orange-500 text-sm mb-1">YOUR EMAIL</label> <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="" className="border-b border-black bg-transparent text-white p-2 focus:outline-none focus:border-orange-500 placeholder-white" /> </div> </div> <div className="grid grid-cols-1 md:grid-cols-2 gap-4"> <div className="flex flex-col"> <label className="text-orange-500 text-sm mb-1">YOUR PHONE NUMBER</label> <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="" className="border-b border-black bg-transparent text-white p-2 focus:outline-none focus:border-orange-500 placeholder-white" /> </div> <div className="flex flex-col md:col-span-2"> <label className="text-orange-500 text-sm mb-1">YOUR MESSAGE</label> <textarea name="message" value={formData.message} onChange={handleChange} placeholder="" className="border-b border-black bg-transparent text-white p-2 focus:outline-none focus:border-orange-500 placeholder-white" rows="5" ></textarea> </div> </div> <button type="submit" className="w-full py-3 bg-orange-500 text-white font-semibold rounded-full transition duration-300 ease-in-out transform hover:scale-105 shadow-lg mt-4" > Submit </button> </form> {showPopup && ( <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"> <div className="bg-white p-6 rounded-lg text-center shadow-lg"> <h2 className="text-2xl font-bold text-orange-500 mb-4">Thank You!</h2> <p className="text-black">{popupMessage}</p> <button onClick={() => setShowPopup(false)} className="mt-4 py-2 px-6 bg-orange-500 text-white rounded-full transition duration-300 ease-in-out hover:scale-105" > Close </button> </div> </div> )} </div> ); }; export default ContactPage;