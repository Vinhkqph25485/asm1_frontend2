import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { SigninForm, schemaSignIn } from "@/schema/auth";

import { useSigninMutation } from "@/api/auth";
const SignIn = () => {
    const notify = () => toast("Đăng nhập thành công");
    const navigate = useNavigate();
    const [Signin, { isLoading }] = useSigninMutation()
    const { register, handleSubmit, formState: { errors } } = useForm<SigninForm>({
        resolver: yupResolver(schemaSignIn)
    })
    const OnHandleSubmit = async (user: SigninForm) => {
        try {
            await Signin(user);
              localStorage.setItem('user', JSON.stringify(user));
            toast.success('Đăng nhập thành công!', {
                position: toast.POSITION.TOP_RIGHT,
            });
            setTimeout(() => {
                navigate("/")
            }, 3000)
        } catch (error) {
            alert("Thông tin tài khoản hoặc mật khẩu không chính xác !")
        }
    }
    useEffect(() => {
        window.scrollTo(0, 0)
    })
    return (
        <>
            <section className="flex flex-col mt-5 md:flex-row h-screen items-center">
                <div className="bg-indigo-600 hidden lg:block w-full md:w-1/2 xl:w-2/3 h-screen">
                    <img
                        src="https://chaybomoingay.com/wp-content/uploads/2019/02/thay-gi%C3%A0y-4-2.jpg"
                        alt=""
                        className="w-full h-full object-cover"
                    />
                </div>

                <div
                    className="bg-white w-full md:max-w-md lg:max-w-full  md:mx-0 md:w-1/2 xl:w-1/3 h-screen px-6 lg:px-16 xl:px-12
          flex items-center justify-center"
                >
                    <div className="w-full h-100">
                        <h1 className="text-xl md:text-2xl font-bold leading-tight mt-12">
                            Đăng nhập tài khoản
                        </h1>

                        <form className="mt-6" onSubmit={handleSubmit(OnHandleSubmit)} >
                            <div>
                                <label className="block text-gray-700">Email </label>
                                <input
                                    type="email"
                                    placeholder="Enter Email Address"
                                    className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
                                    {...register("email")}
                                />
                                <div className="text-red-500">
                                    {errors.email && errors.email.message}
                                </div>
                            </div>

                            <div className="mt-4">
                                <label className="block text-gray-700">Mật khẩu</label>
                                <input
                                    type="password"
                                    placeholder="Enter Password"
                                    className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500
                  focus:bg-white focus:outline-none"
                                    {...register("password")}
                                />
                                <div className="text-red-500">
                                    {errors.password && errors.password.message}
                                </div>
                            </div>

                            <div className="text-right mt-2">
                                <Link
                                    to="/forgotPassword"
                                    className="text-sm font-semibold text-gray-700 hover:text-blue-700 focus:text-blue-700"
                                >
                                    Quên mật khẩu?
                                </Link>
                            </div>

                            <button
                                type="submit"
                                className="w-full block bg-indigo-500 hover:bg-indigo-400 focus:bg-indigo-400 text-white font-semibold rounded-lg
                px-4 py-3 mt-6"
                            >
                                Đăng Nhập
                            </button>
                        </form>

                        <hr className="my-6 border-gray-300 w-full" />

                        <button
                            onClick={notify}

                            type="button"
                            className="w-full block bg-white hover:bg-gray-100 focus:bg-gray-100 text-gray-900 font-semibold rounded-lg px-4 py-3 border border-gray-300"
                        >
                            <ToastContainer />
                            <div className="flex items-center justify-center">
                                <span className="ml-4">Đăng nhập với Google</span>
                            </div>
                        </button>

                        <p className="mt-8">
                            Bạn chưa có tài khoản ?{" "}
                            <Link
                                to="/signup"
                                className="text-blue-500 hover:text-blue-700 font-semibold"
                            >
                                Tạo tài khoản
                            </Link>
                        </p>
                    </div>
                </div>
            </section>
        </>
    );
};

export default SignIn;
