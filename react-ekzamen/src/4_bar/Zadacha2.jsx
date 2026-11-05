// Работа 4. Бар — Задача 2. Меню из нескольких коктейлей
// Компонент выводит список коктейлей из массива объектов.
// Подсказка: храни коктейли в массиве и рендери через map. (return дописан — в методичке его нет)

import React, { Component } from "react"; // подключаем React и Component

class CocktailCard extends Component { // карточка коктейля из задачи 1
  render() { // что показать
    const { name, image, description, price } = this.props; // достаём данные из props
    return ( // что показать
      <div className="p-4 border rounded-lg shadow max-w-sm"> {/* карточка */}
        <img src={image} alt={name} className="w-full rounded-lg mb-2" /> {/* фото */}
        <h2 className="text-xl font-bold">{name}</h2> {/* название */}
        <p className="text-gray-600">{description}</p> {/* описание */}
        <p className="font-semibold">Цена: {price} ₽</p> {/* цена */}
      </div> // конец карточки
    ); // конец return
  } // конец render
} // конец CocktailCard

class CocktailMenu extends Component { // классовый компонент «Меню коктейлей»
  render() { // что показать
    const cocktails = [ // массив коктейлей
      { // первый коктейль — объект
        name: "Мохито", // название
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/15-09-26-RalfR-WLC-0072.jpg/500px-15-09-26-RalfR-WLC-0072.jpg", // картинка
        description: "Освежающий с мятой и лаймом", // описание
        price: 350, // цена
      }, // конец первого коктейля
      { // второй коктейль
        name: "Маргарита", // название
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/MargaritaReal.jpg/500px-MargaritaReal.jpg", // картинка
        description: "Классический мексиканский коктейль", // описание
        price: 400, // цена
      }, // конец второго коктейля
    ]; // конец массива

    return ( // ДОПИСАНО: что вернёт компонент
      <div className="grid gap-4"> {/* обёртка: карточки сеткой с промежутками */}
        {cocktails.map((c, idx) => ( // проходим по массиву: c — очередной коктейль, idx — номер
          <CocktailCard // для каждого коктейля показываем карточку
            key={idx} // обязательная метка
            name={c.name} // передаём название
            image={c.image} // картинку
            description={c.description} // описание
            price={c.price} // цену
          /> // конец карточки
        ))} {/* конец map */}
      </div> // конец обёртки
    ); // конец return
  } // конец render
} // конец CocktailMenu

export default CocktailMenu; // отдаём наружу

// Результат: две карточки — «Мохито» и «Маргарита».
