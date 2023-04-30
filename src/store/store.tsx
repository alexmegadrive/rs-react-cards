import { combineReducers, configureStore } from "@reduxjs/toolkit";
import imageSearchReducer from "./imageSearch/imageSearch.slice";
import formDataReducer from "./formData/formData.slice";
import employeesReducer from "./employees/employeesSlice";
import { getImages } from "./getImages/getImages.slice";
import { TypedUseSelectorHook, useSelector } from "react-redux";
import { setupListeners } from "@reduxjs/toolkit/query";

export const reducers = combineReducers({
  search: imageSearchReducer,
  form: formDataReducer,
  employees: employeesReducer,
  [getImages.reducerPath]: getImages.reducer,
});
export const store = configureStore({
  reducer: reducers,

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(getImages.middleware),
});
setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;

export type RootReducer = ReturnType<typeof reducers>;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
