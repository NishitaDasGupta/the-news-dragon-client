import {
  Navigate,
    createBrowserRouter
  } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home/Home";
import Category from "../pages/Home/Category/Category";
import NewsLayout from "../layouts/NewsLayout";
import News from "../pages/News/News";
import LoginLayout from "../layouts/LoginLayout";
import LogIn from "../pages/LogIn/LogIn";
import Register from "../pages/Register/Register";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import Terms from "../pages/Shared/Terms/Terms";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginLayout></LoginLayout>,
    children: [
      {
        path: "/",
      element: <Navigate to='/category/0'></Navigate>
      },
      {
        path: "login",
      element: <LogIn></LogIn>
      },
      {
        path: "register",
      element: <Register></Register>
      },
      {
        path: "terms",
      element: <Terms></Terms>
      }
    ]
},
    {
      path: "category",
      element: <Main></Main>,
      children : [
        {
          path: ":id",
          element: <Category></Category>,
          loader: ({params}) => fetch(`https://the-news-dragon-server-brown-nu.vercel.app/category/${params.id}`)
      },
      ]
    },
    {
      path: "/news",
      element: <NewsLayout></NewsLayout>,
    children:[
      {
        path: ":id",
        element: <PrivateRoute><News></News></PrivateRoute>,
        loader: ({params}) => fetch(`https://the-news-dragon-server-brown-nu.vercel.app/news/${params.id}`)
      }
    ]
    },
  ]);

  export default router;