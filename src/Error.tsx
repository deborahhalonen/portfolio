import React from 'react';
import { ErrorResponse, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError() as ErrorResponse;
  console.error(error);

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
    </div>
  );
}

export default ErrorPage