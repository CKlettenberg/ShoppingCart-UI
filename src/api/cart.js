import axios from "axios";

const api = "http://localhost:8090/api/cart";


export const fetchItems = () => axios.get(`${api}/items`)
export const fetchTotal = () => axios.get(`${api}/total`)
export const addItem = (item) => axios.post(`${api}/add`, item)
export const removeItem = (name) => axios.delete(`${api}/remove/${name}`)
