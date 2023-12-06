import MainRoutes from "./routes/MainRoutes.tsx";
import "./App.scss";
import { useEffect } from "react";
import { useAppDispatch } from "./redux/store.ts";
import { getSession } from "./redux/actions/auth.ts";

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getSession());
  }, []);

  return (
    <>
      <MainRoutes />
    </>
  );
}

export default App;
