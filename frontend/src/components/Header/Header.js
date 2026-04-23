import { useState } from 'react';
import './Header.scss';
import logo from '../../images/my-photo.jpeg';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
      </div>
    </header>
  );
}

export default Header;
