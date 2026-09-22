'use client'
import React, { useState } from 'react'
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Button, NavbarMenuToggle, NavbarMenuItem, NavbarMenu} from "@heroui/react";
import { Link } from "react-scroll";
import {navbarItem } from '@/constants';
import FloatingAction from './theme/FloatingAction';

const Navbarr = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isActive, setIsActive] = useState('hero');



  return (
    <Navbar isMenuOpen={isMenuOpen} onMenuOpenChange={setIsMenuOpen} className='dark:bg-linear-to-r dark:from-gray-800 dark:to-slate-900 md:px-16 sm:px-14'>
      <NavbarContent justify="start">
        <NavbarItem>
        <a href="#" className="flex items-center pr-4">
            <h1 className="self-center text-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              gab.<span className="text-black dark:text-cyan-500">dev</span>
            </h1>
          </a>
        </NavbarItem>
      </NavbarContent>
      
      {/* <NavbarContent justify="end" className="sm:hidden">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
         <NavbarBrand>
          <p className="font-bold text-inherit">ACME</p>
        </NavbarBrand> 
      </NavbarContent> */}

      <NavbarContent className="sm:flex gap-4" justify="center">
        {navbarItem.map(item => (
            <NavbarItem key={item.label} className='hidden sm:block cursor-pointer font-medium text-sm'>
            <Link
                    activeClass="active"
                    to={item.value}
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={500}
                    // onSetActive={() => setIsActive(item.label)}
                    // crossOrigin="true"
                  >
{item.label}
                  </Link>
          </NavbarItem>
        ))}
        <NavbarItem className='pr-4 sm:pl-4 sm:border-l border-r sm:border-r-0 pt-1.5 border-gray-500  dark:border-gray-700'>
            <FloatingAction/>
          </NavbarItem>
          <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
      </NavbarContent>
      {/* <NavbarContent className="hidden sm:flex gap-4" justify="end">  
          <NavbarItem className='cursor-pointer'>
            <FloatingAction/>
          </NavbarItem>
      </NavbarContent> */}
      <NavbarMenu  className='dark:bg-linear-to-r dark:from-gray-800 dark:to-slate-900'>
        {navbarItem.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              activeClass="active border-b-2 border-y-slate-700 dark:border-y-cyan-400"
              to={item.value}
              spy={true}
              smooth={true}
              offset={-50}
              duration={500}
              delay={500}
              onSetActive={() => setIsActive(item.value)}
            >
              <p onClick={() => setIsMenuOpen(!isMenuOpen)} className={isActive === item.value ? 'dark:text-cyan-500' : undefined}>{item.label}</p>
            </Link>
          </NavbarMenuItem>
        ))}
        <NavbarMenuItem>
            <a href="https://drive.google.com/file/d/1ZfstMQchKYjGlDkFyk6Gr0WUvF1XUWkT/view?usp=sharing" target="_blank">Resume</a>
</NavbarMenuItem>
        <NavbarMenuItem>
            <a href="https://github.com/riellll" target="_blank">Github</a>
</NavbarMenuItem>
        <NavbarMenuItem>
            <a href="https://www.linkedin.com/in/gabriel-noe-napiere-88009525a/" target="_blank">LinkdIn</a>
</NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  )
}

export default Navbarr