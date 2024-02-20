import React from 'react'
import ArteTerapia from './ArteTerapia'
import { SectionWrapper } from '../hoc';
import { libroBanner, quote } from '../assets'

const Testimonios = () => {
  return (
    <div>
      <div className='max-h-20 overflow-hidden'>
        <img src={libroBanner} alt="Libro" className='w-full h-auto mx-auto' />
      </div>
      <div className='bg-testimonios-gr w-full'>
        <div className='mx-auto flex flex-col md:flex-row justify-center items-center max-w-[768px]'>
          <div className='w-full h-96 md:w-[50%] bg-white flex flex-col '>
            <div className='flex w-full bg-white h-[35%]'>
              <div className='w-[80%] text-primary font-semibold text-right p-2 text-lg self-end'>Lorem ipsum dolor sit amet consectetur adipisicing elit sed.</div>
              <div className='w-[20%] bg-primary flex flex-col'>
                <div className='h-[50%]'></div>
                <div className='h-[50%] bg-secondary p-2 text-4xl text-white'>
                  <img src={quote} alt="testimonio cita" width={42} height={42} />
                </div>
              </div>
            </div>
            <div className='w-full '>
              <p className='text-primary text-right p-8 text-sm'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
              <h2 className='text-primary text-right font-semibold px-8'>Roberto Cordero</h2>
              <p className='text-primary text-right px-8 text-sm'>Fundador Luciernaga Producciones</p>
            </div>
          </div>
          <div className='w-full h-96 md:w-[50%] bg-verdeclaro'>
            <ArteTerapia/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SectionWrapper(Testimonios, 'testimonios');