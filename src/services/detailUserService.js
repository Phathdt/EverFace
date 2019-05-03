import http from "./httpService";

// const apiUrl = "https://everface-api.herokuapp.com";
const apiUrl = "http://localhost:5000";

const getDetailUser = async (user_id, page = 0, per_page = 10) => {
  return await http.get(
    `${apiUrl}/user_history?user_id=${user_id}&_page=${page}&_limit=${per_page}`
  );
};

const deleteCustomer = async user_id => {
  return await http.delete(`${apiUrl}/user`, { user_id: user_id });
};

const changeAvatar = async (user_id, image_url) => {
  return await http.put(`${apiUrl}/users_default_image`, {
    user_id: user_id,
    image_url: image_url
  });
};

const deleteAvatar = async (user_id, image_url) => {
  return await http.delete(`${apiUrl}/user_image`, {
    user_id: user_id,
    image_url: image_url
  });
};

export default {
  getDetailUser,
  deleteCustomer,
  changeAvatar,
  deleteAvatar
};
