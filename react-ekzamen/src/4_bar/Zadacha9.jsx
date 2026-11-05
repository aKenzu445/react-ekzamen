// Работа 4. Бар — Задача 9. Полное приложение «Барное меню»
// Главный компонент App, в состоянии которого: текущий выбранный бар, список коктейлей, корзина заказов.
// (В методичке решения нет — написано в том же стиле, из компонентов задач 4, 5, 7, 8.)

import React, { Component } from "react"; // подключаем React и Component

class BarInfo extends Component { // информация о баре (задача 4)
  render() { // что показать
    const { name, address, phone, logo } = this.props; // достаём данные бара из props
    return ( // что показать
      <div className="flex items-center gap-4 p-4 bg-gray-100 rounded-lg"> {/* блок: в ряд, серый фон */}
        <img src={logo} alt={name} className="w-16 h-16 rounded-full" /> {/* круглый логотип */}
        <div> {/* текст справа от логотипа */}
          <h1 className="text-2xl font-bold">{name}</h1> {/* название бара */}
          <p>{address}</p> {/* адрес */}
          <p>☎ {phone}</p> {/* телефон */}
        </div> {/* конец текста */}
      </div> // конец блока
    ); // конец return
  } // конец render
} // конец BarInfo

class Services extends Component { // список услуг (задача 5)
  render() { // что показать
    const { services } = this.props; // достаём массив услуг
    return ( // что показать
      <ul className="list-disc pl-5"> {/* список с точками */}
        {services.map((s, idx) => ( // для каждой услуги
          <li key={idx}>{s}</li> // пункт списка
        ))} {/* конец map */}
      </ul> // конец списка
    ); // конец return
  } // конец render
} // конец Services

class CocktailCard extends Component { // карточка коктейля (задачи 7 и 8)
  render() { // что показать
    const { name, image, description, price, onAdd } = this.props; // достаём данные и функцию onAdd

    return ( // что показать
      <div className="p-4 border rounded-lg shadow max-w-sm"> {/* карточка */}
        <img src={image} alt={name} className="w-full rounded-lg mb-2" /> {/* фото */}
        <h2 className="text-xl font-bold">{name}</h2> {/* название */}
        <p>{description}</p> {/* описание */}
        <p>Цена: {price} ₽</p> {/* цена */}
        <button // кнопка
          onClick={() => onAdd(name, price)} // при клике передаём родителю название и цену
          className="mt-2 px-3 py-1 bg-green-500 text-white rounded" // зелёная кнопка
        > {/* конец открывающего тега */}
          Добавить в заказ {/* текст на кнопке */}
        </button> {/* конец кнопки */}
      </div> // конец карточки
    ); // конец return
  } // конец render
} // конец CocktailCard

const bars = [ // массив баров (подсказка из задачи 4: переключать бары через массив объектов)
  { // первый бар
    name: "Бар «Лайм»", // название
    address: "ул. Ленина, 10", // адрес
    phone: "+7 900 111-22-33", // телефон
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Limes.jpg/250px-Limes.jpg", // логотип
  }, // конец первого бара
  { // второй бар
    name: "Бар «Мята»", // название
    address: "пр. Мира, 25", // адрес
    phone: "+7 900 444-55-66", // телефон
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Mentha_spicata-IMG_6186.jpg/250px-Mentha_spicata-IMG_6186.jpg", // логотип
  }, // конец второго бара
]; // конец массива

class App extends Component { // главный компонент приложения
  state = { // память приложения — три вещи из условия:
    currentBar: 0, // текущий выбранный бар: его номер в массиве bars (0 — первый)
    cocktails: [ // список коктейлей
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
    ], // конец списка коктейлей
    order: [], // корзина заказов, сначала пустая
  }; // конец state

  selectBar = (index) => { // функция «выбрать бар», получает номер бара
    this.setState({ currentBar: index }); // запоминаем выбранный номер -> React перерисует и покажет другой бар
  }; // конец selectBar

  addToOrder = (name, price) => { // функция «добавить в корзину» (как в задаче 8)
    this.setState({ order: [...this.state.order, { name, price }] }); // добавляем объект { name, price } в конец корзины
  }; // конец addToOrder

  render() { // что показать
    const { currentBar, cocktails, order } = this.state; // достаём из памяти три значения, чтобы не писать каждый раз this.state.
    const bar = bars[currentBar]; // берём объект выбранного бара по его номеру

    let total = 0; // сумма заказа
    order.forEach((item) => { // проходим по корзине
      total = total + item.price; // прибавляем цену каждого напитка
    }); // конец forEach

    return ( // что показать
      <div className="p-4 flex flex-col gap-4"> {/* общая обёртка: всё в столбик */}
        <div className="flex gap-2"> {/* блок с кнопками выбора бара */}
          {bars.map((b, idx) => ( // для каждого бара делаем кнопку: b — бар, idx — номер
            <button // кнопка бара
              key={idx} // метка
              onClick={() => this.selectBar(idx)} // при клике выбираем этот бар
              className="px-3 py-1 bg-gray-200 rounded" // серая кнопка
            > {/* конец открывающего тега */}
              {b.name} {/* на кнопке — название бара */}
            </button> // конец кнопки
          ))} {/* конец map */}
        </div> {/* конец блока кнопок */}

        <BarInfo // информация о выбранном баре
          name={bar.name} // название выбранного бара
          address={bar.address} // адрес
          phone={bar.phone} // телефон
          logo={bar.logo} // логотип
        /> {/* конец BarInfo */}

        <Services services={["Доставка", "Живая музыка", "Happy hour", "Аренда зала"]} /> {/* список услуг */}

        <div className="grid gap-4"> {/* блок с карточками коктейлей */}
          {cocktails.map((c, idx) => ( // для каждого коктейля из памяти
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

        <div> {/* блок корзины */}
          <h2 className="text-xl font-bold">Ваш заказ:</h2> {/* заголовок */}
          <ul className="list-disc pl-5"> {/* список */}
            {order.map((item, idx) => ( // для каждого напитка в корзине
              <li key={idx}> {/* пункт списка */}
                {item.name} — {item.price} ₽ {/* название и цена */}
              </li> // конец пункта
            ))} {/* конец map */}
          </ul> {/* конец списка */}
          <p className="font-bold">Итого: {total} ₽</p> {/* итоговая сумма */}
        </div> {/* конец блока корзины */}
      </div> // конец общей обёртки
    ); // конец return
  } // конец render
} // конец App

export default App; // отдаём главный компонент наружу

// Как работает: вверху кнопки баров (нажали — сменилась информация о баре), ниже услуги,
// карточки коктейлей с кнопкой «Добавить в заказ», внизу корзина и «Итого».
