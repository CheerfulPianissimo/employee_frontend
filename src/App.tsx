import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import { Create } from "./pages/create";
import { Login } from "./pages/login";
import UncontrolledLogin from "./pages/login/UncontrolledLogin";
import NotFound from "./pages/notfound";


const router=createBrowserRouter([
  {
    path:"/",
    element:<Login/>,
    // errorElement:<NotFound/>
  },
  {
    path:"/login",
    element:<Login/>,
  },
  {
    path:"/employees",
    element:<Create/>,
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
