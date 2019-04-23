import http from "./httpService";

const apiUrl = "https://5cbc10cafa84180014bdb218.mockapi.io";

const getListPayer = async () => {
  return await http.get(`${apiUrl}/current_payers`);
};

export default {
  getListPayer
};
