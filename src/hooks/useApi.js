import axios from "axios";
import React from "react";

import { apiUrl } from "./constants";

export function useApi(endPoint) {
  const [result, setResult] = React.useState();
  const [isLoading, setLoading] = React.useState(false);

  React.useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      axios
        .get(`${apiUrl}${endPoint}`)
        .then(({ data }) => {
          setResult(data);
          setLoading(false);
        });
    }, 2000);
  }, [endPoint]);

  return [result, isLoading];
}