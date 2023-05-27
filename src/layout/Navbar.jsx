import React from 'react'
import Header from '../component/Header'
import Summary from '../component/Summary'

const Navbar = ({showCartHandler}) => {
  return (
    <div>
        <Header showCartHandler={showCartHandler} />
        <Summary />
    </div>
  )
}

export default Navbar