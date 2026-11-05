// Работа 3. Рецепты — Задача 2. Разбиение на компоненты
// Части рецепта вынесены в компоненты: RecipeTitle, RecipeImage, RecipeIngredients, RecipeSteps.
// (В методичке решения нет — написано в том же стиле.)

import React from "react"; // подключаем React

function RecipeTitle({ title }) { // компонент «Название», получает title через props
  return <h1 className="text-2xl font-bold mb-3">{title}</h1>; // заголовок, вместо {title} подставится название
} // конец RecipeTitle

function RecipeImage({ image, title }) { // компонент «Картинка», получает адрес image и title (для alt)
  return <img src={image} alt={title} className="w-full rounded-lg mb-3" />; // картинка: адрес из image, подпись из title
} // конец RecipeImage

function RecipeIngredients({ ingredients }) { // компонент «Ингредиенты», получает МАССИВ ингредиентов
  return ( // что показать
    <div> {/* обёртка (в return должен быть один главный тег) */}
      <h2 className="text-xl font-semibold">Ингредиенты:</h2> {/* подзаголовок */}
      <ul className="list-disc list-inside mb-3"> {/* список с точками */}
        {ingredients.map((item, idx) => ( // проходим по массиву: item — один ингредиент, idx — его номер
          <li key={idx}>{item}</li> // каждый ингредиент — пункт списка
        ))} {/* конец map */}
      </ul> {/* конец списка */}
    </div> // конец обёртки
  ); // конец return
} // конец RecipeIngredients

function RecipeSteps({ steps }) { // компонент «Шаги», получает МАССИВ шагов
  return ( // что показать
    <div> {/* обёртка */}
      <h2 className="text-xl font-semibold">Приготовление:</h2> {/* подзаголовок */}
      <ol className="list-decimal list-inside"> {/* нумерованный список: шаги идут с номерами 1, 2, 3... */}
        {steps.map((step, idx) => ( // проходим по шагам: step — один шаг, idx — номер
          <li key={idx}>{step}</li> // каждый шаг — пункт списка
        ))} {/* конец map */}
      </ol> {/* конец списка */}
    </div> // конец обёртки
  ); // конец return
} // конец RecipeSteps

function Recipe() { // главный компонент: собирает рецепт из маленьких компонентов
  const ingredients = ["Свекла — 2 шт.", "Картофель — 3 шт.", "Морковь — 1 шт.", "Капуста — 200 г"]; // массив ингредиентов борща
  const steps = ["Почистить овощи", "Нарезать", "Сварить", "Подать со сметаной"]; // массив шагов

  return ( // что показать
    <div className="p-4 max-w-lg mx-auto bg-white shadow rounded-lg"> {/* карточка (как в задаче 1) */}
      <RecipeTitle title="Борщ" /> {/* заголовок: передаём название */}
      <RecipeImage image="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Borscht_served.jpg/500px-Borscht_served.jpg" title="Борщ" /> {/* картинка: передаём адрес и название */}
      <RecipeIngredients ingredients={ingredients} /> {/* ингредиенты: передаём массив (массив — в фигурных скобках) */}
      <RecipeSteps steps={steps} /> {/* шаги: передаём массив */}
    </div> // конец карточки
  ); // конец return
} // конец Recipe

export default Recipe; // отдаём наружу

// Результат: тот же рецепт, но собран из 4 маленьких переиспользуемых компонентов.
