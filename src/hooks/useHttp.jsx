import React, { useState, useCallback } from 'react';

const useHttp = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const sendRequest = useCallback(async (requestConfig, applyData) => {
    try {
      setIsLoading(true);
      setError(null);
      let options;
      if (!requestConfig.method) {
        options = {};
      } else {
        options = {
          method: requestConfig.method,
          headers: requestConfig.headers,
          body: JSON.stringify(requestConfig.body),
        };
      }

      const res = await fetch(requestConfig.url, options);

      if (!res.ok) throw new Error(`Something went wrong (${res.status})`);

      const data = await res.json();

      setIsLoading(false);

      if (applyData) {
        applyData(data);
      }
    } catch (err) {
      console.error(err.message);
      setIsLoading(false);
      setError(err.message);
    }
  }, []);

  return {
    sendRequest,
    isLoading,
    error,
  };
};

export default useHttp;