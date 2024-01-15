import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./App.css"
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
function App() {

  return (
    <>
     <Navbar/>
     <Home/>
     <About/>
     <Projects/>
     <Contact/>
     <Footer/>
    </>
  )
}

export default App;
