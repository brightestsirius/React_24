const API: string = `https://jsonplaceholder.typicode.com`;
import axios from 'axios';

const postsAPI = {
    get: (service:string=`posts`, id?: number) => axios.get(API + `/${service}` + (id ? `/${id}` : ``)).then(({ data }) => data)
}

export default postsAPI