import { apiUrl } from "./constants";

export const convertPathToUrl = path => {
  let pathConverted = path
    .split(/\/|\\/)
    .slice(1, 100)
    .join("/");

  return `${apiUrl}/img/${pathConverted}`;
};

export const convertStringToBase64 = string => {
  return `data:image/png;base64,${string}`;
};

export default {
  convertPathToUrl,
  convertStringToBase64
};
