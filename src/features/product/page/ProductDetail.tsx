import { useParams } from "react-router-dom"
import RelatedProduct from "../component/RelatedProduct"
import { Controller, useForm } from 'react-hook-form';
import { useGetProductByIdQuery } from "@/api/product";
import { useDispatch } from "react-redux";
import { add } from "@/features/cart/cartSlice";
import { useNavigate } from "react-router-dom";

type FormData = {
    size: "37" | "38" | "39" | "40" | "41" | "42";
    quantity: "",
    name: "",
    price: 0
};

const ProductDetail = () => {
    const { id } = useParams<{ id: string }>();
    const { data: products, error, isLoading } = useGetProductByIdQuery(Number(id));
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const { register, handleSubmit, control } = useForm<FormData>()
    const onSubmit = (data: any) => {
        const newData = {
            ...products,
            quantity: + data.quantity,
            size: data.size
        };
        console.log(newData);
        
       dispatch(add(newData))
        navigate('/carts')
    };

    

    return (
        <section>
            <div className="relative mx-auto max-w-screen-xl px-4 py-8">
                <div className="grid grid-cols-1 items-start gap-8 md:grid-cols-2">
                    <div className="grid grid-cols-2 gap-4 md:grid-cols-1">
                        <img
                            alt="Les Paul"
                            src={products?.image}
                            className="aspect-square w-full rounded-xl object-cover"
                        />
                        <div className="grid grid-cols-2 gap-4 lg:mt-4">
                            <img
                                alt="Les Paul"
                                src="https://giayxshop.vn/wp-content/uploads/2023/03/z4159595927783_c64c2be5885dd21738773ad31d1539ba-600x600.jpg"
                                className="aspect-square w-full rounded-xl object-cover"
                            />
                            <img
                                alt="Les Paul"
                                src="https://giayxshop.vn/wp-content/uploads/2023/03/z4159595927783_c64c2be5885dd21738773ad31d1539ba-600x600.jpg"
                                className="aspect-square w-full rounded-xl object-cover"
                            />

                            <img
                                alt="Les Paul"
                                src="https://giayxshop.vn/wp-content/uploads/2023/03/z4159595927783_c64c2be5885dd21738773ad31d1539ba-600x600.jpg"
                                className="aspect-square w-full rounded-xl object-cover"
                            />

                            <img
                                alt="Les Paul"
                                src="https://giayxshop.vn/wp-content/uploads/2023/03/z4159595927783_c64c2be5885dd21738773ad31d1539ba-600x600.jpg"
                                className="aspect-square w-full rounded-xl object-cover"
                            />
                        </div>
                    </div>

                    <div className="sticky top-0">
                        <div className="mt-8 flex justify-between">
                            <div className="max-w-[35ch] space-y-2">
                                <h1 className="text-xl font-bold sm:text-2xl">
                                    {products?.name}
                                </h1>
                            </div>
                        </div>
                        <div className="mt-4">
                            <p className="text-base text-gray-500 line-through"> {products?.original_price}đ </p>
                            <p className="tracking-wider text-red-500 font-bold text-lg">{products?.price}đ</p>
                        </div>
                        <div className="mt-4">
                            <div className="prose max-w-none">
                                <p>
                                    {products?.description}
                                </p>
                            </div>
                        </div>

                        <form className="mt-8" onSubmit={handleSubmit(onSubmit)}>
                            <fieldset className="mt-4 d-flex items-center">
                                <legend className="mb-1 text-sm font-medium">Size:</legend>

                                <div className="flex flex-wrap gap-1">
                                <label className="cursor-pointer">
                                            <Controller
                                                name="size"
                                                control={control}
                                                defaultValue="37"
                                                render={({ field }) => (
                                                    <input type="radio" {...field} value="37"  className="peer sr-only" />
                                                )}
                                            />
                                            <span
                                            className="group inline-flex h-8 w-8 items-center justify-center rounded-full border text-xs font-medium peer-checked:bg-black peer-checked:text-white"
                                        >
                                            37
                                        </span>
                                    </label>

                                    <label className="cursor-pointer">
                                            <Controller
                                                name="size"
                                                control={control}
                                                defaultValue="38"
                                                render={({ field }) => (
                                                    <input type="radio" {...field} value="38"  className="peer sr-only" />
                                                )}
                                            />
                                            <span
                                            className="group inline-flex h-8 w-8 items-center justify-center rounded-full border text-xs font-medium peer-checked:bg-black peer-checked:text-white"
                                        >
                                            38
                                        </span>
                                    </label>

                                    <label className="cursor-pointer">
                                            <Controller
                                                name="size"
                                                control={control}
                                                defaultValue="39"
                                                render={({ field }) => (
                                                    <input type="radio" {...field} value="39"  className="peer sr-only" />
                                                )}
                                            />
                                            <span
                                            className="group inline-flex h-8 w-8 items-center justify-center rounded-full border text-xs font-medium peer-checked:bg-black peer-checked:text-white"
                                        >
                                            39
                                        </span>
                                    </label>

                                    <label className="cursor-pointer">
                                            <Controller
                                                name="size"
                                                control={control}
                                                defaultValue="40"
                                                render={({ field }) => (
                                                    <input type="radio" {...field} value="40"  className="peer sr-only" />
                                                )}
                                            />
                                            <span
                                            className="group inline-flex h-8 w-8 items-center justify-center rounded-full border text-xs font-medium peer-checked:bg-black peer-checked:text-white"
                                        >
                                            40
                                        </span>
                                    </label>

                                    <label className="cursor-pointer">
                                            <Controller
                                                name="size"
                                                control={control}
                                                defaultValue="41"
                                                render={({ field }) => (
                                                    <input type="radio" {...field} value="41"  className="peer sr-only" />
                                                )}
                                            />
                                            <span
                                            className="group inline-flex h-8 w-8 items-center justify-center rounded-full border text-xs font-medium peer-checked:bg-black peer-checked:text-white"
                                        >
                                            41
                                        </span>
                                    </label>
                                    <label className="cursor-pointer">
                                            <Controller
                                                name="size"
                                                control={control}
                                                defaultValue="42"
                                                render={({ field }) => (
                                                    <input type="radio" {...field} value="42"  className="peer sr-only" />
                                                )}
                                            />
                                            <span
                                            className="group inline-flex h-8 w-8 items-center justify-center rounded-full border text-xs font-medium peer-checked:bg-black peer-checked:text-white"
                                        >
                                            42
                                        </span>
                                    </label>

                                </div>
                            </fieldset>

                            <div>
                                <label>Số lượng:</label>
                                <input type="number" className="border border-gray-500 p-2 " min={0} {...register("quantity")} />
                            </div>


                            <div className="mt-8 flex gap-4">
                                <button
                                    type="submit"
                                    className="block rounded bg-green-600 px-5 py-3 text-xs font-medium text-white hover:bg-green-500"
                                >
                                    Add to Cart
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <hr />
            <RelatedProduct />
        </section>

    )
}

export default ProductDetail