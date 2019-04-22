import http from "./httpService";

const apiUrl = "https://5cbc10cafa84180014bdb218.mockapi.io";

export async function getListNewCustomer() {
  return await http.get(`${apiUrl}/current_customers`);
}

export async function callCustomer(id) {
  return await http.post(`${apiUrl}/call`, {
    user_id: id
  });
}

export default {
  getListNewCustomer,
  callCustomer
};
