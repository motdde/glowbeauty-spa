import React from 'react'
import { motion } from 'framer-motion'

const Going = () => {
  return (
    <section className='going'>
      <div className='inner-going'>
        <motion.div
          className='self-care'
          layoutId='going'
          transition={{ ease: 'easeOut', duration: 0.5 }}
        ></motion.div>
      </div>
    </section>
  )
}

export default Going
