import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./Layout/Layout";
import PgDetails from "./pages/PgDetails"
import Pagenotfound from "./pages/Pagenotfound";
import About from "./pages/About";


const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index : true,
          element: <Home />,
        },
        {
          path : "/pg/:id",
          element : <PgDetails/>
        },
        {
          path : "/about",
          element : <About/>
        }
      ],
    },
    {
      path : "*",
      element : <Pagenotfound/>
    }
  ]);
  return (
    <RouterProvider router={router}/>
  )
};

export default App;
