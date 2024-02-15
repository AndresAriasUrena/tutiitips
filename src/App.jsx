import { BrowserRouter } from "react-router-dom";
import { Navbar, Hero, Tulsi, Servicios, Agendar, Testimonios, ArteTerapia, FAQ, Contacto} from './components';


const App = () => {

  return (
    <BrowserRouter>
      <div className="relative z-0">
        <div className="bg-cover bg-no-repeat bg-center">
          <Navbar/>
          <Hero/>
        </div>
        <section className="h-auto bg-tul-serv-mobile md:bg-tul-serv bg-cover bg-center">
          <Tulsi/>
          <Servicios/>
        </section>
        <Agendar/>
        <Testimonios/>
        <ArteTerapia/>
        <FAQ/>
        <Contacto/>
      </div>
    </BrowserRouter>
  )
}

export default App
