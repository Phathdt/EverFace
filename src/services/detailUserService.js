import http from "./httpService";

const apiUrl = "http://localhost:5000";

const getDetailUser = async (user_id, page = 0, per_page = 10) => {
  return await http.get(
    `${apiUrl}/user_history?q=${user_id}&_page=${page}&_limit=${per_page}`
  );
};

export default {
  getDetailUser
};
