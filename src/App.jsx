import { BrowserRouter } from "react-router-dom";
import { Navbar, Hero, Tulsi, Servicios, Agendar, Testimonios, FAQ, Contacto } from './components';
import{
whatsapp
} from './assets';


const App = () => {

  return (
    <BrowserRouter>
      <a href="https://api.whatsapp.com/send?phone=50687845969" class="btn-wsp" target="_blank">
        {/* <image src={whatsapp} alt="" class="fa" /> */}
        <i class="fa fa-whatsapp"></i>
      </a>
      <div className="relative z-0">
        <div className="bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <section className="h-auto bg-tul-serv-mobile md:bg-tul-serv bg-cover bg-center">
          <Tulsi />
          <Servicios />
        </section>
        <Agendar />
        <Testimonios />
        <FAQ />
        <Contacto />
      </div>
    </BrowserRouter>
  )
}

export default App
