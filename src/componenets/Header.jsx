import React from 'react'
import { motion } from 'framer-motion'

const list = {
  visible: {
    transition: {
      staggerChildren: 0.08,
      ease: [0.6, 0.01, -0.05, 0.95],
    },
  },
}

const listItems = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0 },
}

const Header = () => {
  return (
    <header className='header'>
      <div className='header-inner'>
        <motion.div
          className='logo'
          layoutId='logo-id'
          transition={{ ease: 'easeOut', duration: 0.5 }}
        >
          <span className='text'>Glow</span>
          <span className='circle' />
        </motion.div>
        <motion.nav
          className='nav'
          variants={list}
          initial='hidden'
          animate='visible'
        >
          {['Product', 'About', 'Blog', 'Reviews'].map((name, i) => (
            <ListItem name={name} key={i} />
          ))}
        </motion.nav>
        <motion.div
          className='cart'
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, ease: 'easeInOut' }}
        >
          <span className='material-icons'>shopping_bag</span>
          <span className='badge'>1</span>
        </motion.div>
      </div>
    </header>
  )
}

const ListItem = ({ name }) => {
  return (
    <motion.li variants={listItems}>
      <a>{name}</a>
    </motion.li>
  )
}

export default Header
