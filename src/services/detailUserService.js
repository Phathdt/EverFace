import http from "./httpService";
import Config from "../constants";

const apiUrl = Config.apiUrl;

const getDetailUser = async (user_id, page = 0, per_page = 20) => {
  return await http.get(
    `${apiUrl}/user_history?user_id=${user_id}&page=${page}&per_page=${per_page}`
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

const updateUser = async data => {
  let { user_id, name, image_base64, group, title } = data;

  return await http.put(`${apiUrl}/user`, {
    group: group || 0,
    title: title || 0,
    name: name,
    user_id: user_id,
    image_base64: image_base64
  });
};

export default {
  getDetailUser,
  deleteCustomer,
  changeAvatar,
  deleteAvatar,
  updateUser
};
