import React from 'react';
import { Sidebar as ProSidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';

import './Sidebar.css'
import { FaCartShopping, FaChartBar, FaWpforms } from 'react-icons/fa6';
import { FaPhoneAlt } from 'react-icons/fa';
import { IoCartOutline, IoSettings, IoShareSocialOutline } from 'react-icons/io5';
import { CiMemoPad } from 'react-icons/ci';
import { IoIosChatboxes } from 'react-icons/io';
import { MdEmail } from 'react-icons/md';
import { BsCalendar3EventFill } from 'react-icons/bs';
import { LiaTableSolid } from 'react-icons/lia';
import { BiSolidComponent } from 'react-icons/bi';


function Sidebar() {

 
  return (
    <div className='custom-sidebar'>
      <ProSidebar>
        <Menu >
          <SubMenu className="custom-submenu-content"  label="Home">
          <SubMenu className='msw' label="E-Commerce">
            <MenuItem> Admin </MenuItem>
            <MenuItem> Line charts </MenuItem>
          </SubMenu>
          </SubMenu>
          <p className='mf'><b>Apps</b></p>
          <SubMenu label={<span><IoCartOutline /> E-Commerce</span>}>
          <SubMenu label="Admin">
            <MenuItem> Add Products </MenuItem>
            <MenuItem> Products </MenuItem>
            <MenuItem> Customers </MenuItem>
            <MenuItem> Customer Details </MenuItem>
            <MenuItem> Orders </MenuItem>
            <MenuItem> Order Details </MenuItem>
            <MenuItem> Refund </MenuItem>
          </SubMenu>
          <SubMenu label="Customer">
            <MenuItem> Home </MenuItem>
            <MenuItem> Product Details </MenuItem>
            <MenuItem> Product Filter </MenuItem>
            <MenuItem> Cart </MenuItem>
            <MenuItem> Checkout </MenuItem>
            <MenuItem> Shipping Info </MenuItem>
            <MenuItem> Profile  </MenuItem>
            <MenuItem> Favourite Stores  </MenuItem>
            <MenuItem> Wishlist  </MenuItem>
            <MenuItem> Order Tracking  </MenuItem>
            <MenuItem> Invoice  </MenuItem>
          </SubMenu>

          </SubMenu>
          <SubMenu label={<span><FaPhoneAlt /> CRM</span>}>
            <MenuItem> Pie charts </MenuItem>
            <MenuItem> Line charts </MenuItem>
          </SubMenu>
          <SubMenu label={<span><CiMemoPad /> Project Management </span>} >
            <MenuItem> Pie charts </MenuItem>
            <MenuItem> Line charts </MenuItem>
          </SubMenu>
          <MenuItem> <IoIosChatboxes /> Chat </MenuItem>
          <SubMenu label={<span><MdEmail /> <span >Email</span> </span>}>
            <MenuItem> Pie charts </MenuItem>
            <MenuItem> Line charts </MenuItem>
          </SubMenu>
          <SubMenu label={<span><BsCalendar3EventFill /> Events </span>}>
            <MenuItem> Pie charts </MenuItem>
            <MenuItem> Line charts </MenuItem>
          </SubMenu>
          <SubMenu label={<span><IoShareSocialOutline /> Social </span>}>
            <MenuItem> Pie charts </MenuItem>
            <MenuItem> Line charts </MenuItem>
          </SubMenu>
          <p className='mf'><b>Modules</b></p>
          <SubMenu label={<span><FaWpforms /> Forms </span>}>
            <MenuItem> Pie charts </MenuItem>
            <MenuItem> Line charts </MenuItem>
          </SubMenu>
          <SubMenu label={<span><CiMemoPad /> Icons </span>}>
            <MenuItem> Pie charts </MenuItem>
            <MenuItem> Line charts </MenuItem>
          </SubMenu>
          <SubMenu label={<span><LiaTableSolid /> Tables </span>}>
            <MenuItem> Pie charts </MenuItem>
            <MenuItem> Line charts </MenuItem>
          </SubMenu>
          <SubMenu label={<span><FaChartBar /> ECharts </span>}>
            <MenuItem> Pie charts </MenuItem>
            <MenuItem> Line charts </MenuItem>
          </SubMenu>
          <SubMenu label={<span><BiSolidComponent /> Components </span>}>
            <MenuItem> Pie charts </MenuItem>
            <MenuItem> Line charts </MenuItem>
          </SubMenu>
          <SubMenu label={<span><IoSettings /> Utilities </span>}>
            <MenuItem> Pie charts </MenuItem>
            <MenuItem> Line charts </MenuItem>
          </SubMenu>
        </Menu>
      </ProSidebar>
    </div>
  );
}

export default Sidebar;
