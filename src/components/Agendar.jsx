import React from 'react';
import { SectionWrapper } from '../hoc';

const Agendar = () => {
  return (
    <section className='bg-agendar bg-cover bg-center'>
      <div className='max-w-[430px] md:max-w-[768px] mx-auto'>
        <iframe 
          src="https://app.simplymeet.me/tuti?is_widget=1&view=compact" 
          style={{ 
            width: '100%', 
            height: '950px'  
          }} 
          className='md:h-[80vh] py-3 h-[1000px]'  
          frameBorder="1" 
          scrolling="yes">
        </iframe>
      </div>
    </section>
  );
}

export default SectionWrapper(Agendar, 'agenda');
