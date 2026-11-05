// Работа 1. Начало работы с React — App.js, сценарий А: App показывает Counter внутри себя

// App.js
import Counter from './Counter'; // Импортируем функцию Counter из файла Counter.jsx

function App() { // главный компонент приложения
  // Функция App вызывается React'ом из root.render(<App />);
  // Она возвращает JSX, который включает тег <Counter />
  return ( // что показать на экране
    <div className="app"> {/* обёртка с CSS-классом app */}
      <h1>Мое приложение</h1> {/* заголовок */}
      {/* React видит тег <Counter /> и понимает, что это компонент */}
      <Counter /> {/* React вызовет функцию Counter() и подставит сюда то, что она вернёт */}
    </div> // конец обёртки
  ); // конец return
} // конец компонента App

export default App; // отдаём App наружу (его берёт index.js)
