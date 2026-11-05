// Работа 2. Счётчик — Задача 5. Генерация кнопок из массива
// Приращения хранятся в массиве, кнопки выводятся с помощью map().
// CounterValue и CounterButton — такие же, как в задаче 4. Меняется только CounterApp.

import React, { useState } from "react"; // подключаем React и useState

function CounterValue({ value }) { // компонент показа числа
  return <div className="text-xl font-bold">Счётчик: {value}</div>; // текст «Счётчик: ...»
} // конец CounterValue

function CounterButton({ increment, onClick }) { // кнопка: число и функция родителя
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
  const [count, setCount] = useState(0); // память для числа
  const increments = [+1, +10, -100, +25]; // массив чисел для кнопок — чтобы поменять кнопки, меняем только его

  const handleIncrement = (value) => { // функция «изменить счётчик на value»
    setCount(count + value); // новое число = старое + value
  }; // конец функции

  return ( // что показать
    <div className="flex flex-col gap-3 items-center"> {/* обёртка в столбик */}
      <CounterValue value={count} /> {/* показываем число */}
      <div className="flex gap-2"> {/* блок для кнопок в ряд */}
        {increments.map((inc, index) => ( // проходим по массиву: inc — очередное число, index — его номер
          <CounterButton key={index} increment={inc} onClick={handleIncrement} /> // для каждого числа — кнопка; key — обязательная метка
        ))} {/* конец map */}
      </div> {/* конец блока кнопок */}
    </div> // конец обёртки
  ); // конец return
} // конец CounterApp

export default CounterApp; // отдаём наружу

// Как будет работать: так же, как в задаче 4, но кнопки создаются из массива. Приращения легко менять.
