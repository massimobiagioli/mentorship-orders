import useSWR from "swr";
import apiFetcher from "../src/common/infrastructure/swr/apiFetcher";

const Home = () => {
  const { data, error } = useSWR("/api/order", apiFetcher);

  if (error) return <div>Failed to load orders</div>;
  if (!data) return <div>Loading...</div>;

  return <div>order list</div>;
};

export default Home;
