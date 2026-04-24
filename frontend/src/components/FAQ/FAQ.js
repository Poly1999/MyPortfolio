import { useState } from 'react';
import './FAQ.scss';
import { HiChevronUp, HiChevronDown } from 'react-icons/hi';

function FAQ() {
  const [openItems, setOpenItems] = useState({});

  const toggleItem = index => {
    setOpenItems(prev => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const faqData = [
    {
      question: 'What technologies do I work with?',
      answer:
        'I work with React, JavaScript, Node.js, Express, MongoDB, REST API, Redux Toolkit, Zustand, Axios, React Router, CSS, SCSS, Tailwind, Cloudinary, JWT authentication, and I also explored Next.js in a small fullstack project.',
    },
    {
      question: 'What kind of projects have I built?',
      answer:
        'I have built fullstack projects such as a real-time chat app, a cocktail app with authentication and CRUD features, and a pet store app with products, reviews, shopping cart, image uploads, and a connected database.',
    },
    {
      question: 'Am I open to junior developer opportunities?',
      answer:
        'Yes, I am open to Junior Frontend, Junior Fullstack, internship, trainee, part-time, contract, and entry-level developer opportunities.',
    },
    {
      question: 'Do I have backend experience?',
      answer:
        'Yes. I have experience building backend APIs with Node.js and Express, connecting MongoDB databases, creating authentication logic, handling protected routes, working with file uploads, and deploying backend apps. I also tried building a small project with Next.js to better understand fullstack architecture and server-side features.',
    },
    {
      question: 'Do I have deployment experience?',
      answer:
        'Yes. I have deployed fullstack applications using Vercel for the frontend and Render for the backend. I also have experience working with environment variables, CORS settings, API URLs, and production deployment issues.',
    },
    {
      question: 'What am I currently improving?',
      answer:
        'I am currently improving my fullstack development skills, working on cleaner code structure, better UI implementation, responsive layouts, authentication flows, backend logic, and real-world project deployment.',
    },
  ];
  return (
    <section className='faq' id='faq'>
      <h2 className='faq__title'>FAQ</h2>

      <div className='faq__list'>
        {faqData.map((item, index) => (
          <div className='faq__item' key={index}>
            <div className='faq__question' onClick={() => toggleItem(index)}>
              <p>{item.question}</p>

              <button type='button' className='faq__button'>
                {openItems[index] ? (
                  <HiChevronUp className='faq__icon' />
                ) : (
                  <HiChevronDown className='faq__icon' />
                )}
              </button>
            </div>
            <div className={`faq__content ${openItems[index] ? 'active' : ''}`}>
              <p className='faq__answer'>{item.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default FAQ;
