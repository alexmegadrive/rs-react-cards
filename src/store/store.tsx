import { combineReducers, configureStore } from "@reduxjs/toolkit";
import imageSearchReducer from "./imageSearch/imageSearch.slice";
import formDataReducer from "./formData/formData.slice";

export const reducers = combineReducers({
  search: imageSearchReducer,
  form: formDataReducer,
});
export const store = configureStore({
  reducer: reducers,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        // Ignore these action types
        ignoredActions: ["payload/file"],
        // Ignore these field paths in all actions
        ignoredActionPaths: ["payload.file"],
        // Ignore these paths in the state
        ignoredPaths: ["form.formData.file"],
      },
    }),
});
export type RootState = ReturnType<typeof store.getState>;

export type RootReducer = ReturnType<typeof reducers>;
