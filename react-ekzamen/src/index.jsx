// index.jsx — точка входа (в методичке это файл src/index.js).
// Файлы .jsx — это те же .js, просто в них есть JSX (HTML внутри JavaScript).
import React from 'react'; // подключаем библиотеку React
import ReactDOM from 'react-dom/client'; // Импорт библиотеки для работы с DOM (рисует React на настоящей странице)
import './index.css'; // подключаем файл со стилями
import App from './App'; // Импорт главного компонента из файла App.jsx

// 1. Находим корневой DOM-элемент из index.html
const rootElement = document.getElementById('root'); // ищем на странице <div id="root">

// 2. Создаем "корень" React
const root = ReactDOM.createRoot(rootElement); // говорим React: «этот div — твой, управляй им»

// 3. Рендерим наш компонент <App /> ВНУТРЬ этого корневого элемента
root.render(<App />); // рисуем компонент App внутри <div id="root">
