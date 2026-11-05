// Работа 5. Роутинг — Задача 8. Личный кабинет клиента
// Страница /account, где клиент видит свои записи. (Маршрут /account и ссылка в меню добавлены, чтобы страницу можно было открыть.)

import { useState } from "react"; // useState для формы записи
import { BrowserRouter, Routes, Route, Link, useParams } from "react-router-dom"; // части роутинга

function Home() { // главная страница
  return <h1>Добро пожаловать в салон "Golden Scissors"!</h1>; // приветствие
} // конец Home

function Navbar() { // меню
  return ( // что показать
    <nav> {/* меню */}
      <Link to="/">Главная</Link> |{" "} {/* ссылка на главную */}
      <Link to="/masters">Мастера</Link> |{" "} {/* ссылка на мастеров */}
      <Link to="/booking">Запись</Link> |{" "} {/* ссылка на запись */}
      <Link to="/account">Кабинет</Link> {/* ссылка на личный кабинет (чтобы проверить задачу) */}
    </nav> // конец меню
  ); // конец return
} // конец Navbar

function Masters() { // страница мастеров со ссылками (задача 7)
  const masters = [ // массив мастеров с id
    { id: 1, name: "Анна", skill: "Парикмахер-стилист" }, // мастер №1
    { id: 2, name: "Игорь", skill: "Барбер" }, // мастер №2
  ]; // конец массива
  return ( // что показать
    <ul> {/* список */}
      {masters.map((m) => ( // для каждого мастера
        <li key={m.id}> {/* пункт списка */}
          <Link to={`/masters/${m.id}`}>{m.name}</Link> {/* ссылка на профиль */}
        </li> // конец пункта
      ))} {/* конец map */}
    </ul> // конец списка
  ); // конец return
} // конец Masters

function MasterProfile() { // профиль мастера (задача 7)
  const { id } = useParams(); // достаём id из адреса
  return <h3>Профиль мастера #{id}</h3>; // показываем номер мастера
} // конец MasterProfile

function Booking() { // страница записи (задача 5)
  const [name, setName] = useState(""); // память для имени
  const [date, setDate] = useState(""); // память для даты

  return ( // что показать
    <div> {/* обёртка */}
      <h2>Онлайн-запись</h2> {/* заголовок */}
      <input // поле для имени
        type="text" // текст
        placeholder="Ваше имя" // подсказка
        value={name} // значение из памяти
        onChange={(e) => setName(e.target.value)} // при вводе обновляем память
      /> {/* конец поля */}
      <input // поле для даты
        type="date" // календарь
        value={date} // значение из памяти
        onChange={(e) => setDate(e.target.value)} // при выборе обновляем память
      /> {/* конец поля */}
      <button onClick={() => alert(`${name}, вы записаны на ${date}`)}> {/* окно с подтверждением */}
        Подтвердить {/* текст на кнопке */}
      </button> {/* конец кнопки */}
    </div> // конец обёртки
  ); // конец return
} // конец Booking

function Account() { // компонент «Личный кабинет»
  const bookings = [ // массив записей клиента
    { date: "2025-10-25", master: "Анна" }, // запись: дата и мастер
    { date: "2025-11-02", master: "Игорь" }, // вторая запись
  ]; // конец массива
  return ( // что показать
    <div> {/* обёртка */}
      <h2>Ваши записи</h2> {/* заголовок */}
      <ul> {/* список */}
        {bookings.map((b, i) => ( // для каждой записи: b — запись, i — номер
          <li key={i}>{b.date} — {b.master}</li> // пункт: «2025-10-25 — Анна»
        ))} {/* конец map */}
      </ul> {/* конец списка */}
    </div> // конец обёртки
  ); // конец return
} // конец Account

function NotFound() { // страница 404
  return <h2>404 — Страница не найдена</h2>; // сообщение
} // конец NotFound

function App() { // главный компонент
  return ( // что показать
    <BrowserRouter> {/* включаем роутинг */}
      <Navbar /> {/* меню */}
      <Routes> {/* список маршрутов */}
        <Route path="/" element={<Home />} /> {/* главная */}
        <Route path="/masters" element={<Masters />} /> {/* мастера */}
        <Route path="/masters/:id" element={<MasterProfile />} /> {/* профиль мастера */}
        <Route path="/booking" element={<Booking />} /> {/* запись */}
        <Route path="/account" element={<Account />} /> {/* НОВОЕ: личный кабинет */}
        <Route path="*" element={<NotFound />} /> {/* все остальные адреса — 404 */}
      </Routes> {/* конец списка */}
    </BrowserRouter> // конец роутинга
  ); // конец return
} // конец App

export default App; // отдаём наружу

// Ожидаемый результат: «Ваши записи: 2025-10-25 — Анна, 2025-11-02 — Игорь».
