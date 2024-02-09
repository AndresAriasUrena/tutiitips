import { BrowserRouter } from "react-router-dom";
import { Navbar, Hero, Tulsi, Servicios, Agendar, Testimonios, ArteTerapia, FAQ, Contacto} from './components';


const App = () => {

  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar/>
          <Hero/>
        </div>
        <Tulsi/>
        <Servicios/>
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
