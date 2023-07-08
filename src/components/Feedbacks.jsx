import { motion } from 'framer-motion'
import React from 'react'
import { styles } from '../styles'
import { SectionWrapper } from '../hoc'
import { fadeIn, textVariant } from '../utils/motion'
import { testimonials } from '../constants'


const Feedbacks = () => {
  return (
    <div className='mt-12 black-gradient rounded-[20px]'>
      <div className={`${styles.padding} black-gradient rounded-2xl min-h-[300px]`}>
      <motion.div
    variants={textVariant()}
    >
      <p className={styles.sectionSubText}>What others say</p>
      <h2 className={styles.sectionHeadText}>Testimonials.</h2>
    </motion.div>

      </div>
    </div>
  )
}

export default Feedbacks