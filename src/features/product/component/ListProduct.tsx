import { useGetProductsQuery } from "@/api/product";
import { IProduct } from "@/interfaces/product";
import { Link } from "react-router-dom";



const ListProduct = () => {
    const { data: products, error, isLoading } = useGetProductsQuery();
    console.log(products);
    
    return (
        <section className="mt-16">
            <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
                <header className="text-center">
                    <h2 className="text-xl font-bold text-gray-900 sm:text-3xl">
                        Sản phẩm đang HOT
                    </h2>

                    <p className="max-w-md mx-auto mt-4 text-gray-500">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque
                        praesentium cumque iure dicta incidunt est ipsam, officia dolor fugit
                        natus?
                    </p>
                </header>

                <ul className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    {products?.map((item: IProduct) => (
                        <li key={item.id}>                     
                            <Link to={`/products/${item.id}`} className="group relative block overflow-hidden">
                                <img
                                    src= {item.image}
                                    alt=""
                                    className="w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[250px]"
                                />
                                <div className="relative border border-gray-100 bg-white p-2">
                                    <h3
                                        className="text-base text-center text-black font-bold group-hover:underline-offset-4"
                                    >
                                        {item.name}
                                    </h3>

                                    <p className="mt-2 text-center">
                                        <span className="text-xs text-gray-500 line-through"> {item.original_price}đ </span>
                                        <span className="tracking-wider text-red-500">{item.price}đ</span>
                                    </p>
                                    <form className="mt-4">
                                        <button
                                            className="block w-full rounded bg-yellow-400 p-4 text-sm font-medium transition hover:scale-105"
                                        >
                                            Thêm vào giỏ hàng
                                        </button>
                                    </form>
                                </div>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    )
}

export default ListProduct