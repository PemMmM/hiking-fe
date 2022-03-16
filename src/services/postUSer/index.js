import http from "utils/http";
import { user } from "constants/endpoints";

const postUser = ({
  firstName,
  lastName,
  phoneNumber,
  email,
  password,
  dateOfBirth,
  image,
}) => {
  const POST_USER_ENDPOINT = user.register({
    firstName,
    lastName,
    phoneNumber,
    email,
    password,
    dateOfBirth,
    image,
  });
  const { REACT_APP_API_BASE_URL: API_BASE_URL } = process.env;
  return http.post(`${API_BASE_URL}${POST_USER_ENDPOINT}`, {
    data: {
      firstName,
      lastName,
      phoneNumber,
      email,
      password,
      dateOfBirth,
      image,
    },
  });
};

export default postUser;
