// Работа 4. Бар — Теория: Props в React (все примеры из теории в одном файле)
// В методичке три разных компонента называются ProductCard. В одном файле одинаковые имена
// нельзя, поэтому к именам добавлены цифры: ProductCard1, ProductCard2, ProductCard3.
// В самом низу компонент Teoriya показывает все примеры на экране.

import React, { useState } from "react"; // подключаем React и useState
import PropTypes from "prop-types"; // подключаем библиотеку для проверки типов props

// ===== 1. Что такое props =====
// Компонент как функция
function Button(props) { // компонент-кнопка; все переданные данные приходят в один объект props
  return <button>{props.text}</button>; // текст кнопки берём из props.text
} // конец Button

// ===== 2. Props доступны только для чтения =====
function UserCard({ user }) { // получает props user (объект с данными пользователя)
  // НЕЛЬЗЯ изменять props!
  // user.name = "Новое имя"; //  Ошибка!

  return <div>{user.name}</div>; //  Только чтение: просто показываем имя
} // конец UserCard

// ===== 3. Props могут быть любыми типами данных =====
// В методичке есть только использование <UserProfile ... /> (оно внизу, в Teoriya).
// Сам компонент не написан — здесь простой вариант, чтобы пример запускался.
function Header() { // маленький компонент-заголовок
  return <h3>Заголовок</h3>; // просто заголовок
} // конец Header

function UserProfile({ name, age, isOnline, user, tags, onClick, renderHeader }) { // получает props разных типов
  return ( // что показать
    <div> {/* обёртка */}
      {renderHeader} {/* React-компонент, который передали через props */}
      <p>{name}, {age} лет</p> {/* строка и число */}
      <p>{isOnline ? "В сети" : "Не в сети"}</p> {/* boolean: если true — «В сети», иначе «Не в сети» */}
      <p>Роль: {user.role}</p> {/* объект: берём из него поле role */}
      <p>Теги: {tags.join(", ")}</p> {/* массив: join склеивает элементы через запятую */}
      <button onClick={onClick}>Нажми (смотри консоль браузера)</button> {/* функция: вызывается при клике */}
    </div> // конец обёртки
  ); // конец return
} // конец UserProfile

// ===== 4. Деструктуризация props для чистоты кода =====
// Вместо этого:
function ProductCard1(props) { // все данные в одном объекте props
  return ( // что показать
    <div> {/* обёртка */}
      <h3>{props.title}</h3> {/* название (каждый раз пишем props.) */}
      <p>{props.price}</p> {/* цена */}
      <img src={props.image} alt={props.title} /> {/* картинка */}
    </div> // конец обёртки
  ); // конец return
} // конец ProductCard1

// Лучше так:
function ProductCard2({ title, price, image, onAddToCart }) { // сразу «распаковываем» props в отдельные переменные
  return ( // что показать
    <div> {/* обёртка */}
      <h3>{title}</h3> {/* название — просто title, без props. */}
      <p>{price} руб.</p> {/* цена с подписью «руб.» */}
      <img src={image} alt={title} /> {/* картинка */}
      <button onClick={onAddToCart}>В корзину</button> {/* при клике вызываем функцию родителя onAddToCart */}
    </div> // конец обёртки
  ); // конец return
} // конец ProductCard2

// ===== Значения по умолчанию =====
function Message({ text = "Сообщение не указано", type = "info" }) { // если text или type не передали — берутся эти значения
  return <div className={`message message-${type}`}>{text}</div>; // класс собирается шаблонной строкой: "message message-info"
} // конец Message

// ===== Props children — специальный prop для содержимого =====
function Container({ children, className }) { // children — всё, что написано МЕЖДУ тегами <Container> и </Container>
  return <div className={`container ${className}`}>{children}</div>; // блок с классами + внутрь вставляем children
} // конец Container

function Content() { // маленький компонент для примера (в методичке его нет)
  return <p>Содержимое страницы</p>; // просто текст
} // конец Content

function Footer() { // маленький компонент для примера (в методичке его нет)
  return <p>Подвал страницы</p>; // просто текст
} // конец Footer

// ===== Пример взаимодействия =====
// Родитель управляет состоянием
function UserList() { // родитель «Список пользователей»
  const [users, setUsers] = useState([{ id: 1, name: "Анна" }, { id: 2, name: "Игорь" }]); // память со списком (в методичке пустой массив [] — добавили двоих, чтобы таблица была не пустой)

  const handleDelete = (id) => { // в методичке эта функция не написана: удаляем пользователя с этим id
    setUsers(users.filter((user) => user.id !== id)); // filter оставляет всех, у кого id НЕ равен удаляемому
  }; // конец handleDelete

  // Передаем данные через props
  return <UserTable users={users} onUserDelete={handleDelete} />; // передаём таблице данные (users) и функцию удаления
} // конец UserList

// Дочерний компонент использует props
function UserTable({ users, onUserDelete }) { // ребёнок «Таблица»: получает список и функцию
  return ( // что показать
    <table> {/* таблица */}
      {users.map(user => ( // для каждого пользователя
        <tr key={user.id}> {/* строка таблицы, метка — id пользователя */}
          <td>{user.name}</td> {/* ячейка с именем */}
          <td> {/* ячейка для кнопки */}
            <button onClick={() => onUserDelete(user.id)}> {/* при клике вызываем функцию РОДИТЕЛЯ и передаём id */}
              Удалить {/* текст на кнопке */}
            </button> {/* конец кнопки */}
          </td> {/* конец ячейки */}
        </tr> // конец строки
      ))} {/* конец map */}
    </table> // конец таблицы
  ); // конец return
} // конец UserTable

// ===== 5. Валидация props с PropTypes =====
function ProductCard3({ title, price, inStock }) { // карточка товара: название, цена, есть ли в наличии
  return ( // что показать
    <div> {/* обёртка */}
      <h3>{title}</h3> {/* название */}
      <p>Цена: {price} руб.</p> {/* цена */}
      <p>{inStock ? 'В наличии' : 'Нет в наличии'}</p> {/* если inStock = true — «В наличии», иначе «Нет в наличии» */}
    </div> // конец обёртки
  ); // конец return
} // конец ProductCard3

// Валидация props
ProductCard3.propTypes = { // описываем, какого ТИПА должны быть props
  title: PropTypes.string.isRequired,        // Обязательная строка
  price: PropTypes.number.isRequired,        // Обязательное число
  inStock: PropTypes.bool                    // Необязательный boolean
}; // конец propTypes (если передать не тот тип — в консоли браузера будет предупреждение)

// Значения по умолчанию
ProductCard3.defaultProps = { // значения, если props не передали
  inStock: true // inStock по умолчанию true
}; // конец defaultProps

// ===== Показываем все примеры на экране =====
function Teoriya() { // компонент, который выводит все примеры по очереди
  return ( // что показать
    <div className="flex flex-col gap-6"> {/* обёртка: примеры в столбик с промежутками */}
      <section> {/* пример 1 */}
        <h2 className="text-xl font-bold">1. Button</h2> {/* заголовок примера */}
        <Button text="Нажать меня" /> {/* Использование с передачей props */}
      </section> {/* конец примера 1 */}

      <section> {/* пример 2 */}
        <h2 className="text-xl font-bold">2. UserCard</h2> {/* заголовок */}
        <UserCard user={{ name: "Анна" }} /> {/* передаём объект user */}
      </section> {/* конец примера 2 */}

      <section> {/* пример 3 */}
        <h2 className="text-xl font-bold">3. UserProfile — разные типы props</h2> {/* заголовок */}
        <UserProfile // компонент с props разных типов
          name="Анна"                      // String
          age={25}                         // Number
          isOnline={true}                  // Boolean
          user={{ id: 1, role: "admin" }}  // Object
          tags={["react", "javascript"]}   // Array
          onClick={() => console.log("click")} // Function
          renderHeader={<Header />}        // React Component
        /> {/* конец UserProfile */}
      </section> {/* конец примера 3 */}

      <section> {/* пример 4 */}
        <h2 className="text-xl font-bold">4. ProductCard: props и деструктуризация</h2> {/* заголовок */}
        <ProductCard1 title="Мохито" price={350} image="https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/15-09-26-RalfR-WLC-0072.jpg/500px-15-09-26-RalfR-WLC-0072.jpg" /> {/* вариант через props.title */}
        <ProductCard2 title="Маргарита" price={400} image="https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/MargaritaReal.jpg/500px-MargaritaReal.jpg" onAddToCart={() => alert("Добавлено в корзину")} /> {/* вариант с деструктуризацией */}
      </section> {/* конец примера 4 */}

      <section> {/* пример 5 */}
        <h2 className="text-xl font-bold">5. Message — значения по умолчанию</h2> {/* заголовок */}
        <Message /> {/* "Сообщение не указано" с типом "info" */}
      </section> {/* конец примера 5 */}

      <section> {/* пример 6 */}
        <h2 className="text-xl font-bold">6. Container — children</h2> {/* заголовок */}
        <Container className="main"> {/* всё, что внутри, попадёт в children */}
          <Header /> {/* заголовок */}
          <Content /> {/* содержимое */}
          <Footer /> {/* подвал */}
        </Container> {/* конец Container */}
      </section> {/* конец примера 6 */}

      <section> {/* пример 7 */}
        <h2 className="text-xl font-bold">7. UserList и UserTable — родитель и ребёнок</h2> {/* заголовок */}
        <UserList /> {/* родитель с таблицей; нажми «Удалить» */}
      </section> {/* конец примера 7 */}

      <section> {/* пример 8 */}
        <h2 className="text-xl font-bold">8. PropTypes и defaultProps</h2> {/* заголовок */}
        <ProductCard3 title="Мохито" price={350} /> {/* inStock не передали — сработает defaultProps (true) */}
      </section> {/* конец примера 8 */}
    </div> // конец обёртки
  ); // конец return
} // конец Teoriya

export default Teoriya; // отдаём наружу
