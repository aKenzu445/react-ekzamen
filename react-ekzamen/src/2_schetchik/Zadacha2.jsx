// Работа 2. Счётчик — Задача 2. Кнопка +1, счётчик отдельно
// На кнопке всегда написано +1, а значение счётчика показывается отдельно в <div>.

import React, { useState } from "react"; // подключаем React и useState

function CounterValue({ value }) { // компонент, который только ПОКАЗЫВАЕТ число; получает через props значение value
  return <div className="text-xl font-bold">Счётчик: {value}</div>; // блок с текстом «Счётчик: ...» крупным жирным шрифтом
} // конец CounterValue

function CounterApp() { // главный компонент счётчика
  const [count, setCount] = useState(0); // память для числа (сначала 0) — число хранится здесь, в родителе

  return ( // что показать
    <div className="flex flex-col gap-2 items-center"> {/* обёртка: элементы в столбик, с промежутком, по центру */}
      <CounterValue value={count} /> {/* показываем CounterValue и передаём ему число через props value */}
      <button // начало кнопки
        onClick={() => setCount(count + 1)} // при клике увеличиваем число на 1
        className="px-4 py-2 bg-green-500 text-white rounded-lg" // оформление: зелёная кнопка
      > {/* конец открывающего тега */}
        +1 {/* текст на кнопке (всегда +1) */}
      </button> {/* конец кнопки */}
    </div> // конец обёртки
  ); // конец return
} // конец CounterApp

export default CounterApp; // отдаём наружу

// Как будет работать: вверху «Счётчик: 0», при нажатии на кнопку +1 число увеличивается.
