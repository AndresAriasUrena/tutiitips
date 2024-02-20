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
              <p className=''>tulssdiaza@gmail.com</p>
              <p className=''>(+506) 8784-5969</p>
            </div>
            <div className='flex gap-4 mt-1'>
              <a href="https://www.instagram.com/tutiitips/">
                <img src={instagram} alt="instagram link" width={40} height={40} />
              </a>
              <a target='_blank' href="https://api.whatsapp.com/send?phone=50687845969&text=%C2%A1Hola!%20Quiero%20m%C3%A1s%20informaci%C3%B3n%20para%20agendar%20una%20sesi%C3%B3n%20de%20psicolog%C3%ADa%20%F0%9F%99%8F%F0%9F%8F%BB%E2%9C%A8">
                <img src={whatsapp} alt="whatsapp link" width={40} height={40} />
              </a>
              {/* <a href="/">
                <img src={facebook} alt="facebook link" width={40} height={40} />
              </a> */}
            </div>
          </div>
          <div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m12!1m8!1m3!1d2624.2939252844344!2d-84.12071000620885!3d9.956604129679597!3m2!1i1024!2i768!4f13.1!2m1!1sAvenida%2047%2C%20San%20Jos%C3%A9%2C%20Costa%20Rica!5e0!3m2!1sen!2scr!4v1708406698150!5m2!1sen!2scr"
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