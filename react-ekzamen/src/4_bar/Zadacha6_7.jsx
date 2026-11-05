// Работа 4. Бар — Задачи 6 и 7 (работают в паре, поэтому в одном файле)
// Задача 6. Корзина заказов: добавлять коктейли в заказ. Подсказка: храни просто список названий напитков.
// Задача 7. Кнопка «Добавить в заказ» внутри карточки. Подсказка: передавай в onAdd название коктейля.
// Карточка — решение задачи 7 из методички. Меню с корзиной (задача 6) — написано в том же стиле.

import React, { Component } from "react"; // подключаем React и Component

// ===== Задача 7: карточка с кнопкой =====
class CocktailCard extends Component { // карточка коктейля
  render() { // что показать
    const { name, image, description, price, onAdd } = this.props; // достаём данные и ФУНКЦИЮ onAdd, которую передал родитель (меню)

    return ( // что показать
      <div className="p-4 border rounded-lg shadow max-w-sm"> {/* карточка */}
        <img src={image} alt={name} className="w-full rounded-lg mb-2" /> {/* фото */}
        <h2 className="text-xl font-bold">{name}</h2> {/* название */}
        <p>{description}</p> {/* описание */}
        <p>Цена: {price} ₽</p> {/* цена */}
        <button // кнопка «Добавить в заказ»
          onClick={() => onAdd(name)} // при клике вызываем функцию родителя и передаём название этого коктейля
          className="mt-2 px-3 py-1 bg-green-500 text-white rounded" // оформление: зелёная кнопка с отступом сверху
        > {/* конец открывающего тега */}
          Добавить в заказ {/* текст на кнопке */}
        </button> {/* конец кнопки */}
      </div> // конец карточки
    ); // конец return
  } // конец render
} // конец CocktailCard

// ===== Задача 6: меню с корзиной =====
class CocktailMenu extends Component { // меню коктейлей
  state = { // ПАМЯТЬ классового компонента (как useState в функциях)
    order: [], // заказ: сначала пустой массив
  }; // конец state

  addToOrder = (name) => { // функция «добавить в заказ», получает название; пишем стрелкой, чтобы внутри правильно работал this
    this.setState({ order: [...this.state.order, name] }); // новый заказ = все старые названия + новое в конце; setState перерисует экран
  }; // конец addToOrder

  render() { // что показать
    const cocktails = [ // массив коктейлей (как в задаче 2)
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
      <div> {/* общая обёртка */}
        <div className="grid gap-4"> {/* блок с карточками */}
          {cocktails.map((c, idx) => ( // для каждого коктейля
            <CocktailCard // карточка
              key={idx} // метка
              name={c.name} // название
              image={c.image} // картинка
              description={c.description} // описание
              price={c.price} // цена
              onAdd={this.addToOrder} // НОВОЕ: передаём в карточку функцию «добавить в заказ»
            /> // конец карточки
          ))} {/* конец map */}
        </div> {/* конец блока карточек */}

        <h2 className="text-xl font-bold mt-4">Ваш заказ:</h2> {/* заголовок корзины */}
        <ul className="list-disc pl-5"> {/* список заказанного */}
          {this.state.order.map((item, idx) => ( // проходим по заказу из памяти: item — название напитка
            <li key={idx}>{item}</li> // каждое название — пункт списка
          ))} {/* конец map */}
        </ul> {/* конец списка */}
      </div> // конец обёртки
    ); // конец return
  } // конец render
} // конец CocktailMenu

export default CocktailMenu; // отдаём наружу

// Клик «Добавить в заказ» у Мохито: карточка вызывает onAdd("Мохито") -> это addToOrder("Мохито")
// -> setState добавляет «Мохито» в order -> React перерисовывает -> «Мохито» появляется в «Ваш заказ».
