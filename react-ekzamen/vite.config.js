// Настройки Vite — программы, которая запускает наш React-проект (как npm start в Create React App)
import { defineConfig } from "vite"; // берём функцию для описания настроек
import react from "@vitejs/plugin-react"; // плагин: учит Vite понимать React и JSX
import tailwindcss from "@tailwindcss/vite"; // плагин: подключает Tailwind CSS (классы p-4, bg-blue-500 и т.д.)

export default defineConfig({ // отдаём настройки наружу
  plugins: [react(), tailwindcss()], // включаем оба плагина
}); // конец настроек
