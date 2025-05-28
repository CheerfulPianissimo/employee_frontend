import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";
import "./App.css";
import { Create } from "./pages/create";
import { Login } from "./pages/login";
import UncontrolledLogin from "./pages/login/UncontrolledLogin";
import NotFound from "./pages/notfound";
import { Layout } from "./components/Layout";

function isLoggedIn(){
  const token=window.localStorage.getItem("isLoggedIn");
  return token==="true";
}

const router=createBrowserRouter([
  {
    path:"/",
    element:isLoggedIn()?<Navigate to="/employees" />: <Login/>,
    // errorElement:<NotFound/>
  },
  {
    path:"/login",
    element:isLoggedIn()?<Navigate to="/employees" />: <Login/>,
  },
  {
    path:"/employees",
    element:isLoggedIn()?<Layout />: <Navigate to="/login" />,
    children: [
      { index: true, element: <Create />},
    { path: "create", element: <Create />},
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
