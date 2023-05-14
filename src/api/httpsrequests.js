import axios from "axios";
import { BASE_URL } from "./base_url";

//get all products
export const getAllProducts = async() => {
    let globalData;
   await axios.get(`${BASE_URL}/products`)
        .then(res => {
            globalData = res.data;
        })
    return globalData
}

//get product by id
export const getProductById = async(id) => {
    let globalData;
   await axios.get(`${BASE_URL}/products/${id}`)
        .then(res => {
            globalData = res.data;
        })
    return globalData
}
//post product
export const postProduct = (newProduct) => {
    let globalData;
    axios.post(`${BASE_URL}/products`, newProduct)
        .then(res => {
            globalData = res.data;
        })
    return globalData
}
//delete porudtc
export const deleteProduct = (id) => {
    let globalData;
    axios.delete(`${BASE_URL}/products/${id}`)
        .then(res => {
            globalData = res.data;
        })
    return globalData
}

//edit product
export const editProduct = (id, newProduct) => {
    let globalData;
    axios.put(`${BASE_URL}/products/${id}`, newProduct)
        .then(res => {
            globalData = res.data;
        })
    return globalData
}
