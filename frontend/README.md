# 👩‍💻 Polina Pikalova — Fullstack Developer Portfolio

A modern, responsive single-page portfolio website built from scratch to showcase my projects, skills, and experience as a Fullstack Developer.

🌐 **Live Demo:** [myself-polina.vercel.app](https://myself-polina.vercel.app)

---

## ✨ Features

- Responsive design for mobile, tablet, and desktop
- Smooth scroll navigation with anchor links
- Burger menu for mobile and tablet devices
- Accordion sections (About Me, Role, Education, FAQ)
- Skills slider with Swiper.js
- Projects showcase with slider and GitHub links
- Contact form with email validation and Nodemailer integration
- Success modal after form submission
- Toast notifications for errors
- Deployed frontend on Vercel, backend on Render

---

## 🛠 Tech Stack

### Frontend

| Technology       | Description                 |
| ---------------- | --------------------------- |
| React (CRA)      | UI library                  |
| React Router DOM | Anchor-based navigation     |
| Swiper.js        | Skills and Projects sliders |
| Framer Motion    | Accordion animations        |
| React Icons      | Icon library                |
| React Hot Toast  | Notifications               |
| Sass/SCSS        | Component-based styling     |

### Backend

| Technology        | Description                           |
| ----------------- | ------------------------------------- |
| Node.js + Express | REST API server                       |
| Nodemailer        | Email notifications from contact form |
| CORS              | Cross-origin resource sharing         |
| dotenv            | Environment variables                 |

---

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- Gmail account with App Password enabled

### Installation

1. Clone the repository:

```bash
git clone https://github.com/Poly1999/MyPortfolio
```

2. Install frontend dependencies:

```bash
cd frontend
npm install
```

3. Install backend dependencies:

```bash
cd backend
npm install
```

4. Create `.env` file in the `backend` folder:

```
EMAIL_USER=your@gmail.com
EMAIL_PASS=your_app_password
PORT=5001
```

5. Start the backend:

```bash
cd backend
npm run dev
```

6. Start the frontend:

```bash
cd frontend
npm start
```

---

## 📁 Project Structure

```
portfolio/
├── frontend/          # React application
│   ├── src/
│   │   ├── components/
│   │   │   ├── Header/
│   │   │   ├── Hero/
│   │   │   ├── About/
│   │   │   ├── Projects/
│   │   │   ├── FAQ/
│   │   │   └── Footer/
│   │   ├── images/
│   │   └── styles/
│   └── package.json
└── backend/           # Express server
    ├── server.js
    ├── .env
    └── package.json
```

---

## 📬 Contact

- 📧 Email: [pikalova.developer@gmail.com](mailto:pikalova.developer@gmail.com)
- 💼 LinkedIn: [polina-pikalova](https://www.linkedin.com/in/polina-pikalova-366148375)
- 🐙 GitHub: [Poly1999](https://github.com/Poly1999)

---

_Built with ❤️ by Polina Pikalova_
