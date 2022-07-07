import useSWR from "swr";
import apiFetcher from "../src/common/infrastructure/swr/apiFetcher";

const Workflow = () => {
  const { data, error } = useSWR("/api/workflow", apiFetcher);

  if (error) return <div>Failed to load workflows</div>;
  if (!data) return <div>Loading...</div>;

  return <div>QUI ANDIAMO A GESTIRE I NOSTRI WORKFLOWS</div>;
};

export default Workflow;
