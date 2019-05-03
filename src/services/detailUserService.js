import http from "./httpService";

const apiUrl = "https://everface-api.herokuapp.com";
// const apiUrl = "http://localhost:5000";

const getDetailUser = async (user_id, page = 0, per_page = 10) => {
  return await http.get(
    `${apiUrl}/user_history?q=${user_id}&_page=${page}&_limit=${per_page}`
  );
};

const deleteCustomer = async user_id => {
  return await http.delete(`${apiUrl}/user`, { user_id: user_id });
};

export default {
  getDetailUser,
  deleteCustomer
};
