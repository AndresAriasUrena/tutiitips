import React from 'react'
import { motion } from 'framer-motion';
import { SectionWrapper } from '../hoc';
import { tulsi } from '../assets';

import { slideIn } from '../utils/motion';

const Tulsi = () => {
  return (
    <div className='h-auto lg:max-w-[80%] lg:mx-auto'>
      <div className='md:flex md:flex-row-reverse mx-auto md:items-center'>
        <div className='min-h-[45vh] md:z-10 md:min-h-0 md:w-full'>
          <motion.div 
            variants={slideIn('left', 'tween', 0.2, 1)}
            className='relative z-10 top-16 md:static w-[90%] text-primary bg-pink-gr md:bg-secondary drop-shadow-md p-4 md:p-6 rounded'
          >
            <h3 className='text-lg md:text-xl font-semibold pb-2 md:pb-4'>Disfruto cuestionar mis creencias de hoy, pero cuando debatir me lleva a sentir que no estoy segura de nada….</h3>
            <p className='text-sm md:text-base leading-7 pb-2 md:pb-4'>Recuerdo que estoy segura del amor, somos amor, merecemos amor y vivimos desde el amor. Por eso deseo servirte con amor en la búsqueda de tu verdad, abrazarte y acompañarte en medio de los momentos oscuridad. <strong>En un mundo que nos enseña a reprimir, el dejarnos sentirlo todo es nuestra revolución.</strong></p>
            <h2 className='text-xl font-semibold pb-2 md:pb-4'>-Tulsi</h2>
          </motion.div>
        </div>
        <motion.div 
          variants={slideIn('right', 'tween', 0.2, 1)}
          className='min-h-[50vh] md:min-h-0 md:w-[100vw] flex justify-end'
        >
          <img 
            src={tulsi} 
            alt='Tulsi Bailando'
            className='relative md:left-8 -top-4 md:top-0 w-[90%] h-auto rounded'
          />
        </motion.div>
      </div>
    </div>
  )
}

export default SectionWrapper(Tulsi, 'tulsi');