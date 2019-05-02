import http from "./httpService";

const apiUrl = "http://localhost:5000";

const getlistCustomer = async (q = "", page = 0, per_page = 10) => {
  return await http.get(
    `${apiUrl}/list_users?q=${q}&_page=${page}&_limit=${per_page}`
  );
};

export default {
  getlistCustomer
};
