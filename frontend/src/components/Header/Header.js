import { useState } from 'react';
import './Header.scss';
import logo from '../../images/my-photo.jpeg';
import { RxHamburgerMenu } from 'react-icons/rx';
import { IoClose } from 'react-icons/io5';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className='header' id='home'>
      <div className='header__container'>
        <div className='header__left'>
          <a href='#home'>
            <img src={logo} alt='logo' className='header__left-logo' />
          </a>
          <p className='header__left-text'>pikalova*</p>
        </div>

        <p
          className='header__center'
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span className='header__center-label'>Menu</span>
          {isMenuOpen && (
            <nav className='header__nav'>
              <ul className='header__nav-list'>
                <li className='header__nav-item'>
                  <a href='#about'>About me</a>
                </li>
                <li className='header__nav-item'>
                  <a href='#projects'>Projects</a>
                </li>
                <li className='header__nav-item'>
                  <a href='#faq'>FAQ</a>
                </li>
                <li className='header__nav-item'>
                  <a href='#contact'>Work together</a>
                </li>
              </ul>
            </nav>
          )}
        </p>
        <a href='#projects' className='header__button'>
          My projects
        </a>

        <button
          className='header__burger'
          onClick={() => setIsMobileMenuOpen(true)}
        >
          <RxHamburgerMenu />
        </button>
      </div>
      {isMobileMenuOpen && (
        <div className='header__mobile-menu'>
          <button
            className='header__mobile-close'
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <IoClose />
          </button>
          <nav className='header__mobile-nav'>
            <ul className='header__mobile-list'>
              <li>
                <a href='#about' onClick={() => setIsMobileMenuOpen(false)}>
                  About me
                </a>
              </li>
              <li>
                <a href='#projects' onClick={() => setIsMobileMenuOpen(false)}>
                  Projects
                </a>
              </li>
              <li>
                <a href='#faq' onClick={() => setIsMobileMenuOpen(false)}>
                  FAQ
                </a>
              </li>
              <li>
                <a href='#contact' onClick={() => setIsMobileMenuOpen(false)}>
                  Work together
                </a>
              </li>
            </ul>
          </nav>
          <a
            href='#projects'
            className='header__mobile-btn'
            onClick={() => setIsMobileMenuOpen(false)}
          >
            My projects
          </a>
        </div>
      )}
    </header>
  );
}

export default Header;
