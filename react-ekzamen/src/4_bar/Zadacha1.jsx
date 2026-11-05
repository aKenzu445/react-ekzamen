// Работа 4. Бар — Задача 1. Базовая карточка коктейля
// Классовый компонент: название коктейля, фото, краткое описание, цена.

import React, { Component } from "react"; // подключаем React и Component (основа для классовых компонентов)

class CocktailCard extends Component { // создаём классовый компонент «Карточка коктейля» на основе Component
  render() { // обязательный метод: что он вернёт, то будет на экране
    const { name, image, description, price } = this.props; // достаём из props название, картинку, описание, цену (в классе props лежат в this.props)
    return ( // что показать
      <div className="p-4 border rounded-lg shadow max-w-sm"> {/* карточка: отступы, рамка, скругление, тень, небольшая ширина */}
        <img src={image} alt={name} className="w-full rounded-lg mb-2" /> {/* фото коктейля во всю ширину карточки */}
        <h2 className="text-xl font-bold">{name}</h2> {/* название крупным жирным шрифтом */}
        <p className="text-gray-600">{description}</p> {/* описание серым цветом */}
        <p className="font-semibold">Цена: {price} ₽</p> {/* цена полужирным */}
      </div> // конец карточки
    ); // конец return
  } // конец render
} // конец класса CocktailCard

// В методичке здесь стоит: export default CocktailCard;
// Чтобы карточку было видно на экране, ниже добавлен пример использования.
// Подсказка из методички: передавай данные через props, чтобы компонент был универсальным.
class Primer extends Component { // пример использования карточки
  render() { // что показать
    return ( // возвращаем карточку с данными
      <CocktailCard // карточка коктейля
        name="Мохито" // название (строка — в кавычках)
        image="https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/15-09-26-RalfR-WLC-0072.jpg/500px-15-09-26-RalfR-WLC-0072.jpg" // адрес картинки
        description="Освежающий с мятой и лаймом" // описание
        price={350} // цена (число — в фигурных скобках)
      /> // конец карточки
    ); // конец return
  } // конец render
} // конец класса Primer

export default Primer; // отдаём пример наружу
