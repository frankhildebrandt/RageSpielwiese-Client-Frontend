import React from 'react';
import './App.css';
import { createRoot } from "react-dom/client";
import {
  RouterProvider,
  Route,
  Link, createHashRouter,
} from "react-router-dom";
import LoginView from "./view/LoginView";


const router = createHashRouter([
  {
    path: "/login",
    element: (
        <LoginView />
    ),
  },
  {
    path: "about",
    element: <div>About</div>,
  },
]);

function App() {
  return (
      <React.StrictMode>
        <RouterProvider router={router} />
      </React.StrictMode>
  );
}

export default App;
