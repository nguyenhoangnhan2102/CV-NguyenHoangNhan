
import './App.css';
import Nav from './Nav/Nav';
import Home from './Home/Home';
import Footer from './Footer/Footer';
import About from './About/About';
import Skill from './Skill/Skill';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Nav />
        <Home />
        <About />
        <Skill />
        <Footer />
      </header>
    </div>
  );
}

export default App;
