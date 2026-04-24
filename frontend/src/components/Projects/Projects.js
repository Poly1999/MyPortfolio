import './Projects.scss';
import first from '../../images/drink-master-first.jpeg';
import second from '../../images/drink-master-second.jpeg';
import chat from '../../images/chat.jpeg';
import dog from '../../images/dog-club.jpeg';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';

import { HiArrowLeft, HiArrowRight } from 'react-icons/hi';

import { useRef } from 'react';

function Projects() {
  const swiperRef = useRef(null);

  return (
    <section className='projects' id='projects'>
      <h2 className='projects__title'>Projects</h2>
      <Swiper
        onSwiper={swiper => {
          swiperRef.current = swiper;
        }}
        spaceBetween={30}
        slidesPerView={1}
        className='projects__swiper'
      >
        <SwiperSlide>
          <div className='projects__container'>
            <div className='projects__left'>
              <div className='projects__left-tech'>
                <p className='projects__left-tech-content'>#react</p>
                <p className='projects__left-tech-content'>#node.js</p>
                <p className='projects__left-tech-content'>#socketio</p>
                <p className='projects__left-tech-content'>#mongoDB</p>
                <p className='projects__left-tech-content'>#zustand</p>
                <p className='projects__left-tech-content'>#jwt</p>
                <p className='projects__left-tech-content'>#tailwind</p>
              </div>
              <p className='projects__left-text'>
                Chatify — Real-Time Chat App with Socket.io & Auth
              </p>
              <a
                href='https://mychatify-app.vercel.app/'
                className='projects__left-button'
              >
                See project
              </a>
            </div>

            <div className='projects__right'>
              <div className='projects__right-maket'>
                <img src={chat} alt='chat-screen' />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='projects__container'>
            <div className='projects__left'>
              <div className='projects__left-tech'>
                <p className='projects__left-tech-content'>#react</p>
                <p className='projects__left-tech-content'>#node.js</p>
                <p className='projects__left-tech-content'>#express</p>
                <p className='projects__left-tech-content'>#mongoDB</p>
                <p className='projects__left-tech-content'>#redux</p>
                <p className='projects__left-tech-content'>#jwt</p>
                <p className='projects__left-tech-content'>#restapi</p>
              </div>
              <p className='projects__left-text'>
                Drink Master — Full Stack Cocktail App with Auth & CRUD
              </p>
              <a
                href='https://mydrinkmaster.vercel.app/welcome'
                className='projects__left-button'
              >
                See project
              </a>
            </div>

            <div className='projects__right'>
              <div className='projects__right-maket'>
                <img
                  src={first}
                  alt='first-screen'
                  className='projects__right-img'
                />
                <img
                  src={second}
                  alt='second-screen'
                  className='projects__right-img'
                />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='projects__container'>
            <div className='projects__left'>
              <div className='projects__left-tech'>
                <p className='projects__left-tech-content'>#react</p>
                <p className='projects__left-tech-content'>#node.js</p>
                <p className='projects__left-tech-content'>#express</p>
                <p className='projects__left-tech-content'>#mongoDB</p>
              </div>
              <p className='projects__left-text'>
                Dog Club — React Pet Store App with Reviews & Shopping Cart
              </p>
              <a
                href='https://dogclub.vercel.app/'
                className='projects__left-button'
              >
                See project
              </a>
            </div>

            <div className='projects__right'>
              <div className='projects__right-maket'>
                <img src={dog} alt='dog-screen' />
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
      <div className='projects__arrows'>
        <button
          type='button'
          className='projects__arrow'
          onClick={() => swiperRef.current?.slidePrev()}
        >
          <HiArrowLeft />
        </button>

        <button
          type='button'
          className='projects__arrow'
          onClick={() => swiperRef.current?.slideNext()}
        >
          <HiArrowRight />
        </button>
      </div>
    </section>
  );
}

export default Projects;
