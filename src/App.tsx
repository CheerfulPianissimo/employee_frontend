import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import "./App.css";
import { lazy } from "react";
import baseApi from "./api-services/api";
import { Login } from "./pages/login";
import NotFound from "./pages/notfound";
import { ProtectedLayout } from "./components/ProtectedLayout";
import store  from "./store/store";
import { Provider } from "react-redux";

const EmployeeList = lazy(() => import("./pages/employee_list"));
const Create = lazy(() => import("./pages/create"));
const Edit = lazy(() => import("./pages/edit"));
const EmployeeDetails = lazy(() => import("./pages/employee_details"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/login" />,
    // errorElement:<NotFound/>
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/employees",
    element: <ProtectedLayout />,
    children: [
      { index: true, element: <EmployeeList /> },
      { path: "create", element: <Create /> },
      { path: "edit/:id", element: <Edit /> },
      { path: ":id", element: <EmployeeDetails  /> },
      { path: "list", element: <EmployeeList /> },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);
function App() {
  return (
    <>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </>
  );
}

export default App;
