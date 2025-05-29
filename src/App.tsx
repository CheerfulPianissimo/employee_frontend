import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";
import "./App.css";
import { Create } from "./pages/create";
import { Login } from "./pages/login";
import NotFound from "./pages/notfound";
import { ProtectedLayout } from "./components/ProtectedLayout";
import { EmployeeCard } from "./components/EmployeeCard";
import { EmployeeDetails } from "./pages/employee_details";
import { EmployeeList } from "./pages/employee_list";
import { Edit } from "./pages/edit";

function isLoggedIn(){
  const token=window.localStorage.getItem("isLoggedIn");
  return token==="true";
}

const router=createBrowserRouter([
  {
    path:"/",
    element:<Navigate to="/login"/>,
    // errorElement:<NotFound/>
  },
  {
    path:"/login",
    element: <Login/>,
  },
  {
    path:"/employees",
    element:<ProtectedLayout />,
    children: [
      { index: true, element: <Create />},
      { path: "create", element: <Create />},
       { path: "edit/:id", element: <Edit />},
      {path:":id",element: <EmployeeDetails/>},
       {path:"list",element: <EmployeeList/>}
    ]
  },
  {
    path:"*",
    element:<NotFound/>
  }
]);
function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
