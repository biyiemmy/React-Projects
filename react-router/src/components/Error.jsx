import {} from "react";
import { useRouteError } from "react-router-dom";

export const Error = () => {
  const error = useRouteError();
  console.log(error);

  return (
    <div>
      <h1>Error: {error.message}</h1>
      <pre>
        {error.status} - {error.statusTexts}
      </pre>
    </div>
  );
};
