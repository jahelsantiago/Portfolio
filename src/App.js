import './App.css';
import NavBar from './Components/NavBar';
import Header from './Components/Header';
import Projects from './Components/Projects';
import Education from './Components/Education';
import Experience from './Components/Experience';
import Skills from './Components/Skills';
import Contact from './Components/Contact';

function App() {
  return (
    <div className="App">
      <NavBar/>      
      <Header/>
      <Projects/>
      <Experience/>
      <Education/>
      <Skills/>
      <Contact/>
      

     
    </div>
  );
}

export default App;
