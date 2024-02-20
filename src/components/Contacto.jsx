import React from 'react'
import {styles} from '../style';
import { navLinks} from '../constants';

import { instagram, whatsapp, facebook} from '../assets';
import { SectionWrapper } from '../hoc';

const Contacto = () => {
  return (
    <div className='bg-primary text-tertiary pt-20 md:pt-8'>
      <div className='md:max-w-[768px] mx-auto p-4 flex flex-col md:flex-row gap-6 md:justify-between'>  
        <div className='hidden md:block'>
          <h1 className='font-semibold text-lg pb-2'>Enlaces:</h1>
          <ul className='flex flex-col gap-2 pl-4'>
            {navLinks.map((link) =>(
              <li key={link.id}
              className=''
              >
                <a href={`#${link.id}`}>{link.title}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className='flex flex-col md:flex-row gap-6 items-center md:items-start'>
          <div className='flex flex-col gap-2 w-[300px] md:w-auto'>
            <h1 className='font-semibold  text-lg'>Contáctame</h1>
            <div>  
              <p className=''>tulsi@tutitips.com</p>
              <p className=''>(506) 8784-5969</p>
            </div>
            <div className='flex gap-2 mt-1'>
              <a href="/">
                <img src={instagram} alt="instagram link" width={40} height={40} />
              </a>
              <a href="/">
                <img src={whatsapp} alt="whatsapp link" width={40} height={40} />
              </a>
              <a href="/">
                <img src={facebook} alt="facebook link" width={40} height={40} />
              </a>
            </div>
          </div>
          <div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d25506.130537568824!2d-84.06222117479629!3d9.909207811165041!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses!2scr!4v1708147335594!5m2!1ses!2scr"
              width="300"
              height="225"
              style={{ border: '0' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className='rounded-md'
            >
            </iframe>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SectionWrapper(Contacto, 'contacto');