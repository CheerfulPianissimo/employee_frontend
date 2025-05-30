import {
  EMPLOYEE_ACTION_TYPES,
  type EmployeeAction,
  type EmployeeState,
} from "./employee.types";

const initialState = { employees: [] };

function employeeReducer(
  state: EmployeeState = initialState,
  action: EmployeeAction
): EmployeeState {
  switch (action.type) {
    case EMPLOYEE_ACTION_TYPES.ADD:
      return {
        ...state,
        employees: [...state.employees,action.payload]
      };
    case EMPLOYEE_ACTION_TYPES.DELETE:
      return {
        ...state,
        employees: state.employees.filter(
          (emp) => emp.employeeId != action.payload
        ),
      };
    case EMPLOYEE_ACTION_TYPES.UPDATE:
      return {
        ...state,
        employees: state.employees.map((emp) => {
          if (emp.employeeId === action.payload.employeeId) {
            return  {...emp,...action.payload};
          } else {
            return emp;
          }
        }),
      };
    default:
      return state;
  }
}

export default employeeReducer;
