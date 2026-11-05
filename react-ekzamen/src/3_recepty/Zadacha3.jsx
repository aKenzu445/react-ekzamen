// Работа 3. Рецепты — Задача 3. Добавление нескольких рецептов
// Несколько рецептов через один и тот же компонент Recipe (в виде карточек).
// Маленькие компоненты — из задачи 2. Recipe теперь получает данные через props.

import React from "react"; // подключаем React

function RecipeTitle({ title }) { // компонент «Название»
  return <h1 className="text-2xl font-bold mb-3">{title}</h1>; // заголовок с названием
} // конец RecipeTitle

function RecipeImage({ image, title }) { // компонент «Картинка»
  return <img src={image} alt={title} className="w-full rounded-lg mb-3" />; // картинка блюда
} // конец RecipeImage

function RecipeIngredients({ ingredients }) { // компонент «Ингредиенты», получает массив
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

function RecipeSteps({ steps }) { // компонент «Шаги», получает массив
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

function Recipe({ title, image, ingredients, steps }) { // Recipe теперь ПОЛУЧАЕТ данные через props: название, картинку, ингредиенты, шаги
  return ( // что показать
    <div className="p-4 max-w-lg mx-auto bg-white shadow rounded-lg"> {/* карточка */}
      <RecipeTitle title={title} /> {/* передаём полученное название дальше */}
      <RecipeImage image={image} title={title} /> {/* передаём картинку */}
      <RecipeIngredients ingredients={ingredients} /> {/* передаём ингредиенты */}
      <RecipeSteps steps={steps} /> {/* передаём шаги */}
    </div> // конец карточки
  ); // конец return
} // конец Recipe

function App() { // главный компонент приложения (решение из методички)
  const recipes = [ // массив рецептов, каждый рецепт — объект
    { // начало первого рецепта
      title: "Борщ", // название
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Borscht_served.jpg/500px-Borscht_served.jpg", // адрес картинки
      ingredients: ["Свекла — 2 шт.", "Картофель — 3 шт.", "Морковь — 1 шт."], // массив ингредиентов
      steps: ["Почистить овощи", "Нарезать", "Сварить", "Подать со сметаной"], // массив шагов
    }, // конец первого рецепта
    { // начало второго рецепта
      title: "Оливье", // название
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/%D0%A1%D0%B0%D0%BB%D0%B0%D1%82_%D0%9E%D0%BB%D0%B8%D0%B2%D1%8C%D0%B5_03.jpg/500px-%D0%A1%D0%B0%D0%BB%D0%B0%D1%82_%D0%9E%D0%BB%D0%B8%D0%B2%D1%8C%D0%B5_03.jpg", // адрес картинки
      ingredients: ["Картофель — 4 шт.", "Горошек — 150 г", "Колбаса — 200 г"], // ингредиенты
      steps: ["Отварить овощи", "Нарезать", "Смешать с майонезом"], // шаги
    }, // конец второго рецепта
  ]; // конец массива

  return ( // что показать
    <div className="grid gap-4 p-4"> {/* обёртка: карточки сеткой с промежутками */}
      {recipes.map((r, idx) => ( // проходим по рецептам: r — рецепт (объект), idx — номер
        <Recipe // для каждого рецепта показываем компонент Recipe
          key={idx} // обязательная метка для элементов из map
          title={r.title} // передаём название этого рецепта
          image={r.image} // картинку
          ingredients={r.ingredients} // ингредиенты
          steps={r.steps} // шаги
        /> // конец тега Recipe
      ))} {/* конец map */}
    </div> // конец обёртки
  ); // конец return
} // конец App

export default App; // главный компонент теперь App, отдаём его наружу

// Результат: две карточки — «Борщ» и «Оливье», сделанные ОДНИМ компонентом Recipe с разными данными.
