import "./index.css";
import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Main from "./Components/Layouts/Main";
import Home from "./Components/Header/Home/Home";
import VpsHosting from "./Components/Header/VpsHosting/VpsHosting";
import SharedHosting from "./Components/Header/SharedHosting/SharedHosting";
import DedicatedHosting from "./Components/Header/DedicatedHosting/DedicatedHosting";
import Contactus from "./Components/Header/ContactUs/Contactus";
import Login from "./Components/Header/Login/Login";
import Signup from "./Components/Header/Signup/Signup";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/",
          element: <Home></Home>,
        },
        {
          path: "/vps",
          element: <VpsHosting></VpsHosting>,
        },
        {
          path: "/shared",
          element: <SharedHosting></SharedHosting>,
        },
        {
          path: "/dedicated",
          element: <DedicatedHosting></DedicatedHosting>,
        },
        {
          path: "/contactus",
          element: <Contactus></Contactus>,
        },
        {
          path: "/Login",
          element: <Login></Login>,
        },
        {
          path: "/signup",
          element: <Signup></Signup>,
        },
      ],
    },
  ]);
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
