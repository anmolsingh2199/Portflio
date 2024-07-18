import React from 'react';
import { CONTACT } from '../constants';
import { FaPhoneAlt, FaMapMarkerAlt, FaEnvelope } from 'react-icons/fa';
import { animate, motion } from "framer-motion"

const Contacts = () => {
  return (
    <div className="border-b border-neutral-900 pb-20">
      <motion.h2 
       whileInView={{ opacity: 1, y: 0 }}
       initial={{ opacity: 0, y: -50 }}
       transition={{ duration: 1 }}className='my-10 text-center text-4xl'>Get in Touch</motion.h2>
      <motion.div 
      
      whileInView={{ opacity: 1, x: 0 }}
      initial={{ opacity: 0, x: -100 }}
      transition={{ duration: 1}}className="text-center tracking-tighter">
        <a href={`https://maps.google.com/?q=${CONTACT.address}`} target="_blank" rel="noopener noreferrer" className='my-4 flex items-center justify-center transition duration-300 ease-in-out transform hover:scale-110'>
          <FaMapMarkerAlt className='mr-2 text-red-500' />
          <span>{CONTACT.address}</span>
        </a>
        <a href={`tel:${CONTACT.phoneNo}`} className='my-4 flex items-center justify-center transition duration-300 ease-in-out transform hover:scale-110'>
          <FaPhoneAlt className='mr-2 text-neutral-500 hover:text-blue-500' />
          <span>{CONTACT.phoneNo}</span>
        </a>
        <a href={`mailto:${CONTACT.email}`} className='my-4 flex items-center justify-center transition duration-300 ease-in-out transform hover:scale-110'>
          <FaEnvelope className='mr-2 text-neutral-500 hover:text-green-500' />
          <span className='border-b'>{CONTACT.email}</span>
        </a>
      </motion.div>
    </div>
  );
}

export default Contacts;
