
import { useGetProductsQuery, useRemoveProductMutation } from '@/api/product';
import { FiTrash2, FiEdit, FiPlus } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const ListPage = () => {
    const { data: products, error, isLoading } = useGetProductsQuery();
    const [removeProduct] = useRemoveProductMutation();
    const handleDeleteProduct = (productId: number | string) => {
        const confirmed = window.confirm('Bạn có muốn xóa sản phẩm này?');
        if (confirmed) {
            removeProduct(productId);
        }
    };
    return (
        <div className="my-2">

            <h2>Danh sách sản phẩm</h2>

            <Link
                to={"add"}
                className="flex mx-4 my-2 py-2 px-2 rounded bg-blue-500 text-xs font-medium text-white hover:bg-blue-600 w-32"
            >
                <FiPlus className="h-4 w-4" /> Thêm sản phẩm
            </Link>
            <div className="my-2 mx-10">
                <table className="w-full divide-gray-200 bg-white text-sm ">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th className=" px-4 py-2 text-gray-900 text-center">
                                Tên sản phẩm
                            </th>
                            <th className=" px-4 py-2 text-gray-900 text-center">
                                Giá tiền
                            </th>
                            <th className=" px-4 py-2 text-gray-900 text-center">
                                Giá gốc
                            </th>
                            <th className=" px-4 py-2 text-gray-900 text-center">
                                Mô tả
                            </th>
                            <th className=" px-4 py-2 text-gray-900 text-center">
                                Hình ảnh
                            </th>
                            {/* <th className=" px-4 py-2 text-gray-900 text-center">
                                size
                            </th> */}
                            <th className=" px-4 py-2 text-gray-900 text-center"></th>
                        </tr>
                    </thead>

                    <tbody className="divide-gray-200">
                        {products?.map((item, index) => {
                            return <tr className="odd:bg-gray-50" key={item.id}>
                                <td>{index + 1}</td>
                                <td className=" px-4 py-2 text-gray-900 text-center">
                                    {item.name}
                                </td>
                                <td className=" px-4 py-2 text-gray-700 text-center"><img src={item.image} alt="" width={70} /></td>
                                <td className=" px-4 py-2 text-gray-700 text-center">{item.price}</td>
                                <td className=" px-4 py-2 text-gray-700 text-center">{item.original_price}</td>
                                <td className=" px-4 py-2 text-gray-700 text-center">{item.description}</td>
                                
                                {/* <td className=" px-4 py-2 text-gray-700 text-center">{item.sizes}</td> */}
                                <td className=" px-4 py-2 text-center flex items-center my-2">
                                    <Link
                                        to={`/admin/products/edit/${item.id}`}
                                        className=" flex rounded bg-yellow-500 px-4 py-2 text-xs font-medium text-white hover:bg-yellow-600"
                                    >
                                        <FiEdit className="h-4 w-4" />
                                    </Link>
                                    <button
                                        onClick={() => handleDeleteProduct(item.id!)}
                                        className=" flex rounded bg-red-600 px-4 py-2 text-xs font-medium text-white hover:bg-red-700 mx-2"
                                    >
                                        <FiTrash2 className="h-4 w-4" />
                                    </button>
                                </td>
                            </tr>

                        })}
                    </tbody>
                </table>
            </div>

        </div>


    )
}


export default ListPage