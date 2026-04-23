import './Hero.scss';
import { FaGithub } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import background from '../../images/hero-background.png';

function Hero() {
  return (
    <section className='hero'>
      <h1 className='hero__title'>
        Hello. <br />
        I’m Fullstack developer <br />
        Polina Pikalova.
      </h1>
      <img src={background} alt='background' className='hero__background' />
      <div className='hero__contacts'>
        <a href='https://github.com/Poly1999' className='hero__contacts-icons'>
          <FaGithub className='hero__contacts-icon' />
        </a>
        <a
          href='https://www.linkedin.com/in/polina-pikalova-366148375'
          className='hero__contacts-icons'
        >
          <FaLinkedin className='hero__contacts-icon' />
        </a>

        <a href='mailto:pikalova.developer@gmail.com' className='hero__button'>
          pikalova.developer@gmail.com
        </a>
      </div>
    </section>
  );
}

export default Hero;
