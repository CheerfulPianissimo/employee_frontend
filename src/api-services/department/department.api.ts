import { Department } from "../../employee";
import baseApi from "../api";

const departmentApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getDepartmentsList: builder.query<Array<Department>, void>({
      query: () => ({
        url: "/department",
        method: "GET",
      }),
      providesTags:['DEPARTMENT']
    }),
  }),
});

export const {useGetDepartmentsListQuery}=departmentApi;