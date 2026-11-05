// Работа 2. Счётчик — Задача 6. Улучшенный UI
// Счётчик крупным шрифтом и анимация при изменении значения.
// Меняется только CounterValue, остальной код остаётся прежним (как в задаче 5).

import React, { useState } from "react"; // подключаем React и useState
import { motion } from "framer-motion"; // подключаем motion из библиотеки анимаций framer-motion

function CounterValue({ value }) { // компонент показа числа, получает value
  return ( // что показать
    <motion.div // как обычный div, но умеет анимироваться
      key={value} // число изменилось -> key изменился -> React считает это новым элементом -> анимация играет заново
      initial={{ scale: 0.8, opacity: 0 }} // с чего начать: размер 80%, полностью прозрачный
      animate={{ scale: 1, opacity: 1 }} // к чему прийти: нормальный размер, полностью видимый
      transition={{ duration: 0.3 }} // анимация длится 0.3 секунды
      className="text-3xl font-bold" // крупный жирный шрифт
    > {/* конец открывающего тега */}
      Счётчик: {value} {/* текст с числом */}
    </motion.div> // конец анимированного блока
  ); // конец return
} // конец CounterValue

function CounterButton({ increment, onClick }) { // кнопка (как в задаче 5)
  return ( // что показать
    <button // начало кнопки
      onClick={() => onClick(increment)} // при клике вызываем функцию родителя со своим числом
      className="px-4 py-2 bg-purple-500 text-white rounded-lg" // оформление: фиолетовая кнопка
    > {/* конец открывающего тега */}
      {increment > 0 ? `+${increment}` : increment} {/* надпись: +10 или -100 */}
    </button> // конец кнопки
  ); // конец return
} // конец CounterButton

function CounterApp() { // главный компонент (как в задаче 5)
  const [count, setCount] = useState(0); // память для числа
  const increments = [+1, +10, -100, +25]; // массив чисел для кнопок

  const handleIncrement = (value) => { // функция «изменить счётчик на value»
    setCount(count + value); // новое число = старое + value
  }; // конец функции

  return ( // что показать
    <div className="flex flex-col gap-3 items-center"> {/* обёртка в столбик */}
      <CounterValue value={count} /> {/* показываем число (теперь с анимацией) */}
      <div className="flex gap-2"> {/* блок для кнопок в ряд */}
        {increments.map((inc, index) => ( // для каждого числа из массива
          <CounterButton key={index} increment={inc} onClick={handleIncrement} /> // делаем кнопку
        ))} {/* конец map */}
      </div> {/* конец блока кнопок */}
    </div> // конец обёртки
  ); // конец return
} // конец CounterApp

export default CounterApp; // отдаём наружу

// Работа приложения: при каждом изменении значение красиво «подпрыгивает».
