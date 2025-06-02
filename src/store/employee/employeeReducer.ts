import {
  EMPLOYEE_ACTION_TYPES,
  type Employee,
  type EmployeeAction,
  type EmployeeState,
} from "./employee.types";
	
import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
const initialState:{employees:Array<Employee>} = { employees: [] };

export const employeeSlice=createSlice({
  name:'employee',
  initialState,
  reducers:{
    addEmployee:(state,action: PayloadAction<Employee>)=>{
      state.employees.push(action.payload);
    },
    deleteEmployee:(state,action: PayloadAction<string>)=>{
      state.employees=state.employees.filter((emp)=>emp.employeeId!=action.payload);
    }
  }
})

 
	
export const { addEmployee,deleteEmployee } = employeeSlice.actions
export default employeeSlice.reducer;
