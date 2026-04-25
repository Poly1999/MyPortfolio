import './Footer.scss';
import logo from '../../images/my-photo.jpeg';
import { useState } from 'react';
import { IoIosClose } from 'react-icons/io';

function Footer() {
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const validateEmail = value => {
    const regex = /^\w+(\.\w+)?@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
    return regex.test(value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (!validateEmail(email)) {
      setEmailError('Invalid email, try again');
      return;
    }
    setEmailError('');
    setIsModalOpen(true);
  };

  return (
    <footer className='footer' id='contact'>
      <div className='footer__header'>
        <a href='#home'>
          <img src={logo} alt='logo' className='footer__logo' />
        </a>
        <p className='footer__text'>
          Let's <span>work</span>
        </p>
        <p className='footer__text-span'>together</p>
      </div>

      <form onSubmit={handleSubmit} className='footer__form'>
        <div className='footer__input-wrapper'>
          <input
            placeholder='example@gmail.com'
            value={email}
            onChange={e => setEmail(e.target.value)}
            className={
              emailError ? 'input--error' : email ? 'input--success' : ''
            }
          />
          {emailError && <span className='footer__error'>{emailError}</span>}
          {!emailError && email && validateEmail(email) && (
            <span className='footer__success'>Success!</span>
          )}
        </div>
        <input placeholder='comments' />

        <button type='submit'>Send</button>
      </form>

      {isModalOpen && (
        <div
          className='footer__modal-backdrop'
          onClick={() => setIsModalOpen(false)}
        >
          <div className='footer__modal' onClick={e => e.stopPropagation()}>
            <button
              className='footer__modal-close'
              onClick={() => setIsModalOpen(false)}
            >
              <IoIosClose className='footer__modal-icon' />
            </button>
            <h2 className='footer__modal-title'>
              Thank you for your interest in cooperation!
            </h2>
            <p className='footer__modal-text'>
              I will get back to you shortly. Please stay in touch.
            </p>
          </div>
        </div>
      )}

      <div className='footer__contact'>
        <a href='mailto:pikalova.developer@gmail.com'>
          pikalova.developer@gmail.com
        </a>
        <a href='sms:+19546998140'>+1(954)699-8140</a>
      </div>
    </footer>
  );
}

export default Footer;
