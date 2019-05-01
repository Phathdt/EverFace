import http from "./httpService";

const apiUrl = "http://localhost:5000";

const getListNewCustomer = async () => {
  return await http.get(`${apiUrl}/current_customers`);
};

const callCustomer = async id => {
  return await http.post(`${apiUrl}/call`, {
    user_id: id
  });
};

export default {
  getListNewCustomer,
  callCustomer
};
