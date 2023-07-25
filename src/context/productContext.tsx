// import axios from "axios";
import { createContext, useReducer } from "react";

// 1. Tạo context
export const ProductContext = createContext({} as any);

const initialState = {
    product: [],
    isLoading: false,
    error: ""
}

const productReducer = (state: any, action: any) => {
    // action: { type: "FETCH_PRODUCTS", payload: []}
    switch (action.type) {
        case "FETCH_PRODUCTS":
            return {
                ...state,
                products: action.payload,
            };

        case "ADD_PRODUCT":
            return {
                ...state,
                products: [...state.products, action.payload],
            };

        case "DELETE_PRODUCT":
            return {
                ...state,
                products: state.products.filter((item: any) => item.id !== action.payload.id)

            }

        case "EDIT_PRODUCT":
            return {
                ...state,
                products: state.products.map((item: any) => (item.id === action.payload.id ? action.payload : item))
            }

        default:
            return state;
    }
};

const ProductProvider = ({ children }: any) => {
    // const [products, setProducts] = useState([] as any);

    // const fetchProduct = async () => {
    //     try {
    //         const { data } = await axios.get(`http://localhost:3000/products`);
    //         setProducts(data);
    //     } catch (error) {}
    // };
    const [state, dispatch] = useReducer(productReducer, initialState);
    return (
        <ProductContext.Provider value={{ state, dispatch }}>
            {children}
        </ProductContext.Provider>
    );
};
export default ProductProvider;