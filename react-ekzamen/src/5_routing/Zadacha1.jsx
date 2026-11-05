// Работа 5. Роутинг в React (салон «Golden Scissors») — Задача 1. Главная страница салона
// Создать App.js, подключить BrowserRouter, Routes, Route. Компонент Home выводит приветствие.

import { BrowserRouter, Routes, Route } from "react-router-dom"; // берём из библиотеки роутинга три части

function Home() { // компонент главной страницы
  return <h1>Добро пожаловать в салон "Golden Scissors"!</h1>; // заголовок-приветствие
} // конец Home

function App() { // главный компонент
  return ( // что показать
    <BrowserRouter> {/* включаем роутинг: следим за адресом в браузере */}
      <Routes> {/* «коробка» для всех маршрутов — показывает один подходящий */}
        <Route path="/" element={<Home />} /> {/* если адрес "/" (главная) — показать Home */}
      </Routes> {/* конец списка маршрутов */}
    </BrowserRouter> // конец роутинга
  ); // конец return
} // конец App

export default App; // отдаём наружу

// Ожидаемый результат: при открытии / отображается «Добро пожаловать в салон "Golden Scissors"!»
