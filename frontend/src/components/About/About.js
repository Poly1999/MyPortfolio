import { useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import './About.scss';
import photo from '../../images/my-photo.jpeg';
import { HiChevronUp, HiChevronDown, HiChevronRight } from 'react-icons/hi';

function About() {
  const [openItems, setOpenItems] = useState({
    about: true,
    role: false,
    education: false,
  });
  const toggleItem = item => {
    setOpenItems(prev => ({ ...prev, [item]: !prev[item] }));
  };
  const skills = [
    'HTML/CSS',
    'JavaScript',
    'React',
    'Node.js',
    'Express',
    'MongoDB',
    'Git',
    'GitHub',
    'REST API',
    'Figma',
    'React Native',
    'Soft skills',
    'Sass/SCSS',
  ];

  const swiperRef = useRef(null);

  return (
    <section className='about' id='about'>
      <div className='about__up'>
        <div className='about__up-right'>
          <p className='about__up-right-text'>
            I build modern and{' '}
            <span className='about__up-right-text-fun'>functional</span> web
            applications, combining clean frontend interfaces with reliable
            backend solutions.
            <br /> I'm passionate about turning ideas into real products and
            always looking for opportunities to grow as a{' '}
            <span className='about__up-right-text-full'>
              fullstack developer.
            </span>
          </p>
        </div>
        <div className='about__up-left'>
          <img src={photo} alt='my-photo' className='about__up-left-img' />
        </div>
      </div>
      <div className='about__accordion'>
        {/* About me */}
        <div className='about__accordion-item'>
          <div
            className='about__accordion-header'
            onClick={() => toggleItem('about')}
          >
            <p>About me</p>
            <button>
              {openItems.about ? (
                <HiChevronUp className='about__accordion-arrow' />
              ) : (
                <HiChevronDown className='about__accordion-arrow' />
              )}
            </button>
          </div>
          <AnimatePresence>
            {openItems.about && (
              <motion.div
                className='about__accordion-content'
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.4, ease: 'easeInOut' }}
              >
                <p>
                  I am Polina Pikalova, a Fullstack Developer with a strong
                  passion for building modern and functional web applications. I
                  enjoy working across the full stack — from crafting clean,
                  responsive and intuitive user interfaces to designing reliable
                  and scalable backend architectures using Node.js, Express and
                  MongoDB.
                  <br />
                  <br />
                  I am always eager to learn new technologies, write clean and
                  maintainable code, and find elegant solutions to complex
                  problems. I pay close attention to details and care deeply
                  about both the quality of code and the final user experience.
                  <br />
                  <br />I thrive in collaborative environments, communicate
                  openly and take pride in delivering products that are both
                  technically solid and visually polished. I am currently
                  actively looking for my professional opportunity where I can
                  contribute, grow and become part of a strong engineering team.
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        {/* Role */}
        <div className='about__accordion-item'>
          <div
            className='about__accordion-header'
            onClick={() => toggleItem('role')}
          >
            <p>Role</p>
            <button>
              {openItems.role ? (
                <HiChevronUp className='about__accordion-arrow' />
              ) : (
                <HiChevronDown className='about__accordion-arrow' />
              )}
            </button>
          </div>
          <AnimatePresence>
            {openItems.role && (
              <motion.div
                className='about__accordion-content'
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.4, ease: 'easeInOut' }}
              >
                <p>Fullstack Developer (React, Node.js, Express, MongoDB)</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        {/* Education */}
        <div className='about__accordion-item'>
          <div
            className='about__accordion-header'
            onClick={() => toggleItem('education')}
          >
            <p>Education</p>
            <button>
              {openItems.education ? (
                <HiChevronUp className='about__accordion-arrow' />
              ) : (
                <HiChevronDown className='about__accordion-arrow' />
              )}
            </button>
          </div>
          <AnimatePresence>
            {openItems.education && (
              <motion.div
                className='about__accordion-content'
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.4, ease: 'easeInOut' }}
              >
                <p>
                  2025-2026 / Fullstack Developer, Genius Space, Remote
                  <br />
                  2025 / Frontend Developer, Coursera, Remote
                  <br />
                  2016-2021 / Chemistry technologies, NTU "KhPI", Kharkiv
                  Ukraine
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
      <div className='about__skills'>
        <Swiper
          onSwiper={swiper => (swiperRef.current = swiper)}
          slidesPerView={'auto'}
          spaceBetween={16}
          loop={true}
        >
          {skills.map((skill, index) => (
            <SwiperSlide key={index}>
              <div className='about__skills-item'>
                <p>{skill}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <button onClick={() => swiperRef.current.slideNext()}>
          <HiChevronRight />
        </button>
      </div>
    </section>
  );
}
export default About;
