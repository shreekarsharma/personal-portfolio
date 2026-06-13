# Personal Portfolio Website

A full-stack personal portfolio website built using the MERN stack to showcase projects, skills, education, and experience.

## Features

* Responsive portfolio website
* Dark/Light mode toggle
* Dynamic project management using MongoDB
* Admin dashboard for adding and deleting projects
* Resume download functionality
* Contact section
* Project showcase with GitHub and Live Demo links
* Full-stack integration using React, Express, and MongoDB

## Tech Stack

### Frontend

* React.js
* Vite
* Tailwind CSS
* Axios
* React Router
* React Icons

### Backend

* Node.js
* Express.js

### Database

* MongoDB Atlas
* Mongoose

## Project Structure

```text
personal-portfolio/
│
├── client/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   ├── App.jsx
│   │   └── main.jsx
│
├── server/
│   ├── config/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   └── server.js
│
└── README.md
```

## Pages

### Home

* Hero Section
* About Section
* Education Section
* Experience Section
* Skills Section
* Projects Section
* Contact Section
* Footer

### Admin Dashboard

* Add New Projects
* View Existing Projects
* Delete Projects

## Database Schema

### Project

```javascript
{
  title: String,
  description: String,
  technologies: [String],
  githubUrl: String,
  liveUrl: String,
  image: String,
  featured: Boolean
}
```

## Installation

### Clone Repository

```bash
git clone https://github.com/shreekarsharma/personal-portfolio.git
cd personal-portfolio
```

### Backend Setup

```bash
cd server
npm install
```

Create a `.env` file:

```env
MONGO_URI=your_mongodb_connection_string
PORT=5000
```

Start backend:

```bash
npm run dev
```

### Frontend Setup

```bash
cd client
npm install
```

Create a `.env` file:

```env
VITE_API_URL=http://localhost:5000/api
```

Start frontend:

```bash
npm run dev
```

## Deployment

### Frontend

* Vercel

### Backend

* Render

### Database

* MongoDB Atlas

## Learning Outcomes

* React component architecture
* REST API development with Express
* MongoDB integration with Mongoose
* State management using React Hooks
* CRUD operations
* Deployment using Vercel and Render
* Full-stack application development

## Author

**Shreekar Sharma**

* GitHub: https://github.com/shreekarsharma
* LinkedIn: https://www.linkedin.com
