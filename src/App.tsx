import MainRoutes from "./routes/MainRoutes.tsx";
import "./App.scss";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    const handleKeyboardOpen = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.clientHeight;
      const keyboardHeight = windowHeight - documentHeight;
      const rootElement = document.getElementById("root");
      if (rootElement) {
        rootElement.style.height = `calc(100vh - ${keyboardHeight}px)`;
      }
    };

    window.addEventListener("resize", handleKeyboardOpen);

    return () => {
      window.removeEventListener("resize", handleKeyboardOpen);
    };
  }, []);

  return (
    <>
      <MainRoutes />
    </>
  );
}

export default App;
