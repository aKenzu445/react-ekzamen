// Работа 2. Счётчик — Задача 4. Несколько кнопок
// Несколько кнопок с разными приращениями (+10, -100, +25) через компонент из задачи 3.

import React, { useState } from "react"; // подключаем React и useState

function CounterValue({ value }) { // компонент показа числа, получает value через props
  return <div className="text-xl font-bold">Счётчик: {value}</div>; // текст «Счётчик: ...»
} // конец CounterValue

function CounterButton({ increment, onClick }) { // кнопка: increment — число, onClick — функция родителя
  return ( // что показать
    <button // начало кнопки
      onClick={() => onClick(increment)} // при клике вызываем функцию родителя со своим числом
      className="px-4 py-2 bg-purple-500 text-white rounded-lg" // оформление: фиолетовая кнопка
    > {/* конец открывающего тега */}
      {increment > 0 ? `+${increment}` : increment} {/* надпись: +10 или -100 */}
    </button> // конец кнопки
  ); // конец return
} // конец CounterButton

function CounterApp() { // главный компонент
  const [count, setCount] = useState(0); // память для числа, сначала 0

  const handleIncrement = (value) => { // функция «изменить счётчик на value»
    setCount(count + value); // новое число = старое + value (если value = -100, число уменьшится)
  }; // конец функции

  return ( // что показать
    <div className="flex flex-col gap-3 items-center"> {/* обёртка: всё в столбик по центру */}
      <CounterValue value={count} /> {/* показываем число */}
      <div className="flex gap-2"> {/* блок для кнопок: кнопки в ряд */}
        <CounterButton increment={+1} onClick={handleIncrement} /> {/* кнопка +1; функцию передаём БЕЗ скобок — кнопка вызовет её сама */}
        <CounterButton increment={+10} onClick={handleIncrement} /> {/* кнопка +10 */}
        <CounterButton increment={-100} onClick={handleIncrement} /> {/* кнопка -100 */}
        <CounterButton increment={+25} onClick={handleIncrement} /> {/* кнопка +25 */}
      </div> {/* конец блока кнопок */}
    </div> // конец обёртки
  ); // конец return
} // конец CounterApp

export default CounterApp; // отдаём наружу

// Нажали «+10»: кнопка вызывает onClick(10) -> это handleIncrement(10) -> setCount(count + 10) -> React перерисовывает число.
