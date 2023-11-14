const API = `https://jsonplaceholder.typicode.com`;
import axios from "axios";

const jsonplaceholder = {
  get: (path, id) =>
    axios.get(API + `/${path}` + (id ? `/${id}` : ``)).then(({ data }) => data),
  patch: (path, id, payload) =>
    axios.patch(API + `/${path}/${id}`, payload).then(({ data }) => data),
};

export default jsonplaceholder;
