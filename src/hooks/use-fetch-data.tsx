import { useState, useEffect } from 'react';

export function useFetchData(url: string) {
  const [data, setData] = useState();

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setData(data));

    return () => {};
  }, [url]);

  return data;
}
