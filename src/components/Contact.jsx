import { motion } from 'framer-motion';
import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { styles } from '../styles';
import { EarthCanvas } from './canvas';
import { SectionWrapper } from '../hoc';
import { slideIn } from '../utils/motion';

//template_fsvt6v8
//service_fqybkqb
//DhiFwijVsWtwk0JWE

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name:'',
    email:'',
    message:'',
  })


  const [loading, setLoading] = useState(false);

  const handleChange = (e) =>{
    const { name, value } = e.target;
    setForm({...form, [name]: value})
  }

  const handleSubmit = (e) =>{
    e.preventDefault();
    setLoading(true);
    emailjs.send(
      'service_fqybkqb', 
      'template_fsvt6v8',
      {
        from_name: form.name,
        to_name: 'Pratikshit',
        from_email:form.email,
        to_email: 'pratikshit22@gmail.com',
        message:form.message,
      },
      'DhiFwijVsWtwk0JWE'
      ).then(()=>{
        setLoading(false);
        alert('Thanks! I will get back to ou as soon as possible.');

        setForm({
          name: '',
          email: '',
          message: '',
        })
      }, (error) =>{
        setLoading(false)
        console.log(error);
        alert('Something went wrong');
      })
  }

  return (
    <div className='xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden p-20'>
     <motion.div
     variants={slideIn('left', "tween", 0.2, 1)}
     className='flex-[0.75] black-gradient p-8 rounded-2xl'
     >
      <p className={styles.sectionSubText}>Get in touch</p>
      <h3 className={styles.sectionHeadText}>Contact.</h3>
      <form ref={formRef} onSubmit={handleSubmit} className='mt-12 flex flex-col gap-8'>
        <label className='flex flex-col'>
         <span className='text-white font-medium mb-4'>Your Name</span>
         <input type='text' name='name' value={form.name} onChange={handleChange} placeholder="What's your name?" className='bg-secondary py-4 px-6 placeholder:text-white text-white rounded-lg outlined-none font-medium border-none' />
        </label>

        <label className='flex flex-col'>
         <span className='text-white font-medium mb-4'>Your Email</span>
         <input type='email' name='email' value={form.email} onChange={handleChange} placeholder="What's your email?" className='bg-secondary py-4 px-6 placeholder:text-white text-white rounded-lg outlined-none font-medium border-none' />
        </label>

        <label className='flex flex-col'>
         <span className='text-white font-medium mb-4'>Your Message</span>
         <textarea rows='7'  name='message' value={form.message} onChange={handleChange} placeholder="Your message?" className='bg-secondary py-4 px-6 placeholder:text-white text-white rounded-lg outlined-none font-medium border-none' />
        </label>

        <button type='submit' className='black-gradient py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl'>
         {loading? 'Sending..': 'Send'}
        </button>
      </form>

     </motion.div>

     <motion.div
     variants={slideIn('right', "tween", 0.2, 1)}
     className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'>
      <EarthCanvas />
      
     </motion.div>





    </div>
  )
}

export default SectionWrapper(Contact, "contact");