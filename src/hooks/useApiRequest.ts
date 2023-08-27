import { useState, useEffect, useCallback, useRef } from "react";

interface UseApiRequestProps<T> {
  apiFunction: () => Promise<T>;
  initialData?: T;
}

interface UseApiResponse<T> {
  data?: T;
  isLoading: boolean;
  error?: Error;
  refetch: () => Promise<void>;
}

export const useApiRequest = <T>({
  apiFunction,
  initialData,
}: UseApiRequestProps<T>): UseApiResponse<T> => {
  const [data, setData] = useState<T | undefined>(initialData);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | undefined>();

  const apiFunctionRef = useRef(apiFunction);

  useEffect(() => {
    apiFunctionRef.current = apiFunction;
  }, [apiFunction]);

  // useCallback is used to prevent infinite loops
  const fetchData = useCallback(async () => {
    try {
      setIsLoading(true);
      const response = await apiFunctionRef.current();
      setData(response);
    } catch (err) {
      setError(err as Error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { data, isLoading, error, refetch: fetchData };
};
