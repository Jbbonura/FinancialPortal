import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom'
import Logo from "../Components/Logo.png";
import {BiHomeAlt} from "react-icons/bi" 
import {MdAccountBalance} from "react-icons/md"


export default function SideMenu() {
  const [isSideMenu, setSideMenu] = useState(false)
  const open = (isSideMenu) => {
    return setSideMenu(!isSideMenu)
  }
  const domeNode = useRef()
  const updateState = (event) => {
    if (domeNode.current.contains(event.target)) {
      return
    }
    setSideMenu(false)
  }
  useEffect(() => {
    document.addEventListener('onClick', updateState)
    return () => {
      document.removeEventListener('onClick', updateState)
    }
  }, [])




  return (
    <>
      <header className="topBar">
        <div className="menuBar">
          <div className='titleBox'>
            <div className='title-header'>
            <img className='logo' src={Logo} alt="" />  
            <h2>Financial Portal</h2>
            <Link to='/'>Logout</Link>
            </div>
          </div>
          <span ref={domeNode} className="navIcon" onClick={() => {open(isSideMenu)}} >
            <svg
              id='toggleIcon'
              xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              {isSideMenu ? (
                <path d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" />
              ) : (
                <path d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" />
              )}
            </svg>
          </span>
        </div>
        <div className="sideMenu" style={{ left: isSideMenu ? '0' : '-175px' }}>
            
            <div className="navSelect" >
            <menu>
              <div className='menuItem' >
                <div className='navItems'>
                  <a href="#">Dashboard</a>
                  <BiHomeAlt size={28} color="white" />
                </div>
                  <menu>
                    <div className='menuItem'>
                      <a href="#">about</a>
                    </div>
                    <div className='menuItem'>
                      <a href="#">about</a>
                    </div>
                  </menu>
              </div>
            </menu>

            <menu>
              <div className='menuItem' >
                <div className='navItems'>
                  <a href="#">Bank Accounts</a>
                  <MdAccountBalance size={28} color="white" />
                </div>
                  <menu>
                    <div className='menuItem'>
                      <a href="#">about</a>
                    </div>
                    <div className='menuItem'>
                      <a href="#">about</a>
                    </div>
                  </menu>
              </div>
            </menu>
          </div> 
        </div>
      </header>
    </>
  )
}
