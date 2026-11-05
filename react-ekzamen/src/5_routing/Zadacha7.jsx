// Работа 5. Роутинг — Задача 7. Профиль мастера (динамический роут)
// При клике на мастера открывается его персональная страница /masters/:id.
// ВАЖНО: в методичке не показан маршрут <Route path="/masters/:id" ... /> — без него профиль не откроется. Здесь он добавлен.

import { useState } from "react"; // useState для формы записи
import { BrowserRouter, Routes, Route, Link, useParams } from "react-router-dom"; // части роутинга + useParams (достать часть адреса)

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

function Masters() { // страница мастеров (новая версия — со ссылками)
  const masters = [ // массив мастеров, теперь у каждого есть id (номер)
    { id: 1, name: "Анна", skill: "Парикмахер-стилист" }, // мастер №1
    { id: 2, name: "Игорь", skill: "Барбер" }, // мастер №2
  ]; // конец массива
  return ( // что показать
    <ul> {/* список */}
      {masters.map((m) => ( // для каждого мастера
        <li key={m.id}> {/* пункт списка, метка — id мастера */}
          <Link to={`/masters/${m.id}`}>{m.name}</Link> {/* ссылка с именем; адрес собирается строкой: /masters/1, /masters/2 */}
        </li> // конец пункта
      ))} {/* конец map */}
    </ul> // конец списка
  ); // конец return
} // конец Masters

function MasterProfile() { // страница профиля мастера
  const { id } = useParams(); // useParams() достаёт из адреса изменяемую часть: адрес /masters/2 -> id = "2"
  return <h3>Профиль мастера #{id}</h3>; // показываем «Профиль мастера #2»
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

function NotFound() { // страница 404
  return <h2>404 — Страница не найдена</h2>; // сообщение
} // конец NotFound

function App() { // главный компонент
  return ( // что показать
    <BrowserRouter> {/* включаем роутинг */}
      <Navbar /> {/* меню */}
      <Routes> {/* список маршрутов */}
        <Route path="/" element={<Home />} /> {/* главная */}
        <Route path="/masters" element={<Masters />} /> {/* список мастеров */}
        <Route path="/masters/:id" element={<MasterProfile />} /> {/* НОВОЕ: :id — «здесь любое значение, назови его id»; его достаёт useParams() */}
        <Route path="/booking" element={<Booking />} /> {/* запись */}
        <Route path="*" element={<NotFound />} /> {/* все остальные адреса — 404 */}
      </Routes> {/* конец списка */}
    </BrowserRouter> // конец роутинга
  ); // конец return
} // конец App

export default App; // отдаём наружу

// Ожидаемый результат: при клике на мастера открывается его профиль.
