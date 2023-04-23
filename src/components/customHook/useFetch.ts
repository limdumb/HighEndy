import { useEffect, useState } from "react";
import { baseInstance } from "../../API/instance";

interface State<T> {
  loading: boolean;
  error: any;
  data: T;
}

export default function useFetch<T>(
  endPoint: string,
  initialValue: T
): State<T> {
  const [fetchData, setFetchData] = useState<State<T>>({
    loading: true,
    error: null,
    data: initialValue,
  });

  useEffect(() => {
    let isMounted = true;
    async function getFetchData() {
      try {
        const response = await baseInstance.get(endPoint);
        if (isMounted) {
          setFetchData({ loading: false, error: null, data: response.data });
        }
      } catch (error: any) {
        if (isMounted) {
          setFetchData({ loading: false, error: error, data: initialValue });
        }
      }
    }

    getFetchData();

    return () => {
      isMounted = false;
    };
  }, [endPoint, baseInstance]);

  return fetchData;
}
