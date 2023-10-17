import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Intro from './Components/Intro/Intro';
import Skills from './Components/Skills/Skills';
import Works from './Components/Works/Works';
import Contact from './Components/Contact/Contact';

function App() {
  return (
    <div>
      <Navbar/>
      <Intro/>
      <Skills/>
      <Works/>
      <Contact/>
    </div>
  );
}

export default App;
