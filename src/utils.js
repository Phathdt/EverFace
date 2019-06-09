import { apiUrl } from "./constants";

export const convertPathToUrl = path => {
  let pathConverted = path
    .split(/\/|\\/)
    .slice(1, 100)
    .join("/");

  return `${apiUrl}/img/${pathConverted}`;
};
