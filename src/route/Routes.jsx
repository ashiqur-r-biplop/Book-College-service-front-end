/* eslint-disable no-unused-vars */
import React from "react";
import {
    createBrowserRouter,

    Link,
} from "react-router-dom";
import Main from "../Layout/Main/Main";
import Home from "../Pages/Home/Home";
import ErrorPage from "../Pages/404/ErrorPage";
import Colleges from "../Pages/Colleges/Colleges";
import Admission from "../Pages/Admission/Admission";
import MyCollege from "../Pages/MyCollege/MyCollege";
import PrivateRoute from "../PrivateRoutes/PrivateRoute";
import Register from "../Pages/Login/Register";
import Login from "../Pages/Login/Login";
export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/colleges",
                element: <Colleges />
            },
            {
                path: "/admission",
                element: <Admission />
            },
            {
                path: "/my-college",
                element: <PrivateRoute><MyCollege /></PrivateRoute>
            },
            {
                path: "/login",
                element: <Login />
            },
            {
                path: "/register",
                element: <Register />
            }
        ]
    }
]);