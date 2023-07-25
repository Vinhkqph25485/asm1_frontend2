import { addProduct, deleteProduct, fetchProducts, updateProduct } from "@/actions/products"
import { Dispatch, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"

const ProductList = () => {
    const dispatch: Dispatch<any> = useDispatch()

    const { products, isLoading, error } = useSelector((state: any) => state.products)

    useEffect(() => {
        dispatch(fetchProducts())
    }, [dispatch])

    if (isLoading) return <div>Loading...</div>
    if (error) return <div>{error}</div>
    return (
        <div>
            {products.map((item: any) => {
                return <div key={item.id}>
                    <h2>{item.name}</h2>
                </div>
            })}

            <button onClick={() => dispatch(addProduct({ name: "Product C" }))}>Add</button>
            <button onClick={() => dispatch(updateProduct({ name: "Product C updated", id: 3 }))}>
                Update
            </button>
            <button onClick={() => dispatch(deleteProduct(3))}>Delete</button>
        </div>
    )
}

export default ProductList