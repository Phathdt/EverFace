import http from "./httpService";
import { toast } from "react-toastify";

const apiUrl = process.env.REACT_APP_API_DOMAIN;
const tokenKey = "token";

http.setJwt(getJwt());

export async function login({ email, password }) {
  const { data } = await http.post(`${apiUrl}/users/sign_in`, {
    user: { email, password }
  });

  toast("Wow so easy !");

  localStorage.setItem(tokenKey, data.token);

  return data;
}

export function loginWithJwt(jwt) {
  localStorage.setItem(tokenKey, jwt);
}

export function logout() {
  localStorage.removeItem(tokenKey);
}

export async function getCurrentUser() {
  try {
    if (getJwt() == null) {
      return null;
    }

    const { data } = await http.get(`${apiUrl}/users/current`);

    const { user } = data;

    return user;
  } catch (ex) {
    return null;
  }
}

export function getJwt() {
  return localStorage.getItem(tokenKey);
}

export default {
  login,
  loginWithJwt,
  logout,
  getCurrentUser,
  getJwt
};
