"use client";

import SpinnerLoading from "@/app/components/SpinnerLoading";
import { useChangeTitle } from "@/app/utils/changeTitle";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

export default function Register() {
  // ubah title
  useChangeTitle();

  const router = useRouter();
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setIsLoading(true);
      await axios.post("/api/register", data);
      setIsLoading(false);
      toast.success("Berhasil Membuat Akun");
      setTimeout(() => {
        router.push(`/verification?email=${data.email}`);
      }, 3000);
    } catch (error) {
      setIsLoading(false);
      toast.error(error.response.data.message);
    }
  };
  return (
    <>
      <div>
        <Toaster position="top-center" reverseOrder={false} />
      </div>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-5 lg:px-8">
        <div className="mt-2 sm:mx-auto sm:w-full sm:max-w-sm">
          <div className="bg-gray-100 px-4 py-8 rounded-xl shadow sm:rounded-lg sm:px-10">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
              <h2 className="my-5 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Buat Akun</h2>
            </div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                  Username
                </label>
                <div className="mt-2">
                  <input
                    id="username"
                    onChange={(e) => setData({ ...data, name: e.target.value })}
                    name="username"
                    type="text"
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                  Email address
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    onChange={(e) => setData({ ...data, email: e.target.value })}
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                    Password
                  </label>
                  <div className="cursor-pointer font-semibold text-indigo-600 hover:text-indigo-500" onClick={toggleShowPassword}>
                    {showPassword ? (
                      <div className="text-xl inline-flex">
                        <AiOutlineEyeInvisible />
                        <span className="ml-1 text-sm">Sembunyikan</span>
                      </div>
                    ) : (
                      <div className="text-xl inline-flex">
                        <AiOutlineEye /> <span className="ml-1 text-sm">Lihat</span>
                      </div>
                    )}
                  </div>
                </div>
                <div className="mt-2">
                  <input
                    id="password"
                    value={data.password}
                    onChange={(e) => setData({ ...data, password: e.target.value })}
                    name="password"
                    type={showPassword ? "text" : "password"}
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                  <div className="text-sm mt-1" onClick={toggleShowPassword}></div>
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between">
                  <label htmlFor="confirm-password" className="block text-sm font-medium leading-6 text-gray-900">
                    Confirm Password
                  </label>
                  <div className="cursor-pointer font-semibold text-indigo-600 hover:text-indigo-500" onClick={toggleShowPassword}>
                    {showPassword ? (
                      <div className="text-xl inline-flex">
                        <AiOutlineEyeInvisible />
                        <span className="ml-1 text-sm">Sembunyikan</span>
                      </div>
                    ) : (
                      <div className="text-xl inline-flex">
                        <AiOutlineEye /> <span className="ml-1 text-sm">Lihat</span>
                      </div>
                    )}
                  </div>
                </div>
                <div className="mt-2">
                  <input
                    id="confirm-password"
                    onChange={(e) => setData({ ...data, confirmPassword: e.target.value })}
                    name="confirm-password"
                    type={showPassword ? "text" : "password"}
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                  <div className="text-sm mt-1" onClick={toggleShowPassword}></div>
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  {isLoading ? <SpinnerLoading /> : "Register"}
                </button>
              </div>
            </form>
            <p className="mt-5 text-center text-sm text-gray-500">
              Sudah punya akun?{" "}
              <Link href="/login" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                Login.
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
