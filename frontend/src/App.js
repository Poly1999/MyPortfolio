import './styles/global.scss';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import FAQ from './components/FAQ/FAQ';

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <About />
      <Projects />
      <FAQ />
    </div>
  );
}

export default App;
