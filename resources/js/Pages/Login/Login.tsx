import {
    JSXElementConstructor,
    ReactElement,
    ReactNode,
    ReactPortal,
} from "react";
import Layout from "../Layout/Layout";
import { Link } from "@inertiajs/react";
import LoginForm from "./LoginForm";
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
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="w-[10px] h-[10px]"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="m8.25 4.5 7.5 7.5-7.5 7.5"
                            />
                        </svg>
                    </p>
                    <p>Masuk</p>
                </div>
                <div className="w-full mt-2 flex pt-[16px]">
                    <div className="max-md:hidden max-md:w-0 w-full min-h-[781.688px] flex justify-center pt-[120px]">
                        <h1 className="max-w-[390.633px] text-4xl font-semibold leading-[3.375rem]">
                            Silahkan masuk ke akun IKEA Family Anda
                        </h1>
                    </div>
                    <div className="w-full min-h-[781.688px]">
                        <LoginForm />

                        <div className="max-md:w-full md:max-w-[342px] p-2 mt-1">
                            <button className="w-full h-[55px] rounded-full font-bold text-sm text-[#111] border border-[#e0e0e0] hover:border-[#929292] cursor-pointer">
                                <Link href="/">Daftar Sekarang?</Link>
                            </button>
                        </div>

                        <div className="max-md:w-full md:max-w-[342px] p-2 mt-[48px]">
                            <hr className="w-full" />
                        </div>

                        <div className="max-md:w-full md:max-w-[342px] p-2 mt-8">
                            <p className="text-center font-bold text-base text-[#111]">
                                Apakah Anda berbelanja untuk perusahaan Anda?
                            </p>
                            <button className="w-full mt-5 h-[55px] rounded-full font-bold text-sm text-[#111] border border-[#e0e0e0] hover:border-[#929292] cursor-pointer">
                                <Link href="/">Masuk ke akun IKEA Bisnis</Link>
                            </button>
                        </div>

                        <div className="max-md:w-full md:max-w-[342px] mt-5">
                            <div className="max-w-[326px] mx-auto box-border h-[68px] pt-[12px] pr-[20px] pb-[12px] pl-[20px] bg-[#F5F5F5] rounded-lg">
                                <p className="text-sm text-center text-[#484848] leading-[22px]">
                                    Butuh bantuan? Kunjungi{" "}
                                    <Link
                                        className="text-[#0058a3] underline underline-offset-1 hover:no-underline"
                                        href="/"
                                    >
                                        FAQ kami
                                    </Link>{" "}
                                    atau{" "}
                                    <Link
                                        className="text-[#0058a3] underline underline-offset-1 hover:no-underline"
                                        href="/"
                                    >
                                        hubungi kami
                                    </Link>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

Login.layout = (
    page:
        | string
        | number
        | boolean
        | ReactElement<any, string | JSXElementConstructor<any>>
        | Iterable<ReactNode>
        | ReactPortal
        | null
        | undefined
) => <Layout>{page}</Layout>;

export default Login;
