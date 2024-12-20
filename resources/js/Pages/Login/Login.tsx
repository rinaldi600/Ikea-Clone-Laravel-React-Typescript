import Layout from "../Layout/Layout";

function Login() {
    return (
        <div className="min-h-screen w-full lg:pt-0 font-['ikea'] xl:pl-32">
            <div className="min-h-[50px] pt-4 w-[100%] xl:w-[95%]">
                <div className="flex items-center gap-1 text-[#111111] text-xs">
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
            </div>
        </div>
    );
}

Login.layout = (page) => (
    <Layout children={page} title="Login atau Daftar Baru" />
);

export default Login;
