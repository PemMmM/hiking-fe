/*
  Group endpoints by resource and HTTP Method
*/

const user = {
  getUserById: ()=> `/user-details`,
  login: () => `/login`,
  register: () => `/register`,
  putPersonalDetails: () => `/profile-edit/personal`,
};

const paths = {
  getAllPaths: () => `/paths`,
  getPathById: ({ pathId }) => `/paths/${pathId}`,
};

export { user, paths };
