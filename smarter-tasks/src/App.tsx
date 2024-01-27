import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import Signin from "./pages/signin/index";
import ProtectedRoute from "./ProtectedRoute";
import NotFound from "./pages/Notfound";
import Signup from "./pages/signup";
import Dashboard from "./pages/dashboard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Signup/>,
  },{
    path: "/signup",
    element: <Signup/>,
  },{
    path: "/signin", // then we've added the signin route
    element: <Signin />,
  },
  {
    path: "*",
    element: <Navigate to="/notfound" replace />,
  },
  {
    path: "/notfound",
    element: <NotFound />,
  },
  {
    path: "/dashboard",
    element: (
      <ProtectedRoute>
        <Dashboard />
      </ProtectedRoute>
    ),
  },
]);

const App = () => {
  return (
    <>
    
      <RouterProvider router={router} />
    </>
  );
};

export default App;
