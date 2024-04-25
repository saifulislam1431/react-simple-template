import React from "react";
import {
  Navigate,
  createBrowserRouter,
} from "react-router-dom";
import Main from "../layouts/Main/Main";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Dashboard from "../pages/Dashboard/Dashboard";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import Profile from "../pages/Dashboard/User/Profile/Profile";
import Activity from "../pages/Dashboard/User/Activity/Activity";
import ForgotPassword from "../pages/ForgotPassword/ForgotPassword";


// Functional component for router configuration
export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />
      },
      {
        path: "forgot-password",
        element: <ForgotPassword />
      }
    ]
  },
  {
    path: "/dashboard",
    element: <PrivateRoute><Dashboard /></PrivateRoute>,
    children: [
      {
        path: "profile",
        element: <PrivateRoute><Profile /></PrivateRoute>
      },
      {
        path: "activity",
        element: <PrivateRoute><Activity /></PrivateRoute>
      }
    ]
  }
]);
