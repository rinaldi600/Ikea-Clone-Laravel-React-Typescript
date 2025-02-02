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
                    <div className="bg-green-500 w-full min-h-[781.688px]">
                        <div className="max-w-[342px] bg-red-200 p-2">
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
                                className="w-full rounded border-1 border-[#929292]"
                                type="text"
                                autoComplete="off"
                            />
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
