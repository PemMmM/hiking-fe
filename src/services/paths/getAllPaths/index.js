import http from "../../../utils/http";
import { paths } from "../../../constants/endpoints";

const getAllPaths = () => {
  const ENDPOINT = paths.getAllPaths();
  const { REACT_APP_API_BASE_URL: API_BASE_URL } = process.env;

  return http.get(`${API_BASE_URL}${ENDPOINT}`);
};

export default getAllPaths;
