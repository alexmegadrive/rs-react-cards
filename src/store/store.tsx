import { combineReducers, configureStore } from "@reduxjs/toolkit";
import imageSearchReducer from "./imageSearch/imageSearch.slice";
import formDataReducer from "./formData/formData.slice";

const reducers = combineReducers({
  search: imageSearchReducer,
  form: formDataReducer,
});
export const store = configureStore({
  reducer: reducers,
});
