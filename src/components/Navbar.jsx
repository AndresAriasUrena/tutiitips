import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';

import {styles} from '../style';
import { navLinks} from '../constants';
import { logo, menu, close} from '../assets';

const Navbar = () => {
  const [active, setActive] = useState('');
  const [toggle, setToggle] = useState(false);

  return (
    <nav className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-30 bg-transparent md:bg-hero-gr`}>
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        <Link
          to='/'
          className='md:flex hidden items-center gap-2'
          onClick={() => {
            setActive('');
            window.scrollTo(0,0)
          }}
        >
          <img src={logo} alt='tutitips logo' className='w-16 h-16 object-contain'/>
        </Link>
        <ul className='hidden md:flex flex-row gap-6 lg:gap-10'>
          {navLinks.map((link) => (
            <li 
              key={link.id}
              className={`${active === link.title
                            ? 'text-selected'
                            : 'text-primary'
              } self-center hover:text-selected lg:text-[18px] font-medium cursor-pointer`}
              onClick={()=>setActive(link.title)}
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
          <a href='#agenda' onClick={()=>{setActive('')}} className='bg-secondary py-2 px-4 rounded-full hover:bg-verdeclaro text-primary hover:text-secondary'>Agendar cita</a>
        </ul>
        <div className='md:hidden flex flex-1 justify-end items-center'>
            <img src={toggle ? close : menu} alt='boton menu' className='w-9 h-9 mt-20 fixed z-50 object-contain' 
                onClick={()=>{
                  setToggle(!toggle)
                }}
            />
            <div className={`fixed pt-24 pl-16 h-full w-full bg-verdeclaro top-0 z-40 text-tertiary 
                              ${toggle? 'right-0 transelate-x-0' : 'right-[-100%] translate-x-full'} 
                              overflow-hidden transition-transform ease-in-out duration-700`
                           }>
              <ul className='flex md:hidden  flex-col gap-12'>
                {navLinks.map((link) => (
                  <li 
                    key={link.id}
                    className={`${active === link.title
                                  ? 'text-selected'
                                  : 'text-tertiary'
                    } self-left hover:text-selected text-xl font-medium cursor-pointer`}
                    onClick={()=>{
                      setActive(link.title),
                      setToggle(!toggle)
                    }}
                  >
                    <a href={`#${link.id}`}>{link.title}</a>
                  </li>
                ))}
                <a href='#agenda' onClick={()=>{setActive(''), setToggle(!toggle) }} className='bg-secondary py-2 px-6 w-max rounded-full hover:bg-primary text-primary hover:text-secondary'>Agendar cita</a>
              </ul>
            </div>

        </div>
      </div>
    </nav>
  )
}

export default Navbar