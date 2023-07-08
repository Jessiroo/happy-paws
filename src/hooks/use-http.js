import { useCallback, useState } from 'react';

const useHttp = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const sendRequest = useCallback(async (requestConfig, dataApplication) => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(requestConfig.url, {
        method: requestConfig.method,
        headers: requestConfig.headers ? requestConfig.headers : {},
        body: requestConfig.body ? requestConfig.body : null,
      });
  
      if (!response.ok) {
        throw new Error('Unable to retrieve data.')
      }
    
      const responseData = await response.json();
  
      dataApplication(responseData);
    } catch (error) {
      setError(error.message || 'Something went wrong.');
    }
    
    setIsLoading(false);
  }, [])

  return { 
    isLoading,
    error,
    sendRequest,
  };
};

export default useHttp;