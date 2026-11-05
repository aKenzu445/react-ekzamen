// Работа 4. Бар — Задача 3. Стилизация карточек
// Стили карточек выбираются случайным образом при каждом рендере. Подсказка: Math.random().
// Карточка — решение из методички. Меню (из задачи 2) добавлено, чтобы показать карточки на экране.

import React, { Component } from "react"; // подключаем React и Component

const styles = [ // массив из 3 вариантов оформления
  "bg-pink-100 border-pink-400", // розовый фон и розовая рамка
  "bg-blue-100 border-blue-400", // голубой фон и синяя рамка
  "bg-green-100 border-green-400", // зелёный фон и зелёная рамка
]; // конец массива

class CocktailCard extends Component { // карточка коктейля
  render() { // что показать
    const { name, image, description, price } = this.props; // достаём данные из props
    const randomStyle = styles[Math.floor(Math.random() * styles.length)]; // случайный стиль: random() даёт 0..0.99, * 3 -> 0..2.99, floor отбрасывает дробь -> 0, 1 или 2

    return ( // что показать
      <div className={`p-4 border rounded-lg shadow ${randomStyle}`}> {/* карточка: к обычным классам добавляем случайный стиль */}
        <img src={image} alt={name} className="w-full rounded-lg mb-2" /> {/* фото */}
        <h2 className="text-xl font-bold">{name}</h2> {/* название */}
        <p className="text-gray-600">{description}</p> {/* описание */}
        <p className="font-semibold">Цена: {price} ₽</p> {/* цена */}
      </div> // конец карточки
    ); // конец return
  } // конец render
} // конец CocktailCard

class CocktailMenu extends Component { // меню из задачи 2
  render() { // что показать
    const cocktails = [ // массив коктейлей
      { // первый коктейль
        name: "Мохито", // название
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/15-09-26-RalfR-WLC-0072.jpg/500px-15-09-26-RalfR-WLC-0072.jpg", // картинка
        description: "Освежающий с мятой и лаймом", // описание
        price: 350, // цена
      }, // конец первого
      { // второй коктейль
        name: "Маргарита", // название
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/MargaritaReal.jpg/500px-MargaritaReal.jpg", // картинка
        description: "Классический мексиканский коктейль", // описание
        price: 400, // цена
      }, // конец второго
    ]; // конец массива

    return ( // что показать
      <div className="grid gap-4"> {/* карточки сеткой */}
        {cocktails.map((c, idx) => ( // для каждого коктейля
          <CocktailCard // карточка
            key={idx} // метка
            name={c.name} // название
            image={c.image} // картинка
            description={c.description} // описание
            price={c.price} // цена
          /> // конец карточки
        ))} {/* конец map */}
      </div> // конец обёртки
    ); // конец return
  } // конец render
} // конец CocktailMenu

export default CocktailMenu; // отдаём наружу

// Результат: каждая карточка получает случайный цвет. Переключись на другую задачу и обратно — цвета могут смениться.
