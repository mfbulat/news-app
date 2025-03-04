# 📰 News App

A mobile-friendly **React + Redux** news application that displays the latest news articles from the **New York Times API**. 
The project follows a **test assignment** for the React Developer position at **Ketopay**.

### 📌 Test Assignment Requirements

- ✅ **Use React + Redux**
- ✅ **Use TypeScript**
- ✅ **Mobile-first design** (Figma layout)
- ✅ **Load more news articles by date**
- ✅ **Auto-refresh new articles every 30 seconds**
- ✅ **Clicking a news article opens the New York Times website**
- ✅ **No restrictions on third-party libraries**

### 🎨 UI Design

The design mockup is available in **Figma**:  
🔗 [Figma Link](https://www.figma.com/file/sc2xxWzzgeeFgW7MgMjpYT/Besider---React-тестовое?type=design&node-id=0-1&mode=design&t=U2Y6w3zdzS5bahWf-0)

---

## 📂 Folder Structure
This project follows a simple and minimal folder structure since it's a small application. 
The structure is easy to navigate and keeps concerns separated.

news-app/
├── public/
│   └── assets/
│       ├── fonts/
│       ├── images/
├── pages/
│   ├── home
│   ├── news
│   ├── about
│   ├── 5+ Other pages
├── src/
│   ├── assets/
│   |   ├── images/
│   |   ├── icons/
│   ├── components/
│   |   ├── Footer/
│   |   ├── Header/
│   |   ├── Navbar/
│   |   ├── NewsHeader/
│   |   ├── NewsItem/
│   |   ├── NewsRow/
│   |   ├── Portal/
│   |   ├── Spinner/
│   |   └── Includes reusable UI components
│   ├── hooks/
│   ├── mocks/
│   ├── services/
│   ├── store/
│   ├── styles/
│   ├── types/
│   ├── utils/
│   |   ├── __api__/
│   |   |   ├── API functions and requests
│   ├── App.tsx
│   ├── main.tsx
├── .env
├── .env.local
├── index.html
├── eslint.config.js
├── .eslintrc.json
├── package.json
├── package-lock.json
├── tsconfig.app.json
├── tsconfig.json
├── tsconfig.node.json
├── vite.config.ts
└── README.md

---

## 🚀 Getting Started

### 1️⃣ Install Dependencies

npm install

### 2️⃣ Run Development Server

npm run dev

### 3️⃣ Build for Production

npm run build

### 4️⃣ Preview Production Build

npm run preview

---

## ⚙️ API Integration

### 📰 New York Times API

The app fetches news from the **New York Times Archive API**:

🔗 [API Documentation](https://developer.nytimes.com/docs/archive-product/1/routes/{year}/{month}.json/get)

Example API request:

https://api.nytimes.com/svc/archive/v1/{year}/{month}.json?api-key=YOUR_API_KEY

Here's an updated **.env** section for the README:

---

## 🔑 Environment Variables

This project requires an **API key** from the **New York Times Archive API**. 
You can use the default API key or create a `.env.local` file if the default doesn't work.

### ✅ Default API Key

By default, the project uses:
VITE_API_KEY=vEJwp3nmtqMIO6FDqQwyQdjbTzJcbdAh

### 🔄 Alternative API Key

If the default key doesn’t work, create a `.env.local` file and use:
VITE_API_KEY=8NvflMwKM5J8uNHxF99ISkNptXyif9h5

Make sure to restart the development server after changing the `.env.local` file:

npm run dev

---

This ensures users know how to configure their environment variables properly. Let me know if you want any changes! 😊🚀

---

## 📦 Dependencies

### ✅ Main Dependencies

| Library               | Version |
|----------------------|---------|
| **React**            | ^19.0.0 |
| **React DOM**        | ^19.0.0 |
| **React Router DOM** | ^7.2.0  |
| **Redux Toolkit**    | ^2.6.0  |
| **React Redux**      | ^9.2.0  |
| **Axios**            | ^1.8.1  |
| **Day.js**           | ^1.11.13 |
| **React Virtualized** | ^9.22.6 |
| **Sass**             | ^1.85.1 |

### 🛠 Development Dependencies

| Library                 | Purpose |
|-------------------------|---------|
| **ESLint**              | Linting |
| **Prettier**            | Formatting |
| **TypeScript**          | Type safety |
| **Vite**                | Build tool |
| **@reduxjs/toolkit**    | State management |
| **@types/react**        | TypeScript types for React |

---

## 🎯 Features

- 📱 **Fully responsive** (mobile-first layout)
- 🔄 **Auto-refresh news every 30 seconds**
- 📆 **Load more news by date**
- 🔗 **Click on news to visit New York Times**
- 🌎 **Optimized performance with React Virtualized**
- 🚀 **Fast build with Vite + TypeScript**
- ✅ **Code linting & formatting with ESLint + Prettier**

---

## 🛠 Development

### ✅ Linting

npm run lint

### ✅ Fix Lint Errors

npm run lint:fix

### ✅ Format Code

npm run format
