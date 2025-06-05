import type EmployeeEntity from "../../employee";
import type { Employee } from "../../store/employee/employee.types";
import baseApi from "../api";
import type { CreateEmployeeDto } from "../../employee";

// export const employeeApi=baseApi.injectEndpoints({
//     endpoints:(builder)=>({
//         getEmployeeList:builder.query({
//             query:()=>({url:'/employee/',method:"GET"}),
//             providesTags:['EMPLOYEES']
//         })
//     })
// });

interface DeletePayload {
  id: number;
}
type GetPayload = DeletePayload;
interface EditPayload {
  id: number;
  emp: CreateEmployeeDto;
}
const employeeApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getEmployeeList: builder.query<Array<Employee>, void>({
      query: () => ({
        url: "/employee",
        method: "GET",
      }),
      providesTags: ["EMPLOYEES"],
    }),
    getEmployee: builder.query<EmployeeEntity, GetPayload>({
      query: ({ id }) => ({
        url: `/employee/${id}`,
        method: "GET",
      }),
      providesTags: ["EMPLOYEES"],
    }),
    deleteEmployee: builder.mutation<void, DeletePayload>({
      query: ({ id }) => ({
        url: `/employee/${id}`,

        method: "DELETE",
      }),

      invalidatesTags: ["EMPLOYEES"],
    }),
    editEmployee: builder.mutation<void, EditPayload>({
      query: ({ id, emp }) => {
        console.log("=== DEBUG INFO ===");
        console.log("Employee ID:", id);
        console.log("Employee Object:", emp);
        console.log("Object Keys:", Object.keys(emp));
        console.log("JSON String:", JSON.stringify(emp));
        console.log("==================");
        return {
          url: `/employee/${id}`,
          method: "PUT",
          body: JSON.parse(JSON.stringify(emp)),
        };
      },
      invalidatesTags: ["EMPLOYEES"],
    }),
     createEmployee: builder.mutation<void, CreateEmployeeDto>({
      query: (emp) => {
        return {
          url: `/employee/`,
          method: "POST",
          body: JSON.parse(JSON.stringify(emp)),
        };
      },
      invalidatesTags: ["EMPLOYEES"],
    }),
  }),
});
export const {
  useGetEmployeeListQuery,
  useGetEmployeeQuery,
  useDeleteEmployeeMutation,
  useEditEmployeeMutation,
  useCreateEmployeeMutation
} = employeeApi;
