import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

import Header from './componenets/Header'
import Banner from './componenets/Banner'
import Loader from './componenets/Loader'
import Going from './componenets/Going'

const App = () => {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    loading
      ? document.querySelector('body').classList.add('loading')
      : document.querySelector('body').classList.remove('loading')
  }, [loading])
  return (
    <AnimatePresence>
      {loading ? (
        <Loader setLoading={setLoading} />
      ) : (
        <>
          <Header />
          <Banner />
          <Going />
        </>
      )}
    </AnimatePresence>
  )
}

export default App
