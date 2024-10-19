import React from "react";
import { groupByLane } from "../helpers";

const useGetProducts = () => {
  const [data, setData] = React.useState(null);
  const [loading, setLoading] = React.useState<boolean>(false);
  const [error, setError] = React.useState<string | null>(null);

  React.useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch("/data.json");
        if (!response.ok) {
          throw new Error(`Error: ${response.statusText}`);
        }
        const result = await response.json();
        setData(result);
      } catch (error: any) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const { for_you, features, hot, null: noLane } = groupByLane(data || []);

  return {
    data: {
      for_you: for_you || [],
      hot: hot || [],
      features: features || [],
      noLane: noLane || [],
    },
    loading,
    error,
  };
};

export default useGetProducts;
