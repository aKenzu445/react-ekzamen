// App.jsx — главное меню проекта (в методичках его нет, оно только для удобства).
// Слева список работ и задач, справа показывается выбранная задача.
// Код самих задач лежит в папках: 1_nachalo, 2_schetchik, 3_recepty, 4_bar, 5_routing.

import { useState } from "react"; // useState — память: какая задача сейчас выбрана

import Counter from "./1_nachalo/Counter"; // Работа 1: кнопка-счётчик
import TodoList from "./1_nachalo/TodoList"; // Работа 1: список дел
import AppScenariyA from "./1_nachalo/AppScenariyA"; // Работа 1: App, сценарий А
import AppScenariyB from "./1_nachalo/AppScenariyB"; // Работа 1: App, сценарий Б
import UseEffectPrimer from "./1_nachalo/UseEffectPrimer"; // Работа 1: пример useEffect

import Schetchik1 from "./2_schetchik/Zadacha1"; // Работа 2: задача 1
import Schetchik2 from "./2_schetchik/Zadacha2"; // Работа 2: задача 2
import Schetchik3 from "./2_schetchik/Zadacha3"; // Работа 2: задача 3
import Schetchik4 from "./2_schetchik/Zadacha4"; // Работа 2: задача 4
import Schetchik5 from "./2_schetchik/Zadacha5"; // Работа 2: задача 5
import Schetchik6 from "./2_schetchik/Zadacha6"; // Работа 2: задача 6

import Recepty1 from "./3_recepty/Zadacha1"; // Работа 3: задача 1
import Recepty2 from "./3_recepty/Zadacha2"; // Работа 3: задача 2
import Recepty3 from "./3_recepty/Zadacha3"; // Работа 3: задача 3
import Recepty4 from "./3_recepty/Zadacha4"; // Работа 3: задача 4
import Recepty5 from "./3_recepty/Zadacha5"; // Работа 3: задача 5

import BarTeoriya from "./4_bar/Teoriya"; // Работа 4: теория про props
import Bar1 from "./4_bar/Zadacha1"; // Работа 4: задача 1
import Bar2 from "./4_bar/Zadacha2"; // Работа 4: задача 2
import Bar3 from "./4_bar/Zadacha3"; // Работа 4: задача 3
import Bar4 from "./4_bar/Zadacha4"; // Работа 4: задача 4
import Bar5 from "./4_bar/Zadacha5"; // Работа 4: задача 5
import Bar6i7 from "./4_bar/Zadacha6_7"; // Работа 4: задачи 6 и 7
import Bar8 from "./4_bar/Zadacha8"; // Работа 4: задача 8
import Bar9 from "./4_bar/Zadacha9"; // Работа 4: задача 9

import Routing1 from "./5_routing/Zadacha1"; // Работа 5: задача 1
import Routing2 from "./5_routing/Zadacha2"; // Работа 5: задача 2
import Routing3 from "./5_routing/Zadacha3"; // Работа 5: задача 3
import Routing4 from "./5_routing/Zadacha4"; // Работа 5: задача 4
import Routing5 from "./5_routing/Zadacha5"; // Работа 5: задача 5
import Routing6 from "./5_routing/Zadacha6"; // Работа 5: задача 6
import Routing7 from "./5_routing/Zadacha7"; // Работа 5: задача 7
import Routing8 from "./5_routing/Zadacha8"; // Работа 5: задача 8
import Routing9 from "./5_routing/Zadacha9"; // Работа 5: задача 9
import Routing10 from "./5_routing/Zadacha10"; // Работа 5: задача 10

const works = [ // массив работ; у каждой работы — название и массив задач
  { // работа 1
    title: "1. Начало работы с React", // название работы
    tasks: [ // задачи: название кнопки и компонент, который показать
      { title: "Кнопка-счётчик", component: Counter }, // пример 1
      { title: "Список дел", component: TodoList }, // пример 2
      { title: "App — сценарий А", component: AppScenariyA }, // пример 3
      { title: "App — сценарий Б", component: AppScenariyB }, // пример 4
      { title: "Хук useEffect", component: UseEffectPrimer }, // пример 5
    ], // конец задач
  }, // конец работы 1
  { // работа 2
    title: "2. Счётчик", // название
    tasks: [ // задачи
      { title: "Задача 1. Простейший счётчик", component: Schetchik1 }, // задача 1
      { title: "Задача 2. Кнопка +1, счётчик отдельно", component: Schetchik2 }, // задача 2
      { title: "Задача 3. Передача через props", component: Schetchik3 }, // задача 3
      { title: "Задача 4. Несколько кнопок", component: Schetchik4 }, // задача 4
      { title: "Задача 5. Кнопки из массива", component: Schetchik5 }, // задача 5
      { title: "Задача 6. Анимация", component: Schetchik6 }, // задача 6
    ], // конец задач
  }, // конец работы 2
  { // работа 3
    title: "3. Рецепты", // название
    tasks: [ // задачи
      { title: "Задача 1. Базовый рецепт", component: Recepty1 }, // задача 1
      { title: "Задача 2. Разбиение на компоненты", component: Recepty2 }, // задача 2
      { title: "Задача 3. Несколько рецептов", component: Recepty3 }, // задача 3
      { title: "Задача 4. Показать/скрыть шаги", component: Recepty4 }, // задача 4
      { title: "Задача 5. Рейтинг", component: Recepty5 }, // задача 5
    ], // конец задач
  }, // конец работы 3
  { // работа 4
    title: "4. Бар (Props)", // название
    tasks: [ // задачи
      { title: "Теория про props", component: BarTeoriya }, // теория
      { title: "Задача 1. Карточка коктейля", component: Bar1 }, // задача 1
      { title: "Задача 2. Меню коктейлей", component: Bar2 }, // задача 2
      { title: "Задача 3. Случайные стили", component: Bar3 }, // задача 3
      { title: "Задача 4. Информация о баре", component: Bar4 }, // задача 4
      { title: "Задача 5. Услуги бара", component: Bar5 }, // задача 5
      { title: "Задачи 6–7. Корзина и кнопка", component: Bar6i7 }, // задачи 6 и 7
      { title: "Задача 8. Итоговая сумма", component: Bar8 }, // задача 8
      { title: "Задача 9. Полное приложение", component: Bar9 }, // задача 9
    ], // конец задач
  }, // конец работы 4
  { // работа 5
    title: "5. Роутинг (Golden Scissors)", // название
    tasks: [ // задачи
      { title: "Задача 1. Главная страница", component: Routing1 }, // задача 1
      { title: "Задача 2. Меню", component: Routing2 }, // задача 2
      { title: "Задача 3. Страница мастеров", component: Routing3 }, // задача 3
      { title: "Задача 4. Все маршруты", component: Routing4 }, // задача 4
      { title: "Задача 5. Форма записи", component: Routing5 }, // задача 5
      { title: "Задача 6. Страница 404", component: Routing6 }, // задача 6
      { title: "Задача 7. Профиль мастера", component: Routing7 }, // задача 7
      { title: "Задача 8. Личный кабинет", component: Routing8 }, // задача 8
      { title: "Задача 9. Редирект", component: Routing9 }, // задача 9
      { title: "Задача 10. Защищённый маршрут", component: Routing10 }, // задача 10
    ], // конец задач
  }, // конец работы 5
]; // конец массива работ

function App() { // главный компонент проекта
  const [workIndex, setWorkIndex] = useState(0); // номер выбранной работы (сначала 0 — первая)
  const [taskIndex, setTaskIndex] = useState(0); // номер выбранной задачи внутри работы

  const Task = works[workIndex].tasks[taskIndex].component; // компонент выбранной задачи (имя с большой буквы, чтобы писать <Task />)

  const selectTask = (w, t) => { // функция «выбрать задачу»: w — номер работы, t — номер задачи
    window.history.pushState(null, "", "/"); // возвращаем адрес страницы на "/" — нужно, чтобы задачи с роутингом начинались с главной
    setWorkIndex(w); // запоминаем номер работы
    setTaskIndex(t); // запоминаем номер задачи
  }; // конец selectTask

  return ( // что показать
    <div className="flex min-h-screen"> {/* вся страница: меню слева, задача справа */}
      <nav className="w-72 shrink-0 h-screen sticky top-0 overflow-y-auto p-4 bg-gray-100 border-r border-gray-300 flex flex-col gap-4"> {/* левое меню: фиксированная ширина, своя прокрутка, серый фон */}
        {works.map((work, w) => ( // для каждой работы: work — работа, w — её номер
          <div key={w}> {/* блок одной работы */}
            <h2 className="font-bold mb-1">{work.title}</h2> {/* название работы */}
            <div className="flex flex-col gap-1"> {/* кнопки задач в столбик */}
              {work.tasks.map((task, t) => ( // для каждой задачи: task — задача, t — её номер
                <button // кнопка задачи
                  key={t} // метка
                  onClick={() => selectTask(w, t)} // при клике выбираем эту задачу
                  className={`text-left text-sm px-2 py-1 rounded border-0 cursor-pointer ${ // общие классы кнопки + цвет:
                    w === workIndex && t === taskIndex ? "bg-blue-500 text-white" : "bg-transparent hover:bg-gray-200" // выбранная — синяя, остальные — прозрачные
                  }`} // конец className
                > {/* конец открывающего тега */}
                  {task.title} {/* название задачи на кнопке */}
                </button> // конец кнопки
              ))} {/* конец map задач */}
            </div> {/* конец блока кнопок */}
          </div> // конец блока работы
        ))} {/* конец map работ */}
      </nav> {/* конец левого меню */}
      <main className="flex-1 p-6"> {/* правая часть: выбранная задача */}
        <p className="text-sm text-gray-500 mb-4"> {/* серая строка «где мы сейчас» */}
          {works[workIndex].title} → {works[workIndex].tasks[taskIndex].title} {/* название работы и задачи */}
        </p> {/* конец строки */}
        <Task key={`${workIndex}-${taskIndex}`} /> {/* показываем выбранную задачу; key — чтобы при переключении она создавалась заново */}
      </main> {/* конец правой части */}
    </div> // конец страницы
  ); // конец return
} // конец App

export default App; // отдаём App наружу (его рисует index.jsx)
