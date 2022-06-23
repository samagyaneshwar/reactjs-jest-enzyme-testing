import axios from "axios";

const url = (path) => {
    return `https://jsonplaceholder.typicode.com/${path}`
}

export const getPosts = () => {
    return axios.get(url("posts"));
}

export const deletePost = (id) => {
    return axios.delete(url(`posts/${id}`));
}