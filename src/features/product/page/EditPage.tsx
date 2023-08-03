
import { Button, Form, Input, Skeleton } from 'antd';
import { useGetProductByIdQuery, useUpdateProductMutation } from '@/api/product';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect } from 'react';


type FieldType = {
    name?: string,
    price?: number,
    original_price?: number,
    image?: string,
    description?: string
};

const EditPage = () => {
    const { id } = useParams<{ id: string }>()

    const { data: product, isLoading } = useGetProductByIdQuery(Number(id))
    const navigate = useNavigate()
    const [updateProduct] = useUpdateProductMutation()
    const onFinish = (values: any) => {
        if (values) {
        updateProduct({...values, id}).unwrap().then(() => {
                navigate('/admin/products')
            })
        }
    };

    useEffect(() => {
        form.setFieldsValue({
            name: product?.name,
            price: product?.price,
            original_price: product?.original_price,
            description: product?.description

        })
    }, [product])

    const [form] = Form.useForm()
    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };

    const validatePrice = (_: any, value: any) => {
        if (!/^\d+$/.test(value)) {
            return Promise.reject('Giá phải là số!');
        }
        if (value < 0) {
            return Promise.reject('Giá không được bé hơn 0!');
        }
        return Promise.resolve();
    };
    return (
        <div>
            <h2 className='text-2xl font-bold '>Thêm sản phẩm</h2>
            {isLoading ? (<Skeleton />) :
                (<Form
                form={form}
                    name="basic"
                    labelCol={{ span: 8 }}
                    wrapperCol={{ span: 16 }}
                    style={{ maxWidth: 600 }}
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                >
                    <Form.Item<FieldType>
                        label="ProductName"
                        name="name"
                        rules={[{ required: true, message: 'Trường Name là bắt buộc!' }]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item<FieldType>
                        label="Price"
                        name="price"
                        rules={[
                            { required: true, message: 'Bạn chưa nhập giá!' },
                            { validator: validatePrice },
                        ]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item<FieldType>
                        label="Original_price"
                        name="original_price"
                        rules={[
                            { required: true, message: 'Bạn chưa nhập giá gốc!' },
                            { validator: validatePrice },
                        ]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item<FieldType>
                        label="Description"
                        name="description"
                    >
                        <Input />
                    </Form.Item>


                    <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                        <Button className='bg-blue-500 text-white' htmlType="submit">
                            Cập nhật sản phẩm
                        </Button>
                    </Form.Item>
                </Form>)}
        </div>
    )
}

export default EditPage