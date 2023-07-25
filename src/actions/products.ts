import { pause } from "@/utils/pause";
import axios from "axios";

export const fetchProducts = () => async (dispatch: any) => {
    dispatch({ type: "products/fetching" })
    try {
        pause(1000)
        const { data } = await axios.get(`http://localhost:3000/products`)
        dispatch({ type: "products/fetchingSuccess", payload: data })
    } catch (error) {
        dispatch({ type: "products/fetchingFailed", payload: error })
    } finally {
        dispatch({ type: "products/fetchingFinally" })
    }
}

export const addProduct = (product: any) => async (dispatch: any) => {
    const { data } = await axios.post(`http://localhost:3000/products`, product)
    dispatch({ type: "products/addProduct", payload: data })
}

export const updateProduct = (product: any) => async (dispatch: any) => {
    const { data } = await axios.put(`http://localhost:3000/products/${product.id}`, product)
    dispatch({ type: "products/updateProduct", payload: data })
}

export const deleteProduct = (id: any) => async (dispatch: any) => {
    await axios.delete(`http://localhost:3000/products/${id}`)
    dispatch({ type: "products/deleteProduct", payload: id })
}