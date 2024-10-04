/* eslint-disable no-unused-vars */
import React from "react";
import {
    createBrowserRouter,

    Link,
} from "react-router-dom";
import Main from "../Layout/Main/Main";
import Home from "../Pages/Home/Home";
export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/about",
                element: "about"
            },
        ]
    }
]);