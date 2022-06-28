import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';
import Skills from './components/Skills';

function App() {
  return (
    <div className="App">
      <Header/>
      <Home/>
      <About/>
      <Skills/>
      <Portfolio/>
      <Resume/>
      {/* <Contact/> */}
      <Footer/>
    </div>
  );
}

export default App;
