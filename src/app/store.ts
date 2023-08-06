import { configureStore, ThunkAction, Action, combineReducers } from "@reduxjs/toolkit"

import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
import productApi, { productReducer } from "@/api/product";
import { cartReducer } from "@/features/cart/cartSlice";
import { authReducer } from "@/api/auth";

// Cấu hình persist ( lưu localStorage )
const persistConfig = {
    key: 'root',
    storage,
    blacklist: ['products', 'auth']
}
const rootReducer = combineReducers({
    products: productReducer,
    cart: cartReducer,
    users: authReducer,
    
})
const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }).concat(productApi.middleware),
})
export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>
export default persistStore(store)