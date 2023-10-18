// App.js
import React from 'react';
import Home  from './composants/home';
import NavBar from './composants/NavBar';
import Contact from './composants/Contact';
import Footer from './composants/Footer';
/*import './styles/App.css';
import Home from './components/Home';
import Services from './components/Services';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Skills from './components/Skills';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

*/
function App() {
  return (
    <div className="App container">
      <NavBar/>
      <Home/>
      <Contact/>
      <Footer/>


      { /* <Navbar/>
      <Home />
      <Services />
      <Projects />
      <Contact />
      <Skills />
      <Footer/> 
  */}
    </div>
  );
}

export default App;
