import React from 'react'
import logo from './images/logo.svg'
import { FaBars } from 'react-icons/fa'
import {useGlobalContext} from "./context";

const Navbar = () => {
  const { openSidebar, openSubmenu, closeSubmenu } = useGlobalContext();
  function displaySubmenu(e) {
    const buttonText = e.target.textContent
    const buttonLoc = e.target.getBoundingClientRect();
    const center = (buttonLoc.left + buttonLoc.right) / 2;
    const bottom = buttonLoc.bottom;
    openSubmenu(buttonText, {center, bottom})
  }

  const handleSubmenu = (e) => {
    if (!e.target.classList.contains('link-btn')) {
      closeSubmenu();
    }
  };

  return (
      <nav className='nav' onMouseOver={handleSubmenu}>
        <div className='nav-center'>
          <div className='nav-header'>
            <img src={logo} className='nav-logo' alt='' />
            <button className='btn toggle-btn' onClick={openSidebar}>
              <FaBars />
            </button>
          </div>
          <ul className='nav-links'>
            <li>
              <button className='link-btn' onMouseOver={displaySubmenu}>
                products
              </button>
            </li>
            <li>
              <button className='link-btn' onMouseOver={displaySubmenu}>
                developers
              </button>
            </li>
            <li>
              <button className='link-btn' onMouseOver={displaySubmenu}>
                company
              </button>
            </li>
          </ul>
          <button className='btn signin-btn'>Sign in</button>
        </div>
      </nav>
  );
}

export default Navbar
