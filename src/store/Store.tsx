import { AnyAction, combineReducers, configureStore } from "@reduxjs/toolkit";
import userReducer from "./slice/userSlice";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["userReducer"], // Add the reducers you want to persist
};

const combinedReducer = combineReducers({
  userReducer: userReducer,
});

const rootReducer = (
  state: ReturnType<typeof combinedReducer> | undefined,
  action: AnyAction
) => {
  // if (action.type === Actions.logout) {
  //   return combinedReducer(undefined, {type: undefined});
  // }
  return combinedReducer(state, action);
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware: any) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
const persistor = persistStore(store);

export { store, persistor };
