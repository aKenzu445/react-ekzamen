// Работа 5. Роутинг — Задача 10. Защищённые маршруты (это и есть итоговое приложение целиком)
// Доступ к /account только после «авторизации». Если пользователь не вошёл — показать сообщение.

import { useState } from "react"; // useState для памяти
import { BrowserRouter, Routes, Route, Link, useParams, useNavigate } from "react-router-dom"; // части роутинга

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

function Masters() { // страница мастеров со ссылками
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

function MasterProfile() { // профиль мастера
  const { id } = useParams(); // достаём id из адреса
  return <h3>Профиль мастера #{id}</h3>; // показываем номер мастера
} // конец MasterProfile

function Booking() { // страница записи с переходом (задача 9)
  const [name, setName] = useState(""); // память для имени
  const navigate = useNavigate(); // функция перехода на другую страницу

  const handleSubmit = () => { // функция «отправить запись»
    alert(`${name}, запись подтверждена!`); // окно с подтверждением
    navigate("/account"); // переходим в личный кабинет
  }; // конец handleSubmit

  return ( // что показать
    <div> {/* обёртка */}
      <input placeholder="Имя" value={name} onChange={(e) => setName(e.target.value)} /> {/* поле для имени */}
      <button onClick={handleSubmit}>Записаться</button> {/* кнопка «Записаться» */}
    </div> // конец обёртки
  ); // конец return
} // конец Booking

function Account() { // личный кабинет
  const bookings = [ // массив записей
    { date: "2025-10-25", master: "Анна" }, // запись
    { date: "2025-11-02", master: "Игорь" }, // запись
  ]; // конец массива
  return ( // что показать
    <div> {/* обёртка */}
      <h2>Ваши записи</h2> {/* заголовок */}
      <ul> {/* список */}
        {bookings.map((b, i) => ( // для каждой записи
          <li key={i}>{b.date} — {b.master}</li> // пункт: дата — мастер
        ))} {/* конец map */}
      </ul> {/* конец списка */}
    </div> // конец обёртки
  ); // конец return
} // конец Account

function ProtectedRoute({ children }) { // компонент-«охранник»; children — то, что положили ВНУТРЬ него (здесь <Account />)
  const [loggedIn, setLoggedIn] = useState(false); // память «вошёл ли пользователь»: сначала false — не вошёл

  return loggedIn ? ( // если вошёл...
    children // ...показываем то, что внутри (страницу Account)
  ) : ( // иначе (не вошёл)...
    <div> {/* ...показываем блок с сообщением */}
      <h3>🚫 Войдите в систему</h3> {/* сообщение */}
      <button onClick={() => setLoggedIn(true)}>Войти</button> {/* кнопка «Войти»: записываем loggedIn = true -> React покажет Account */}
    </div> // конец блока
  ); // конец return
} // конец ProtectedRoute

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
        {/* В App.js */}
        <Route // маршрут для личного кабинета
          path="/account" // для адреса /account...
          element={ // ...показываем:
            <ProtectedRoute> {/* охранника... */}
              <Account /> {/* ...внутри которого лежит личный кабинет (это и есть children) */}
            </ProtectedRoute> // конец охранника
          } // конец element
        /> {/* конец Route */}
        <Route path="*" element={<NotFound />} /> {/* все остальные адреса — 404 */}
      </Routes> {/* конец списка */}
    </BrowserRouter> // конец роутинга
  ); // конец return
} // конец App

export default App; // отдаём наружу

// Ожидаемый результат:
// 1. При первом переходе — «🚫 Войдите в систему».
// 2. После нажатия «Войти» — открывается страница с записями.
// (Учебный «вход» без пароля: если уйти со страницы и вернуться — снова попросит войти.)
