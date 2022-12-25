import React from 'react'
import Header from './Header'
import Sidebar from './Sidebar'

const Base = (props) => {
  return (
    <>
      <div className='layout-section d-flex'>
        <Header />
        <div className='Sidebar-content d-none d-md-block'>
          <Sidebar />
        </div>
        <div className="main-section text-white">
          {props.children}
        </div>
      </div>
    </>
  )
}

export default Base
