import React from 'react';
import { BsFillBellFill, BsFillEnvelopeFill, BsPersonCircle, BsSearch, BsJustify } from 'react-icons/bs';
import '../../App.css'

function Header({ OpenSidebar }) {
  return (
    <header className='header bg-white'>
      <div className='menu-icon'>
        <BsJustify className='icon' onClick={OpenSidebar} />
        <input 
          type="text" 
          placeholder="Search" 
          className='search-input'
        />
      </div>
      <div className='header-left'>
        <BsSearch className='icon' />
      </div>
      <div className='header-right'>
        <BsFillBellFill className='icon' />
        <BsFillEnvelopeFill className='icon' />
        <BsPersonCircle className='icon' />
      </div>
    </header>
  );
}

export default Header;
