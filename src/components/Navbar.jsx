import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';

import {styles} from '../style';
import { navLinks} from '../constants';
import { logo, menu, close} from '../assets';

const Navbar = () => {
  const [setActive, setsetActive] = useState('');

  return (
    <nav className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-transparent`}>
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        <Link
          to='/'
          className='flex items-center gap-2'
          onClick={() => {
            setActive('');
            window.scrollTo(0,0)
          }}
        >
          <img src={logo} alt='tutitips logo' className='w-16 h-16 object-contain'/>
        </Link>
        <ul className='hidden md:flex flex-row gap-6 lg:gap-10'>
          {navLinks.map((link) => (
            <li className='self-center	'>
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
          <button className='bg-secondary py-2 px-4 rounded-full hover:bg-primary hover:text-secondary'>Agendar cita</button>
        </ul>
        <Link
          href='/'
          className='md:hidden'
        >
            <img src={menu} alt='boton menu' className='w-9 h-9 object-contain' />
        </Link>
      </div>
    </nav>
  )
}

export default Navbar