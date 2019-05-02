import axios from "axios";
import logger from "./logService";
import { toast } from "react-toastify";
import _ from "lodash";

axios.interceptors.response.use(
  response => {
    const { error, result, paginate } = response.data;

    if (error.code !== 0) {
      toast.error(error.message);
      logger.log(error.message);

      return Promise.reject({ messages: error.message });
    } else {
      if (_.isEmpty(paginate)) {
        return result;
      } else {
        return { result, paginate };
      }
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
  patch: axios.patch,
  delete: axios.delete
};
