import employeeReducer from "./employee/employeeReducer";
import logger from "redux-logger";
import { configureStore } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import type { Employee } from "./employee/employee.types";
import baseApi from "../api-services/api";
import { setupListeners } from "@reduxjs/toolkit/query";

const store = configureStore({
  reducer: {
    employee: employeeReducer,
    [baseApi.reducerPath]: baseApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(baseApi.middleware),
});
setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type AppStore = typeof store;

export const useAppDispatch = useDispatch<AppDispatch>;

export const useAppSelector = useSelector<RootState, Array<Employee>>;

export default store;
