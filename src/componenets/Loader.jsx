import React from 'react'
import { motion } from 'framer-motion'

const background = {
  visible: {
    y: 250,
    x: 250,
    transition: {
      ease: 'easeIn',
      duration: 0.6,
    },
  },
  exit: {
    y: 800,
    x: 800,
    transition: {
      ease: 'easeIn',
      duration: 0.6,
    },
  },
}

const logo = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    x: -600,
    y: -300,
    scale: 0.8,
    transition: {
      duration: 0.5,
      ease: 'easeIn',
    },
  },
}

const Loader = ({ setLoading }) => {
  return (
    <motion.div
      key='loader'
      className='loader'
      variants={background}
      initial='hidden'
      animate='visible'
      exit='exit'
      layoutId='going'
    >
      <motion.div className='loader-inner'>
        <motion.div
          className='logo'
          variants={logo}
          layoutId='logo-id'
          onAnimationComplete={() => setLoading(false)}
        >
          <span className='text'>Glow</span>
          <span className='circle' />
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

export default Loader
