import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { rootReducer } from "./reducers/rootReducer";
import { setIsLoading } from "./reducers/main";

// Middleware
let pendingRequests = 0;

const asyncMiddleware = (store: any) => (next: any) => async (action: any) => {
  if (action.type.endsWith("/pending")) {
    console.log(`AsyncThunk Pending: ${action.type}`);

    pendingRequests += 1;

    if (pendingRequests === 1) {
      store.dispatch(setIsLoading(true));
    }
  }

  try {
    await next(action);
  } catch (error) {
    console.error("Custom action failed:", error);
  } finally {
    if (
      action.type.endsWith("/fulfilled") ||
      action.type.endsWith("/rejected")
    ) {
      // Decrement the count of pending requests
      pendingRequests -= 1;

      // If it's the last pending request, set loading to false
      if (pendingRequests === 0) {
        store.dispatch(setIsLoading(false));
      }
    }
  }
};

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(asyncMiddleware),
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
