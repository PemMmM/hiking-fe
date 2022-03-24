/*
  Group endpoints by resource and HTTP Method
*/

const user = {
  login: () => `/login`,
  register: () => `/register`,
  putPersonalDetails: () => `/profile-edit/personal`,
};

// const users = {
//   getUsers: () => `/users`,
// };

const paths = {
  getAllPaths: () => `/paths`,
  getPathById: ({ pathId }) => `/path/${pathId}`,
};

export { user, paths };
