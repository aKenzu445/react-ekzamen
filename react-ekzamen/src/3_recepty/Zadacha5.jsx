// Работа 3. Рецепты — Задача 5. Добавление рейтинга
// Каждому рецепту можно поставить оценку звёздами, оценка подсвечивается.
// RecipeRating — решение из методички. Остальное — как в задаче 4, плюс строка <RecipeRating /> в Recipe.

import React, { useState } from "react"; // подключаем React и useState

function RecipeTitle({ title }) { // компонент «Название»
  return <h1 className="text-2xl font-bold mb-3">{title}</h1>; // заголовок
} // конец RecipeTitle

function RecipeImage({ image, title }) { // компонент «Картинка»
  return <img src={image} alt={title} className="w-full rounded-lg mb-3" />; // картинка
} // конец RecipeImage

function RecipeIngredients({ ingredients }) { // компонент «Ингредиенты»
  return ( // что показать
    <div> {/* обёртка */}
      <h2 className="text-xl font-semibold">Ингредиенты:</h2> {/* подзаголовок */}
      <ul className="list-disc list-inside mb-3"> {/* список с точками */}
        {ingredients.map((item, idx) => ( // для каждого ингредиента
          <li key={idx}>{item}</li> // пункт списка
        ))} {/* конец map */}
      </ul> {/* конец списка */}
    </div> // конец обёртки
  ); // конец return
} // конец RecipeIngredients

function RecipeSteps({ steps }) { // компонент «Шаги»
  return ( // что показать
    <div> {/* обёртка */}
      <h2 className="text-xl font-semibold">Приготовление:</h2> {/* подзаголовок */}
      <ol className="list-decimal list-inside"> {/* нумерованный список */}
        {steps.map((step, idx) => ( // для каждого шага
          <li key={idx}>{step}</li> // пункт списка
        ))} {/* конец map */}
      </ol> {/* конец списка */}
    </div> // конец обёртки
  ); // конец return
} // конец RecipeSteps

function RecipeRating() { // компонент «Рейтинг» (из методички)
  const [rating, setRating] = useState(0); // память для оценки: сначала 0 (ничего не выбрано)

  return ( // что показать
    <div className="flex gap-1 mt-2"> {/* обёртка: звёзды в ряд, небольшой промежуток, отступ сверху */}
      {[1, 2, 3, 4, 5].map((star) => ( // массив чисел 1..5 — для каждого делаем звезду; star — номер звезды
        <span // одна звезда (span — маленький кусочек текста)
          key={star} // обязательная метка — номер звезды
          onClick={() => setRating(star)} // при клике запоминаем номер звезды как оценку
          className={`cursor-pointer text-2xl ${ // классы через шаблонную строку: курсор-«рука», крупный размер, плюс цвет:
            rating >= star ? "text-yellow-400" : "text-gray-300" // если оценка >= номера звезды — жёлтая, иначе серая
          }`} // конец шаблонной строки и className
        > {/* конец открывающего тега span */}
          ★ {/* символ звезды */}
        </span> // конец звезды
      ))} {/* конец map */}
    </div> // конец обёртки
  ); // конец return
} // конец RecipeRating

function Recipe({ title, image, ingredients, steps }) { // компонент рецепта
  const [showSteps, setShowSteps] = useState(false); // память «показаны ли шаги»

  return ( // что показать
    <div className="p-4 max-w-lg mx-auto bg-white shadow rounded-lg"> {/* карточка */}
      <RecipeTitle title={title} /> {/* название */}
      <RecipeRating /> {/* НОВОЕ: звёзды-рейтинг; у каждой карточки своя оценка */}
      <RecipeImage image={image} title={title} /> {/* картинка */}
      <RecipeIngredients ingredients={ingredients} /> {/* ингредиенты */}
      <button // кнопка «показать / скрыть»
        onClick={() => setShowSteps(!showSteps)} // меняем на противоположное
        className="px-3 py-1 bg-blue-500 text-white rounded mb-3" // синяя кнопка
      > {/* конец открывающего тега */}
        {showSteps ? "Скрыть шаги" : "Показать шаги"} {/* надпись на кнопке */}
      </button> {/* конец кнопки */}
      {showSteps && <RecipeSteps steps={steps} />} {/* шаги — только если showSteps = true */}
    </div> // конец карточки
  ); // конец return
} // конец Recipe

function App() { // главный компонент
  const recipes = [ // массив рецептов
    { // первый рецепт
      title: "Борщ", // название
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Borscht_served.jpg/500px-Borscht_served.jpg", // картинка
      ingredients: ["Свекла — 2 шт.", "Картофель — 3 шт.", "Морковь — 1 шт."], // ингредиенты
      steps: ["Почистить овощи", "Нарезать", "Сварить", "Подать со сметаной"], // шаги
    }, // конец первого рецепта
    { // второй рецепт
      title: "Оливье", // название
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/%D0%A1%D0%B0%D0%BB%D0%B0%D1%82_%D0%9E%D0%BB%D0%B8%D0%B2%D1%8C%D0%B5_03.jpg/500px-%D0%A1%D0%B0%D0%BB%D0%B0%D1%82_%D0%9E%D0%BB%D0%B8%D0%B2%D1%8C%D0%B5_03.jpg", // картинка
      ingredients: ["Картофель — 4 шт.", "Горошек — 150 г", "Колбаса — 200 г"], // ингредиенты
      steps: ["Отварить овощи", "Нарезать", "Смешать с майонезом"], // шаги
    }, // конец второго рецепта
  ]; // конец массива

  return ( // что показать
    <div className="grid gap-4 p-4"> {/* карточки сеткой */}
      {recipes.map((r, idx) => ( // для каждого рецепта
        <Recipe // показываем Recipe
          key={idx} // метка
          title={r.title} // название
          image={r.image} // картинка
          ingredients={r.ingredients} // ингредиенты
          steps={r.steps} // шаги
        /> // конец тега Recipe
      ))} {/* конец map */}
    </div> // конец обёртки
  ); // конец return
} // конец App

export default App; // отдаём наружу

// Пример: кликнули на 3-ю звезду -> rating = 3 -> звёзды 1, 2, 3 жёлтые, 4 и 5 серые.
