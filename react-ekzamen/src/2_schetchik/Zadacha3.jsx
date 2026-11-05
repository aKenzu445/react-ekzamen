// Работа 2. Счётчик — Задача 3. Передача значения через props
// Кнопка вынесена в отдельный компонент, который принимает приращение через props.
// В методичке показан только CounterButton. Чтобы его запустить, добавлены
// CounterValue (из задачи 2) и CounterApp с одной такой кнопкой.

import React, { useState } from "react"; // подключаем React и useState

function CounterValue({ value }) { // компонент показа числа (из задачи 2)
  return <div className="text-xl font-bold">Счётчик: {value}</div>; // текст «Счётчик: ...»
} // конец CounterValue

function CounterButton({ increment, onClick }) { // кнопка; increment — на сколько менять, onClick — функция от родителя
  return ( // что показать
    <button // начало кнопки
      onClick={() => onClick(increment)} // при клике вызываем функцию родителя и передаём ей своё число
      className="px-4 py-2 bg-purple-500 text-white rounded-lg" // оформление: фиолетовая кнопка
    > {/* конец открывающего тега */}
      {increment > 0 ? `+${increment}` : increment} {/* надпись: если число > 0, пишем с плюсом (+10), иначе как есть (-100) */}
    </button> // конец кнопки
  ); // конец return
} // конец CounterButton

function CounterApp() { // главный компонент
  const [count, setCount] = useState(0); // память для числа

  const handleIncrement = (value) => { // функция «изменить счётчик на value» — её получит кнопка
    setCount(count + value); // новое число = старое + value
  }; // конец функции

  return ( // что показать
    <div className="flex flex-col gap-2 items-center"> {/* обёртка в столбик по центру */}
      <CounterValue value={count} /> {/* показываем число */}
      <CounterButton increment={+1} onClick={handleIncrement} /> {/* кнопка: число 1 и функция родителя */}
    </div> // конец обёртки
  ); // конец return
} // конец CounterApp

export default CounterApp; // отдаём наружу

// Как будет работать: кнопка универсальна — можно передать любое число (+1, +10, -100).
// Родитель решает, как изменять состояние.
