import http from "./httpService";
import Config from "../constants";

const apiUrl = Config.apiUrl;

const getlistCustomer = async (q = "", page = 0, per_page = 10) => {
  return await http.get(
    `${apiUrl}/list_users?search=${q}&_page=${page}&per_page=${per_page}`
  );
};

const deleteCustomer = async user_id => {
  return await http.delete(`${apiUrl}/user`, { user_id: user_id });
};

export default {
  getlistCustomer,
  deleteCustomer
};
