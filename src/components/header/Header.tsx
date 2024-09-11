import React from 'react'
import Navbar from './Navbar'
import Banner from './Banner'
import TopHeader from './TopHeader'

const Header = () => {
  return (
    <div className='sticky top-0 z-50'>
        <TopHeader/>
        <Navbar/>
    </div>
  )
}

export default Header