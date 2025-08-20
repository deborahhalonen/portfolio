import React from 'react';
import ReactDOM from 'react-dom';
import './base.scss';
import './text.scss';
import './fonts.css';
import App from './App';
import DocumentView from './Document';
import ErrorPage from "./Error";
import * as serviceWorker from './serviceWorker';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/portfolio",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/files/:file",
    element: <DocumentView />,
    errorElement: <ErrorPage />,
  },
]);

ReactDOM.render(
  <RouterProvider router={router} />,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
