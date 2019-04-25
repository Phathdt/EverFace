import http from "./httpService";

const apiUrl = "https://5cbc10cafa84180014bdb218.mockapi.io";

const getListPayer = async () => {
  return await http.get(`${apiUrl}/current_payers`);
};

const updateUser = async data => {
  let { user_id, name, image_base64, group, title } = data;

  return await http.put(`${apiUrl}/user/12`, {
    group: group || 0,
    title: title || 0,
    name: name,
    user_id: user_id,
    image_base64: image_base64
  });
};

const createUser = async data => {
  let { user_id, name, image_base64, group, title } = data;

  return await http.post(`${apiUrl}/user`, {
    group: group || 0,
    title: title || 0,
    name: name,
    user_id: user_id,
    image_base64: image_base64
  });
};

export default {
  getListPayer,
  updateUser,
  createUser
};
