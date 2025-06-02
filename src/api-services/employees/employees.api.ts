import type { Employee } from "../../store/employee/employee.types";
import baseApi from "../api";

// export const employeeApi=baseApi.injectEndpoints({
//     endpoints:(builder)=>({
//         getEmployeeList:builder.query({
//             query:()=>({url:'/employee/',method:"GET"}),
//             providesTags:['EMPLOYEES']
//         })
//     })
// });

interface DeletePayload{
    id:number
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
    deleteEmployee: builder.mutation<void,DeletePayload>({
      query: ({ id }) => ({
        url: `/employee/${id}`,

        method: "DELETE",
      }),

      invalidatesTags: ["EMPLOYEES"],
    })
  }),
});
export const { useGetEmployeeListQuery,useDeleteEmployeeMutation } = employeeApi;
