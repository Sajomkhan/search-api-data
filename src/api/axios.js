import axios from 'axios'

export const getApi = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com'
})

export const getPosts = async () =>{
    const res = await getApi.get('/posts')
    return res.data
}