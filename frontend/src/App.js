import './styles/global.scss';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Projects from './components/Projects/Projects';

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <About />
      <Projects />
    </div>
  );
}

export default App;
