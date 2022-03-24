import http from "../../../utils/http";
import { user } from "../../../constants/endpoints";

const postUser = ({
  name,
  surname,
  phoneNumber,
  email,
  password,
  dateOfBirth,
}) => {
  const POST_USER_ENDPOINT = user.register({
    name,
    surname,
    phoneNumber,
    email,
    password,
    dateOfBirth,
  });
  const { REACT_APP_API_BASE_URL: API_BASE_URL } = process.env;
  return http.post(`${API_BASE_URL}${POST_USER_ENDPOINT}`, {
    data: {
      firstName: name,
      lastName: surname,
      phoneNumber,
      email,
      password,
      dateOfBirth,
    },
  });
};

export default postUser;
