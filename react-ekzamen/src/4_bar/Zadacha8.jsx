// Работа 4. Бар — Задача 8. Подсчёт итоговой суммы
// В заказе показывать итоговую сумму. Подсказка: вместо строк храни в заказе объекты { name, price }.
// (В методичке решения нет — написано в том же стиле, на основе задач 6 и 7.)

import React, { Component } from "react"; // подключаем React и Component

class CocktailCard extends Component { // карточка коктейля (из задачи 7)
  render() { // что показать
    const { name, image, description, price, onAdd } = this.props; // достаём данные и функцию onAdd
    return ( // что показать
      <div className="p-4 border rounded-lg shadow max-w-sm"> {/* карточка */}
        <img src={image} alt={name} className="w-full rounded-lg mb-2" /> {/* фото */}
        <h2 className="text-xl font-bold">{name}</h2> {/* название */}
        <p>{description}</p> {/* описание */}
        <p>Цена: {price} ₽</p> {/* цена */}
        <button // кнопка
          onClick={() => onAdd(name, price)} // ИЗМЕНЕНО: передаём родителю название И цену
          className="mt-2 px-3 py-1 bg-green-500 text-white rounded" // зелёная кнопка
        > {/* конец открывающего тега */}
          Добавить в заказ {/* текст на кнопке */}
        </button> {/* конец кнопки */}
      </div> // конец карточки
    ); // конец return
  } // конец render
} // конец CocktailCard

class CocktailMenu extends Component { // меню коктейлей (из задачи 6)
  state = { // память компонента
    order: [], // заказ, сначала пустой
  }; // конец state

  addToOrder = (name, price) => { // ИЗМЕНЕНО: функция получает название и цену
    this.setState({ order: [...this.state.order, { name, price }] }); // добавляем ОБЪЕКТ { name, price } (короткая запись { name: name, price: price })
  }; // конец addToOrder

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

    let total = 0; // сумма заказа, сначала 0 (let — потому что значение будет меняться)
    this.state.order.forEach((item) => { // forEach проходит по каждому напитку в заказе (как map, но ничего не возвращает)
      total = total + item.price; // прибавляем цену напитка к сумме
    }); // конец forEach

    return ( // что показать
      <div> {/* общая обёртка */}
        <div className="grid gap-4"> {/* блок с карточками */}
          {cocktails.map((c, idx) => ( // для каждого коктейля
            <CocktailCard // карточка
              key={idx} // метка
              name={c.name} // название
              image={c.image} // картинка
              description={c.description} // описание
              price={c.price} // цена
              onAdd={this.addToOrder} // функция «добавить в заказ»
            /> // конец карточки
          ))} {/* конец map */}
        </div> {/* конец блока карточек */}

        <h2 className="text-xl font-bold mt-4">Ваш заказ:</h2> {/* заголовок корзины */}
        <ul className="list-disc pl-5"> {/* список заказанного */}
          {this.state.order.map((item, idx) => ( // для каждого напитка в заказе
            <li key={idx}> {/* пункт списка */}
              {item.name} — {item.price} ₽ {/* название и цена, например «Мохито — 350 ₽» */}
            </li> // конец пункта
          ))} {/* конец map */}
        </ul> {/* конец списка */}
        <p className="font-bold">Итого: {total} ₽</p> {/* итоговая сумма жирным */}
      </div> // конец обёртки
    ); // конец return
  } // конец render
} // конец CocktailMenu

export default CocktailMenu; // отдаём наружу

// Пример: добавили Мохито (350) и Маргариту (400) -> «Итого: 750 ₽».
