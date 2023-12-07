import axios from 'axios';
const API: string = `https://jsonplaceholder.typicode.com/`;

const postsAPI = {
    get: (feature: string = `posts`, id?: number) => axios.get(API + `/${feature}` + (id ? `/${id}` : ``)).then(({ data }) => data)
}

export default postsAPI;