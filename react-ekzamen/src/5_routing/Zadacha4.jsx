// Работа 5. Роутинг — Задача 4. Регистрируем все маршруты
// Добавить в App.js маршруты к компонентам Masters и Booking.

import { BrowserRouter, Routes, Route, Link } from "react-router-dom"; // части роутинга

function Home() { // главная страница
  return <h1>Добро пожаловать в салон "Golden Scissors"!</h1>; // приветствие
} // конец Home

function Navbar() { // меню
  return ( // что показать
    <nav> {/* меню */}
      <Link to="/">Главная</Link> |{" "} {/* ссылка на главную */}
      <Link to="/masters">Мастера</Link> |{" "} {/* ссылка на мастеров */}
      <Link to="/booking">Запись</Link> {/* ссылка на запись */}
    </nav> // конец меню
  ); // конец return
} // конец Navbar

function Masters() { // страница мастеров (задача 3)
  const masters = [ // массив мастеров
    { name: "Анна", skill: "Парикмахер-стилист" }, // мастер
    { name: "Игорь", skill: "Барбер" }, // мастер
    { name: "Мария", skill: "Колорист" }, // мастер
  ]; // конец массива

  return ( // что показать
    <div> {/* обёртка */}
      <h2>Наши мастера</h2> {/* заголовок */}
      <ul> {/* список */}
        {masters.map((m, i) => ( // для каждого мастера
          <li key={i}>{m.name} — {m.skill}</li> // пункт: имя — специализация
        ))} {/* конец map */}
      </ul> {/* конец списка */}
    </div> // конец обёртки
  ); // конец return
} // конец Masters

function Booking() { // простая страница записи
  return <h2>Онлайн-запись на стрижку</h2>; // пока только заголовок
} // конец Booking

function App() { // главный компонент
  return ( // что показать
    <BrowserRouter> {/* включаем роутинг */}
      <Navbar /> {/* меню вне Routes — видно на всех страницах */}
      <Routes> {/* список маршрутов */}
        <Route path="/" element={<Home />} /> {/* "/" -> главная */}
        <Route path="/masters" element={<Masters />} /> {/* "/masters" -> мастера */}
        <Route path="/booking" element={<Booking />} /> {/* "/booking" -> запись */}
      </Routes> {/* конец списка */}
    </BrowserRouter> // конец роутинга
  ); // конец return
} // конец App

export default App; // отдаём наружу

// Ожидаемый результат: каждая ссылка из меню открывает соответствующую страницу.
