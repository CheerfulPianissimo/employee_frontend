import { legacy_createStore as createStore } from "redux"; 
import employeeReducer from "./employee/employeeReducer";


export const store=createStore(employeeReducer);
