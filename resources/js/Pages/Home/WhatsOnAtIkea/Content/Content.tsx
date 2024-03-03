import { Link } from "@inertiajs/inertia-react";

interface Props {
    image: string;
}

function Content(props: Readonly<Props>) {
    return (
        <div className="ty:w-full flex w-[220.225px] h-[227.4px] relative">
            {" "}
            <div className="w-full">
                <img
                    className="object-cover w-full h-full"
                    src={props.image}
                    alt="Image Banner One"
                />
            </div>
            <div className="bg-black/40 absolute grid items-end inset-0">
                <Link
                    href="/"
                    className="flex p-4 h-fit items-center"
                >
                    <h1 className="text-sm font-bold text-white">
                        Sedia payung sebelum hujan
                    </h1>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6 fill-white text-white"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                        />
                    </svg>
                </Link>
            </div>
        </div>
    );
}

export default Content;
