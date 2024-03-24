
import './App.scss';
import Contact from './Contact/Contact';
import Education from './Education/Education';
import Home from './Home/Home';
import Nav from './Nav/Nav';
import Skill from './Skill/Skill';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Nav />
        <Home />
        <Education />
        <Skill />
        <Contact />
      </header>
    </div>
  );
}

export default App;
