import './styles/global.scss';
import { Toaster } from 'react-hot-toast';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import FAQ from './components/FAQ/FAQ';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div>
      <Toaster position='top-right' />
      <Header />
      <Hero />
      <About />
      <Projects />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;
