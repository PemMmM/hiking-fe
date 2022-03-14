import http from "../../../utils/http";
import { paths } from "../../../constants/endpoints";

const getAllPaths = (pathId) => {
  const ENDPOINT = paths.getPathById({ pathId });

  const { REACT_APP_API_BASE_URL: API_BASE_URL } = process.env;

  return http.get(`${API_BASE_URL}${ENDPOINT}`);
};

export default getAllPaths;
