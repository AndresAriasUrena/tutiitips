import React from 'react'
import ArteTerapia from './ArteTerapia'
import { SectionWrapper } from '../hoc';
import { libroBanner, quote } from '../assets'

const Testimonios = () => {
  return (
    <div>
      <div className='max-h-30 overflow-hidden h-full'>
        <img src={libroBanner} alt="Libro" className='absolute w-full h-auto mx-auto' />
        <p className='relative text-tertiary text-center text-md w-[70%] p-24'> <strong>Cuando las emociones inundan mi razón, acudo a la poesía para plasmar mi fantasía.

          Abril es desnudar mis sentimientos y entregárselos al mundo, Abril es morir y resucitar entre mis letras, Abril es florecer y marchitarme…
          Una y otra vez…

          Con amor, Tul.</strong></p>
      </div>
      <div className='absolute bg-testimonios-gr w-full'>
        <div className='mx-auto flex flex-col md:flex-row justify-center items-center md:max-w-[780px]'>
          <div className='w-full h-96 md:w-[50%] bg-white flex flex-col '>
            <div className='flex w-full bg-white h-[35%]'>
              <div className='w-[80%] text-primary font-semibold text-right p-2 text-lg self-end'>Encontré en Tulsi la guía que estaba buscando.</div>
              <div className='w-[20%] bg-primary flex flex-col'>
                <div className='h-[50%]'></div>
                <div className='h-[50%] bg-secondary p-2 text-4xl text-white'>
                  <img src={quote} alt="testimonio cita" width={42} height={42} />
                </div>
              </div>
            </div>
            <div className='w-full '>
              <p className='text-primary text-right p-8 text-sm'>Cuando la cantidad de pensamientos que llegan a mi cabeza se llevan lo mejor de mi, Tulsi me ha ayudado a ordenarlos y me ha enseñado las herramientas para trabajar en mi por mi cuenta. Siento que puedo comunicarme mejor y de forma más asertiva gracias al acompañamiento de una gran psicóloga.</p>
              <h2 className='text-primary text-right font-semibold px-8'>Marcela Cascante</h2>
              <p className='text-primary text-right px-8 text-sm'>Co-fundadora Aurigital </p>
            </div>
          </div>
          <div className='w-full h-96 md:w-[50%] bg-verdeclaro'>
            <ArteTerapia />
          </div>
        </div>
      </div>
    </div>
  )
}

export default SectionWrapper(Testimonios, 'testimonios');