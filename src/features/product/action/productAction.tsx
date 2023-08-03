// // import { add, getAll, remove, update, } from '@/api/productApi';
// import { IProduct } from '@/interfaces/product';
// import { createAsyncThunk } from '@reduxjs/toolkit';

// export const getProducts = createAsyncThunk(
//     "product/getProducts",
//     async () => {
//         try {
//             const { data } = await getAll()
//             return data;
//         } catch (error: any) {
//             return error.message;
//         }
//     }
// );

// export const addProduct = createAsyncThunk(
//     'product/addProduct',
//     async (product: IProduct) => {
//         try {
//             const { data } = await add(product)
//             return data;
//         } catch (error: any) {
//             return error.message;
//         }
//     }
// )
// export const updateProduct = createAsyncThunk(
//     'product/updateProduct',
//     async (product: IProduct) => {
//         try {
//             const { data } = await update(product)
//             return data
//         } catch (error: any) {
//             return error.message
//         }
//     }
// )
// export const deleteProduct = createAsyncThunk(
//     'product/deleteProduct',
//     async (id: any) => {
//         await remove(id)
//         return id
//     }
// )