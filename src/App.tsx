
import {Route, Routes} from "react-router-dom";


import NavBar from "./components/NavBar/NavBar";
import HeroSection from './components/HeroSection/HeroSection';
import Projects from './components/Projects/Projects';
import Contacts from './components/Contacts/Contacts';

import './index.css'
import Footer from "./components/Footer/Footer";




function App() {


  return (
  <>
      <NavBar/>
      <Routes>
        <Route path="/" element={<HeroSection/>} />
        <Route path="/projects" element={<Projects/>}/>
        <Route path="/contacts" element={<Contacts/>}/>
      </Routes>
      <Footer/>
      
  </>
  )
}

export default App
