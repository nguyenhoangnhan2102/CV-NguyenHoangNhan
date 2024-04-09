
import './App.scss';
import Contact from './Contact/Contact';
import Education from './Education/Education';
import Footer from './Footer/Footer';
import Home from './Home/Home';
import Nav from './Nav/Nav';
import Skill from './Skill/Skill';


function App() {
  // window.onload = function () {
  //   window.scrollTo(0, 0);
  // }
  return (
    <div className="App" id="home">
      <Nav />
      <header className="App-header">
        <Home />
        <Education />
        <Skill />
        <Contact />
        <Footer />
      </header>
    </div>
  );
}

export default App;
