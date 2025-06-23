import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Esperamos un tick para que la transición tenga efecto
    const timeout = setTimeout(() => setVisible(true), 10);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-zinc-900">
      <div
        className={`bg-green-500 text-white text-xl p-6 rounded-xl shadow-lg transition-all duration-700 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}
      >
        🎉 ¡Aparecí animado al cargar!
      </div>
    </div>
  );
}

export default App;
