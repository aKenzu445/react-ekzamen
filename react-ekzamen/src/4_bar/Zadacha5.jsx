// Работа 4. Бар — Задача 5. Список услуг бара
// Компонент со списком дополнительных услуг: доставка, живая музыка, happy hour, аренда зала.
// Подсказка: передавай массив услуг через props.

import React, { Component } from "react"; // подключаем React и Component

class Services extends Component { // компонент «Услуги»
  render() { // что показать
    const { services } = this.props; // достаём из props массив услуг
    return ( // что показать
      <ul className="list-disc pl-5"> {/* список с точками и отступом слева */}
        {services.map((s, idx) => ( // проходим по услугам: s — название услуги, idx — номер
          <li key={idx}>{s}</li> // каждая услуга — пункт списка
        ))} {/* конец map */}
      </ul> // конец списка
    ); // конец return
  } // конец render
} // конец Services

// Пример использования: массив услуг передаём через props
class Primer extends Component { // пример
  render() { // что показать
    return <Services services={["Доставка", "Живая музыка", "Happy hour", "Аренда зала"]} />; // передаём массив услуг
  } // конец render
} // конец Primer

export default Primer; // отдаём наружу
