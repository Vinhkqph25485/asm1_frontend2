import { useForm } from "react-hook-form";
import { useEffect } from "react";

import { yupResolver } from '@hookform/resolvers/yup';
import { Link, useNavigate } from "react-router-dom";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { SignupForm, schemaSignUp } from "@/schema/auth";

import { useSignupMutation } from "@/api/auth";
const SignUp = () => {
    //   toast("Đăng kí thành công");
    const navigate = useNavigate();
    const [Signup, { isLoading }] = useSignupMutation()
    const { register, handleSubmit, formState: { errors } } = useForm<SignupForm>({
        resolver: yupResolver(schemaSignUp)
    })
    const onHandleSubmit = async (user: SignupForm) => {

        try {
            const newUser = {
                name: user.name,
                email: user.email,
                password: user.password,
            }
            await Signup(newUser)
            toast.success('Đăng kí thành công!', {
                position: toast.POSITION.TOP_RIGHT,
            });
            setTimeout(() => {
                navigate("/signin")
            }, 3000);
        } catch (error) {
            alert("có lỗi xảy ra vui lòng thử lại")
        }
    }
    useEffect(() => {
        window.scrollTo(0, 0)
    })
    return (
        <>
            <section className="flex flex-col md:flex-row h-screen mb-5 items-center mt-5">
                <div className="bg-indigo-600 hidden lg:block w-full md:w-1/2 xl:w-2/3 h-screen">
                    <img
                        src="https://chaybomoingay.com/wp-content/uploads/2019/02/thay-gi%C3%A0y-4-2.jpg"
                        alt=""
                        className="w-full h-full object-cover"
                    />
                </div>

                <div className="bg-white w-full md:max-w-md lg:max-w-full md:mx-0 md:w-1/2 xl:w-1/3 h-screen px-6 lg:px-16 xl:px-12 flex items-center justify-center">
                    <div className="w-full h-100">
                        <h1 className="text-xl md:text-2xl font-bold leading-tight mx-auto	mt-12">
                            Đăng kí tài khoản
                        </h1>

                        <form className="mt-6" onSubmit={handleSubmit(onHandleSubmit)}>
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
                                <label className="block text-gray-700">Tên đăng nhập</label>
                                <input
                                    type="text"
                                    placeholder="Enter Username"
                                    className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500
          focus:bg-white focus:outline-none"
                                    {...register("name")}
                                />
                                <div className="text-red-500">
                                    {errors.name && errors.name.message}
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

                            <div className="mt-4">
                                <label className="block text-gray-700">Nhập lại mật khẩu</label>
                                <input
                                    type="password"
                                    placeholder="Confirm Password"
                                    className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500
          focus:bg-white focus:outline-none"
                                    {...register("confilmPassWord")}
                                />
                                <div className="text-red-500">
                                    {errors.confilmPassWord && errors.confilmPassWord.message}
                                </div>
                            </div>

                            <button
                                type="submit"
                                className="w-full block bg-indigo-500 hover:bg-indigo-400 focus:bg-indigo-400 text-white font-semibold rounded-lg
        px-4 py-3 mt-6"
                            >
                                <ToastContainer />
                                Đăng kí
                            </button>
                        </form>

                        <hr className="my-6 border-gray-300 w-full" />

                        <button
                            type="button"
                            className="w-full block bg-white hover:bg-gray-100 focus:bg-gray-100 text-gray-900 font-semibold rounded-lg px-4 py-3 border border-gray-300"
                        >
                            <div className="flex items-center justify-center">
                                <span className="ml-4">Đăng kí với Google</span>
                            </div>
                        </button>

                        <p className="mt-8">
                            Bạn đã có tài khoản?{" "}
                            <Link
                                to="/signin"
                                className="text-blue-500 hover:text-blue-700 font-semibold"
                            >
                                Đăng nhập
                            </Link>
                        </p>
                    </div>
                </div>
            </section>
        </>

    )
}

export default SignUp