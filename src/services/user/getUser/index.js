import http from "../../../utils/http";
import { user } from "../../../constants/endpoints";

const getUser = (userId) => {
  const ENDPOINT = user.getUserById(userId);

  const { REACT_APP_API_BASE_URL: API_BASE_URL } = process.env;

  return http.get(`${API_BASE_URL}${ENDPOINT}`);
};

export default getUser;
