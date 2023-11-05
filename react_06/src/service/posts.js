const API = `https://jsonplaceholder.typicode.com`;
import axios from 'axios'

const posts = {
    get: (path=`posts`, id) => axios(API + `/${path}` + (id ? `/${id}` : ``)).then(({data}) => data)
}

export default posts;