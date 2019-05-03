import http from "./httpService";

const apiUrl = "https://everface-api.herokuapp.com";
// const apiUrl = "http://localhost:5000";

const getlistCustomer = async (q = "", page = 0, per_page = 10) => {
  return await http.get(
    `${apiUrl}/list_users?q=${q}&_page=${page}&_limit=${per_page}`
  );
};

const deleteCustomer = async user_id => {
  return await http.delete(`${apiUrl}/user`, { user_id: user_id });
};

export default {
  getlistCustomer,
  deleteCustomer
};
