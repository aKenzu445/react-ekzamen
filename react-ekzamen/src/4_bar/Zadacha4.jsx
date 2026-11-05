// Работа 4. Бар — Задача 4. Информация о сети баров
// Компонент с информацией о баре: название, адрес, телефон, логотип.

import React, { Component } from "react"; // подключаем React и Component

class BarInfo extends Component { // компонент «Информация о баре»
  render() { // что показать
    const { name, address, phone, logo } = this.props; // достаём из props название, адрес, телефон, логотип
    return ( // что показать
      <div className="flex items-center gap-4 p-4 bg-gray-100 rounded-lg"> {/* блок: элементы в ряд, по центру по высоте, серый фон */}
        <img src={logo} alt={name} className="w-16 h-16 rounded-full" /> {/* логотип 64×64, сделанный круглым */}
        <div> {/* блок для текста справа от логотипа */}
          <h1 className="text-2xl font-bold">{name}</h1> {/* название бара крупно */}
          <p>{address}</p> {/* адрес */}
          <p>☎ {phone}</p> {/* значок телефона и номер */}
        </div> {/* конец блока текста */}
      </div> // конец блока
    ); // конец return
  } // конец render
} // конец BarInfo

// Пример использования (чтобы компонент было видно на экране).
// Подсказка из методички: потом разные бары можно переключать через массив объектов (сделано в задаче 9).
class Primer extends Component { // пример
  render() { // что показать
    return ( // возвращаем BarInfo с данными
      <BarInfo // информация о баре
        name="Бар «Лайм»" // название
        address="ул. Ленина, 10" // адрес
        phone="+7 900 111-22-33" // телефон
        logo="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Limes.jpg/250px-Limes.jpg" // адрес логотипа
      /> // конец BarInfo
    ); // конец return
  } // конец render
} // конец Primer

export default Primer; // отдаём наружу
