import http from "./httpService";
import Config from "../constants";

const apiUrl = Config.apiUrl;

const getlistCustomer = async (search = "", page = 0, per_page = 20) => {
  return await http.get(
    `${apiUrl}/list_users?page=${page}&per_page=${per_page}&search=${search}`
  );
};

const deleteCustomer = async user_id => {
  return await fetch(`${apiUrl}/user`, {
    method: "DELETE",
    headers: {
      Accept: "*/*",
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ user_id: user_id })
  });
};

export default {
  getlistCustomer,
  deleteCustomer
};
