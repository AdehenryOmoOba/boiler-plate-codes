import axios from "axios";
import { useQuery } from "react-query";

function useFetchData(alias, url, urlExt = "") {
  const { ...all } = useQuery([alias, urlExt], async ({ queryKey }) => {
    return axios.get(url + queryKey[1]).then((response) => response.data);
  });
  return all;
}

export default useFetchData;
