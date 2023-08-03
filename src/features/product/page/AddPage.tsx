
import { Button, Form, Input } from 'antd';
import { useAddProductMutation } from '@/api/product';
import {AiOutlineLoading3Quarters} from 'react-icons/ai'
import { useNavigate } from 'react-router-dom';


type FieldType = {
    name?: string,
    price?: number,
    original_price?: number,
    image?: string,
    description?: string
};

const AddPage = () => {

    const [addProduct, {isLoading}] = useAddProductMutation()

    const navigate = useNavigate()
    const onFinish = (values: any) => {
        if(values) {
            addProduct(values).unwrap().then(() => {
                navigate('/admin/products')
            })
        }
      };
      
      const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
      };

    const validatePrice = (_ : any, value:any) => {
        if (!/^\d+$/ .test(value)) {
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
      <Form
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
      <Input/>
    </Form.Item>

    <Form.Item<FieldType>
      label="Original_price"
      name="original_price"
      rules={[
        { required: true, message: 'Bạn chưa nhập giá gốc!' },
        { validator: validatePrice },
      ]}
    >
      <Input/>
    </Form.Item>

    <Form.Item<FieldType>
      label="Description"
      name="description"
    >
      <Input/>
    </Form.Item>
   

    <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
      <Button className='bg-blue-500 text-white' htmlType="submit">
       {isLoading ? (<AiOutlineLoading3Quarters className="ami"/>) : 
       ("Thêm sản phẩm")
       }
      </Button>
    </Form.Item>
  </Form>
  </div>
  )
}

export default AddPage