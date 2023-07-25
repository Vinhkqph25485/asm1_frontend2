import { produce } from "immer";

const initialState = {
    products: [],
    isLoading: false,
    error: ""
} as { products: any[], isLoading: boolean, error: string }

export const productReducer = (state = initialState, action: any) => {
    return produce(state, draftState => {
        switch (action.type) {
            case "products/fetching":
                draftState.isLoading = true
                break;
            case "products/fetchingSuccess":
                draftState.products = action.payload
                break;
            case "products/fetchingFailed":
                draftState.error = action.payload
                break;
            case "products/fetchingFinally":
                draftState.isLoading = false
                break;
            case "products/addProduct":
                draftState.products.push(action.payload)
                break;
            case "products/updateProduct":
                draftState.products = draftState.products.map((item: any) => item.id === action.payload.id ? action.payload : item)
                break;
            case "products/deleteProduct":
                draftState.products = draftState.products.filter(item => item.id !== action.payload)
                break;
            default:
                break;
        }
    })
}