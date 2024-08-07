import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
  Navbar,
  Hero,
  Tulsi,
  Taller,
  Servicios,
  Agendar,
  Testimonios,
  FAQ,
  Contacto,
  Blog,
  BlogThumbnail,
  BlogList,
} from "./components";
import { whatsapp } from "./assets";
import { blogPosts } from "./blogData";

const App = () => {
  return (
    <Router>
      <a
        href="https://api.whatsapp.com/send?phone=50687845969"
        className="btn-wsp"
        target="_blank"
      >
        <i className="fa fa-whatsapp"></i>
      </a>
      <div className="relative z-0 overflow-x-hidden">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog/:id" element={<Blog />} />
        </Routes>
      </div>
    </Router>
  );
};

const Home = () => (
  <>
    <div className="bg-cover bg-no-repeat bg-center">
      <Navbar />
      <Hero />
    </div>
    <section className="h-auto bg-tul-serv-mobile md:bg-tul-serv bg-cover bg-center">
      <Tulsi />
      <Taller />
      <Servicios />
    </section>
    <Agendar />
    {/* <div className="blog-section bg-blog-sec-bg mx-auto h-screen bg-cover">
      {blogPosts.map((post) => (
        <BlogThumbnail key={post.id} post={post} />
      ))}
    </div> */}
    <BlogList />
    <Testimonios />
    <FAQ />
    <Contacto />
  </>
);

export default App;
