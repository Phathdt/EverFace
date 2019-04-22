import http from "./httpService";

const apiUrl = "https://5cbc10cafa84180014bdb218.mockapi.io";

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
