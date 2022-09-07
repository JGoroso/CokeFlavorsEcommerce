import { useState, useEffect } from "react";

export const useAsync = (AsyncFunction, dependencies = []) => {
  const [data, setData] = useState();
  const [error, setError] = useState(true);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      AsyncFunction()
        .then((resp) => {
          setData(resp);
        })
        .catch((error) => {
          setError(error);
        })
        .finally(() => {
          setIsLoading(false);
        });
    }, 200);
  }, dependencies);

  return {
    data,
    error,
    isLoading,
  };
};
