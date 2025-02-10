import { useRef } from "react";
import Layout from "../Layout/Layout";
function Login() {
    return (
        <div className="min-h-screen w-full lg:pt-0 font-['ikea'] xl:pl-32">
            <div className="min-h-fit pt-4 w-[90%] m-auto border-t xl:m-0 border-[#DEE2E6] xl:w-[95%]">
                <div className="flex items-center gap-1 text-[#111111] text-xs pb-[16px]">
                    <p>Client</p>
                    <p>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            className="w-[10px] h-[10px]"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="m8.25 4.5 7.5 7.5-7.5 7.5"
                            />
                        </svg>
                    </p>
                    <p>Masuk</p>
                </div>
                <div className="w-full mt-2 flex pt-[16px]">
                    <div className="w-full min-h-[781.688px] flex justify-center pt-[120px]">
                        <h1 className="max-w-[390.633px] text-4xl font-semibold leading-[3.375rem]">
                            Silahkan masuk ke akun IKEA Family Anda
                        </h1>
                    </div>
                    <div className=" w-full min-h-[781.688px]">
                        <div className="max-w-[342px] p-2">
                            <div className="relative w-fit">
                                <label
                                    htmlFor="email"
                                    className="text-[#484848] text-sm leading-5"
                                >
                                    Alamat email atau nomor handphone yang
                                    terverifikasi
                                </label>
                                <span className="text-[#dc3545] absolute bottom-0 right-0">
                                    *
                                </span>
                            </div>
                            <input
                                id="email"
                                className="w-full rounded border-1 border-[#929292] text-sm placeholder:text-[#B2B9C1]"
                                type="text"
                                autoComplete="off"
                                placeholder="contoh@email.com atau 821012345678"
                            />
                            <small className="text-xs text-[#484848]">
                                Masukkan email atau no.hp tanpa awalan 0
                            </small>
                        </div>
                        <div className="max-w-[342px] p-2">
                            <div className="relative w-full">
                                <label
                                    htmlFor="password"
                                    className="text-[#484848] text-sm leading-5"
                                >
                                    Kata Sandi
                                </label>
                                <span className="text-[#dc3545] absolute bottom-0 right-0">
                                    *
                                </span>
                            </div>
                            <div className="relative bg-white rounded border border-[#929292] overflow-hidden h-[37.6px]">
                                <input
                                    id="password"
                                    className="w-[90%] text-sm border-none placeholder:text-[#B2B9C1] order-transparent focus:border-transparent focus:ring-0"
                                    type="text"
                                    autoComplete="off"
                                    placeholder="Kata sandi"
                                />
                                <div className="absolute inset-y-0 right-0 flex justify-center items-center">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth="1.5"
                                        stroke="currentColor"
                                        className="w-[45px] h-[30px] cursor-pointer"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
                                        />
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                                        />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

Login.layout = (page) => (
    <Layout children={page} title="Login atau Daftar Baru" />
);

export default Login;
