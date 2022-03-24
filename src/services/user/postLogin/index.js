import http from "../../../utils/http";
import { user } from "../../../constants/endpoints";

const postLogin = ({ email, password }) => {
  const POST_USER_ENDPOINT = user.login({
    email,
    password,
  });
  const { REACT_APP_API_BASE_URL: API_BASE_URL } = process.env;
  return http.post(`${API_BASE_URL}${POST_USER_ENDPOINT}`, {
    data: {
      email,
      password,
    },
  });
};

export default postLogin;
