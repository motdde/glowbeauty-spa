import React from 'react'
import { motion } from 'framer-motion'

const copyVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
      ease: 'easeIn',
    },
  },
}

const copyVariantsItems = {
  hidden: { opacity: 0, y: 200 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      ease: 'easeIn',
    },
  },
}

const Banner = () => {
  return (
    <section className='banner'>
      <motion.div
        className='banner-inner'
        variants={copyVariants}
        initial='hidden'
        animate='visible'
      >
        <motion.div
          className='copy'
          variants={copyVariants}
          initial='hidden'
          animate='visible'
        >
          <motion.div className='tagline' variants={copyVariantsItems}>
            <div className='first'>Let your skin</div>
            <div className='second'>
              Going
              <span>
                <img className='image' src='/images/beauty.png' />
              </span>
              Out.
            </div>
          </motion.div>
          <motion.div className='sub' variants={copyVariantsItems}>
            We want to bring to the worls through our products that very spacial
            feeling joy, heathy and positive energy
          </motion.div>
          <motion.div className='call-to-action' variants={copyVariantsItems}>
            <button className='action1'>
              Shop Now <span className='material-icons'>east</span>
            </button>
            <span className='action2'>
              <span className='material-icons'>arrow_right</span>
              How to use
            </span>
          </motion.div>
        </motion.div>
        <motion.div className='image' variants={copyVariantsItems}>
          <img className='image-inner' src='/images/beauty.png' />
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Banner
