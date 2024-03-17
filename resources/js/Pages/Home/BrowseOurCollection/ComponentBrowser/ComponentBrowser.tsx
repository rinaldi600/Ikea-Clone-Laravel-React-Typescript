import { Link } from "@inertiajs/react";

interface Props {
    image: string;
    text: string;
    title: string;
    background : string;
}

function ComponentBrowser(props: Props) {
    return (
        <div className="w-[408.612px] h-full bg-slate-300 overflow-hidden relative">
            <div className="h-[230.072px]">
                <img
                    className="w-full h-full object-center object-cover"
                    src={props.image}
                    alt="Banner One"
                />
            </div>
            <div className={`${props.background} h-full`}>
                <div className="p-4">
                    <h1 className="font-bold text-white text-2xl text-center break-words">
                        {props.title}
                    </h1>
                    <p className="pt-5 text-white text-sm break-words">
                        {props.text}
                    </p>
                </div>
                <div className="p-4 absolute bottom-7 left-0">
                    <button className="w-[55px] h-[55px] relative bg-white rounded-full overflow-hidden">
                        <Link
                            href="/"
                            className="absolute inset-0 flex items-center justify-center"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-6 h-6"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                                />
                            </svg>
                        </Link>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ComponentBrowser;
