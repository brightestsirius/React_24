import axios from "axios";
const API = `https://jsonplaceholder.typicode.com/todos`;

const todos = {
  get: () => axios(API).then(({ data }) => data),
  delete: (id) => axios.delete(API + `/${id}`).then(({ data }) => data),
  patch: (id, payload) =>
    axios
      .patch(API + `/${id}`, payload, {
        headers: {
          "Content-type": "application/json",
        },
      })
      .then(({ data }) => data),
};

export default todos;
