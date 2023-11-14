import axios from "axios";
const API = `https://jsonplaceholder.typicode.com`;

const list = {
  get: (path, id) =>
    axios(API + `/${path}` + (id ? `/${id}` : ``)).then(({ data }) => data),
  delete: (path, id) =>
    axios.delete(API + `/${path}/${id}`).then(({ data }) => data),
  patch: (path, id, payload) =>
    axios.patch(API + `/${path}/${id}`, payload).then(({ data }) => data),
  post: (path, payload) =>
    axios.post(API + `/${path}`, payload).then(({ data }) => data),
};

export default list;