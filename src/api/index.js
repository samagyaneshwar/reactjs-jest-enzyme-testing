import axios from "axios";

export const url = (path) => {
    return `https://jsonplaceholder.typicode.com/${path}`
}

export const getPosts = () => {
    return axios.get(url("posts"));
}

export const deletePostById = (id) => {
    return axios.delete(url(`posts/${id}`));
}