import axios from "axios";
const API = `https://61498bf2035b3600175ba32f.mockapi.io`;

const countries = {
  get: (path, id) =>
    axios(API + `/${path}` + (id ? `/${id}` : ``)).then(({ data }) => data),
  delete: (path, id) =>
    axios.delete(API + `/${path}/${id}`).then(({ data }) => data),
  put: (path, id, payload) =>
    axios.put(API + `/${path}/${id}`, payload).then(({ data }) => data),
  post: (path, payload) =>
    axios.post(API + `/${path}`, payload).then(({ data }) => data),
};

export default countries;
