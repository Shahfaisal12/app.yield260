import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <>
      <div className="sidebar-section">
        <div className="sidebar-header d-flex align-items-center justify-content-center">
          <div className="sidebar-logo">
            <img src="assets/sidebar-icon.svg" alt="" />
          </div>
          <div className="sidebar-title">
           <a href='/'><img src='https://app.yield360.io/assets/logo.png' width={80} alt='' /></a>
          </div>
        </div>
        <div className="menu">
          <ul className='p-0'>
            <li className='active'>
              <Link to='/' className='d-flex'>
               <img src='https://app.yield360.io/assets/vector1.svg'  alt='' />
                <h6>Dashboard</h6>
              </Link>
            </li>
            <li>
              <Link to='/' className='d-flex'>
              <img src='https://app.yield360.io/assets/vector2.svg'  alt='' />
                <h6>Accounts</h6>
              </Link>
            </li>
            <li>
              <Link to='/' className='d-flex'>
              <img src='https://app.yield360.io/assets/vector3.svg'  alt='' />
                <h6>Calculator</h6>
              </Link>
            </li>
            <li>
              <Link to='/' className='d-flex'>
              <img src='https://app.yield360.io/assets/vector4.svg'  alt='' />
                <h6>Swap</h6>
              </Link>
            </li>
            <li>
              <Link to='/' className='d-flex'>
              <img src='https://app.yield360.io/assets/vector.svg'  alt='' />
                <h6>Documentaion</h6>
              </Link>
            </li>
            <li>
              <Link to='/' className='d-flex'>
              <img src='https://app.yield360.io/assets/icon-db6.f592f41.svg' width={20}  alt='' />
                <h6>Y360 Bank & Referral</h6>
              </Link>
            </li>
            <li>
            <Link to='/' className='d-flex'>
              <img src='https://app.yield360.io/assets/download.svg' width={20}  alt='' />
              <h6>Y360 Cross-Chain Bridge</h6>
            </Link>
          </li>
          <li>
          <Link to='/' className='d-flex'>
              <img src='https://app.yield360.io/assets/icon-db8.b3ddade.svg' width={20}  alt='' />
            <h6>Y360 Bond</h6>
          </Link>
        </li>
      <li>
      <Link to='/' disabled className='d-flex'>
              <img src='https://app.yield360.io/assets/icon-db9.6ec852a.svg' width={20} alt='' />
        <h6>Y360 DAO</h6>
      </Link>
    </li>
          </ul>
        </div>
        <div className="footer d-flex align-items-center justify-content-center mt-5">
          <img src='https://app.yield360.io/assets/chat.svg' alt='' />
        </div>
        <div className="footer-icons mt-5 d-flex flex-wrap align-items-center justify-content-center">
        <img src='https://app.yield360.io/assets/twitter%201.svg' className='mx-2' alt='' />
        <img src='https://app.yield360.io/assets/tele.87ce35f.svg' className='mx-2' alt='' />
        <img src='https://app.yield360.io/assets/group2.svg' className='mx-2' alt='' />
        <img src='https://app.yield360.io/assets/group3.svg' className='mx-2' alt='' />
        <img src='https://app.yield360.io/assets/group.svg' className='mx-2' alt='' />
        </div>
      </div>
    </>
  )
}

export default Sidebar