import React from 'react';
import { BsPeopleFill, BsGrid1X2Fill, BsFillArchiveFill, BsFillGrid3X3GapFill, BsListCheck, BsMenuButtonWideFill, BsFillGearFill } from 'react-icons/bs';
import '../../App.css'

function Sidebar({ openSidebarToggle, OpenSidebar }) {
  return (
    <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive" : ""}>
      <div className='sidebar-title'>
        <div className='sidebar-brand'>
          <BsPeopleFill className='icon_header' /> Dev
        </div>
        <span className='icon close_icon' onClick={OpenSidebar}>X</span>
      </div>

      <ul className='sidebar-list'>
        <li className='sidebar-list-item'>
          <a href="">
            <BsGrid1X2Fill className='icon' /> Dashboard
          </a>
        </li>
        <li className='sidebar-list-item'>
          <a href="">
            <BsFillArchiveFill className='icon' /> Issues
          </a>
        </li>
        <li className='sidebar-list-item'>
          <a href="">
            <BsFillGrid3X3GapFill className='icon' /> Projects
          </a>
        </li>
        <li className='sidebar-list-item'>
          <a href="">
            <BsPeopleFill className='icon' /> Users
          </a>
        </li>
        <li className='sidebar-list-item'>
          <a href="">
            <BsListCheck className='icon' /> Disk Space
          </a>
        </li>
        <li className='sidebar-list-item'>
          <a href="">
            <BsMenuButtonWideFill className='icon' /> Access Level
          </a>
        </li>
        <li className='sidebar-list-item'>
          <a href="">
            <BsFillGearFill className='icon' /> Profile
          </a>
        </li>
      </ul>
    </aside>
  );
}

export default Sidebar;
