// Работа 3. Рецепты — Задача 4. Добавление состояния (хуков)
// У каждого рецепта кнопка «Показать / скрыть шаги приготовления».
// (В методичке решения нет — написано в том же стиле. Меняется только Recipe.)

import React, { useState } from "react"; // подключаем React и useState (теперь нужна память)

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

function Recipe({ title, image, ingredients, steps }) { // компонент рецепта, получает данные через props
  const [showSteps, setShowSteps] = useState(false); // память «показаны ли шаги»: сначала false — скрыты

  return ( // что показать
    <div className="p-4 max-w-lg mx-auto bg-white shadow rounded-lg"> {/* карточка */}
      <RecipeTitle title={title} /> {/* название */}
      <RecipeImage image={image} title={title} /> {/* картинка */}
      <RecipeIngredients ingredients={ingredients} /> {/* ингредиенты */}
      <button // кнопка «показать / скрыть»
        onClick={() => setShowSteps(!showSteps)} // при клике меняем на противоположное: ! значит «наоборот» (false -> true, true -> false)
        className="px-3 py-1 bg-blue-500 text-white rounded mb-3" // оформление: синяя кнопка
      > {/* конец открывающего тега */}
        {showSteps ? "Скрыть шаги" : "Показать шаги"} {/* надпись: если шаги показаны — «Скрыть шаги», иначе «Показать шаги» */}
      </button> {/* конец кнопки */}
      {showSteps && <RecipeSteps steps={steps} />} {/* показываем шаги ТОЛЬКО если showSteps = true */}
    </div> // конец карточки
  ); // конец return
} // конец Recipe

function App() { // главный компонент (как в задаче 3)
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

// Результат: у каждой карточки своя кнопка. У каждой карточки СВОЯ память, поэтому кнопки работают отдельно.
