import './App.css';
import NavBar from './Components/NavBar';
import Header from './sections/header/Header';
import Projects from './sections/projects/Projects';
import Education from './sections/education/Education';
import Experience from './sections/expirience/Experience';
import Skills from './sections/skills/Skills';
import Contact from './sections/contact/Contact';

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
