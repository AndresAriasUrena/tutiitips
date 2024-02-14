import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";


import {styles} from '../style';
import { logo, hero } from '../assets';


const Hero = () => {
  return (
    <section>
      <div className="relative h-[95vh] md:h-[90vh] bg-hero-mobile md:bg-none bg-bottom bg-no-repeat bg-cover md:flex md:pt-32">
        <div className="px-8 md:px-16 flex flex-col gap-4 md:gap-8 text-center md:text-left items-center justify-center md:items-start md:w-[50%]">
          <img src={logo} alt='tutitips logo' className='w-24 h-24 object-contain mt-20 md:hidden'/>
          <p className="text-primary font-medium text-lg md:text-xl leading-10 tracking-wide">
            Te regalo mi escucha y herramientas para descubrir la magia que hay detrás de tus heridas emocionales.
          </p>
          <a href='#agenda' className='bg-primary md:bg-secondary py-2 px-6 w-max rounded-full hover:bg-verdeclaro text-tertiary hover:text-secondary'>Agendar una cita</a>
        </div>
        <div className="hidden md:w-[50%] md:flex justify-end">
          <div className="w-[90%] h-full bg-primary py-8 flex items-center">
            <img src={hero} alt="silla consultorio" className='-translate-x-12' />
          </div>
        </div>
      </div>
      <div className="absolute md:bottom-24 bottom-36 w-full flex justify-center items-center">
        <a href="#tulsi">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-primary flex justify-center items-start p-1">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-4 h-4 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  )
}

export default Hero