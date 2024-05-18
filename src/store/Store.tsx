import { AnyAction, combineReducers, configureStore } from "@reduxjs/toolkit";
import userReducer from "./slice/userSlice";
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

const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
