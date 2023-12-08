import MainRoutes from "./routes/MainRoutes.tsx";
import "./App.scss";
import { useEffect } from "react";
import { useAppDispatch } from "./redux/store.ts";
import { getUser, select } from "./redux/actions/auth.ts";

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getUser());
    dispatch(select())
  }, []);

  return (
    <>
      <MainRoutes />
    </>
  );
}

export default App;
