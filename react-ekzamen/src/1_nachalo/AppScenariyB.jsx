// Работа 1. Начало работы с React — App.js, сценарий Б: App просто возвращает Counter

// App.js
import Counter from './Counter'; // берём компонент Counter из файла Counter.jsx

function App() { // главный компонент приложения
  // Функция App просто возвращает результат вызова другого компонента.
  // React вызовет App(), а он сразу вернет <Counter />.
  return <Counter />; // App ничего своего не показывает — сразу отдаёт счётчик
} // конец компонента App

export default App; // отдаём App наружу

// Цепочка: root.render(<App />) -> App() -> возвращает <Counter /> -> React вызывает Counter() -> получает JSX -> вставляет в DOM
