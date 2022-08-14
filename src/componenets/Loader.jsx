import React from 'react'
import { motion } from 'framer-motion'

const background = {
  visible: {
    y: 250,
    x: 250,
    transition: {
      delay: 1,
      duration: 0.5,
      ease: 'easeIn',
    },
  },
  exit: {
    y: 800,
    x: 800,
    transition: {
      ease: 'easeIn',
      duration: 0.3,
    },
  },
}

const logo = {
  visible: {
    opacity: 1,
    x: -600,
    y: -300,
    scale: 0.8,
    transition: {
      duration: 0.5,
      delay: 1,
      ease: 'easeIn',
    },
  },
}

const circle = {
  visible: {
    scale: [0, 4, 10, 5, 4, 4, 1.5, 1],
    x: [-250, -250, -250, -150, 150, 100, 50, 0],
    y: [-10, -10, -10, -10, -50, 50, 30, 0],
    transition: {
      ease: 'easeOut',
      duration: 1,
      times: [0, 0.2, 0.5, 0.6, 0.7, 0.8, , 0.9, 1],
    },
  },
}

const text = {
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.5,
      ease: 'easeInOut',
    },
  },
}

const textChildren = {
  hidden: {
    x: 50,
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
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
          s
        >
          <motion.span variants={text} className='text'>
            {[...'Glow'].map((letter) => (
              <motion.span
                className='text'
                variants={textChildren}
                key={letter}
              >
                {letter}
              </motion.span>
            ))}
          </motion.span>
          <motion.span className='circle' variants={circle} />
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

export default Loader
