import MainRoutes from "./routes/MainRoutes.tsx";
import "./App.scss";

function App() {
  if("virtualKeyboard" in navigator) {
    // @ts-ignore
    navigator.virtualKeyboard.show()
    var height = navigator.virtualKeyboard?.boundingRect?.height
  }

  
  return (
    <div>
    height: {height}
      <MainRoutes />
    </div>
  );
}

export default App;
