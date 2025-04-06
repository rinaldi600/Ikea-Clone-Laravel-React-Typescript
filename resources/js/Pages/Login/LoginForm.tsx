import { Link } from "@inertiajs/react";
import classNames from "classnames";
import { useState, useRef } from "react";

function LoginForm() {
    const [vPasswordBorderActive, setVPasswordBorderActive] =
        useState<boolean>(false);

    const inputPassword = useRef<HTMLInputElement>(null);

    let divPasswordClass = classNames({
        relative: true,
        "bg-white": true,
        "rounded-sm": true,
        "border border-[#929292]": !vPasswordBorderActive,
        "border-2 border-[#155DFC]": vPasswordBorderActive,
        "overflow-hidden": true,
        "h-[37.6px]": true,
    });

    const showPassword = () => {
        if (inputPassword?.current) {
            inputPassword.current.type = "text";
        }
    };

    const hidePassword = () => {
        if (inputPassword?.current) {
            inputPassword.current.type = "password";
        }
    };

    return (
        <>
            <div className="max-md:w-full md:max-w-[342px] p-2">
                <div className="relative max-md:w-full md:w-fit mb-1">
                    <label
                        htmlFor="email"
                        className="text-[#484848] text-sm leading-5"
                    >
                        Alamat email atau nomor handphone yang terverifikasi
                    </label>
                    <span className="text-[#dc3545] absolute bottom-0 right-0">
                        *
                    </span>
                </div>
                <input
                    id="email"
                    className="w-full rounded-sm border-1 border-[#929292] text-sm placeholder:text-[#B2B9C1]"
                    type="text"
                    autoComplete="off"
                    placeholder="contoh@email.com atau 821012345678"
                />
                <small className="text-xs text-[#484848]">
                    Masukkan email atau no.hp tanpa awalan 0
                </small>
            </div>
            <div className="max-md:w-full md:max-w-[342px] p-2">
                <div className="relative w-full mb-1">
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
                <div className={divPasswordClass}>
                    <input
                        id="password"
                        onClick={() => setVPasswordBorderActive(true)}
                        onBlur={() => setVPasswordBorderActive(false)}
                        className="w-[90%] text-sm border-none placeholder:text-[#B2B9C1] border-transparent focus:border-transparent focus:ring-0 h-[37.6px]"
                        type="password"
                        ref={inputPassword}
                        placeholder="Kata sandi"
                    />
                    <div className="absolute inset-y-0 right-0 flex justify-center items-center">
                        <button
                            type="button"
                            onMouseUp={hidePassword}
                            onMouseDown={showPassword}
                        >
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
                        </button>
                    </div>
                </div>
                <Link href="/" className="text-xs text-[#484848] underline">
                    Lupa kata sandi
                </Link>
            </div>
            <div className="max-w-[342px] p-2 flex items-center gap-2 mt-5">
                <div className="relative w-[20px] h-[20px] overflow-hidden flex justify-center items-center bg-[#D7DCDE] rounded">
                    <input
                        id="stay_logged"
                        type="checkbox"
                        className="absolute cursor-pointer w-[20px] h-[20px] bg-[#D7DCDE] border-none border-transparent checked:bg-[#003399] focus:border-transparent focus:ring-0"
                    />
                </div>

                <label htmlFor="stay_logged" className="text-sm text-[#484848]">
                    Stay Login
                </label>
            </div>
            <div className="max-md:w-full md:max-w-[342px] p-2 mt-1">
                <button className="w-full h-[55px] hover:bg-[#004F93] rounded-full bg-[#0058a3] font-bold text-sm text-white cursor-pointer">
                    Masuk
                </button>
            </div>
        </>
    );
}

export default LoginForm;
