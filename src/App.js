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
      {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#dde3ee" fill-opacity="1" d="M0,64L40,101.3C80,139,160,213,240,229.3C320,245,400,203,480,192C560,181,640,203,720,192C800,181,880,139,960,154.7C1040,171,1120,245,1200,266.7C1280,288,1360,256,1400,240L1440,224L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path></svg>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#dde3ee" fill-opacity="1" d="M0,64L40,101.3C80,139,160,213,240,229.3C320,245,400,203,480,192C560,181,640,203,720,192C800,181,880,139,960,154.7C1040,171,1120,245,1200,266.7C1280,288,1360,256,1400,240L1440,224L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"></path></svg> */}
      
      <Experience/>
      
      <Education/>
      <Skills/>
      <Contact/>
      

     
    </div>
  );
}

export default App;
