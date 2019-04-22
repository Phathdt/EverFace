import axios from "axios";
import logger from "./logService";
import { toast } from "react-toastify";

axios.interceptors.response.use(
  response => {
    const { error, result } = response.data;

    if (error.code !== 0) {
      toast.error(error.message);

      return Promise.reject({ messages: error.message });
    } else {
      return result;
    }
  },
  error => {
    const expectedError =
      error.response &&
      error.response.status >= 400 &&
      error.response.status < 500;

    if (expectedError) {
      toast.error("An unexpected error occurrred.");
      logger.log(error);
    }

    return Promise.reject(error);
  }
);

export default {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete
};
