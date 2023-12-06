import MainRoutes from "./routes/MainRoutes.tsx";
import "./App.scss";
import { useEffect } from "react";
import { useAppDispatch } from "./redux/store.ts";
import { getUser } from "./redux/actions/auth.ts";

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getUser());
  }, []);

  return (
    <>
      <MainRoutes />
    </>
  );
}

export default App;
