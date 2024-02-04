import { Link } from "@inertiajs/react";
import Star from "./Star";
import { useState } from "react";

interface Props {
    image: string;
}

function Product(props: Readonly<Props>) {
    
    const [cart, showCart] = useState(false);

    return (
        <div onMouseEnter={() => showCart(true)} onMouseLeave={() => showCart(false)} className="h-[466.175px] float-left w-[268px]">
            <div className="h-[286.95px]">
                <img
                    className="object-center h-full w-full mx-auto object-cover"
                    src={props.image}
                    alt="Product Image"
                />
            </div>
            <Link href={"/"}>
                {" "}
                <p className="text-[#484848] text-sm break-words mt-3">
                    Lemari 4 laci, putih, 67x102 cm
                </p>
            </Link>
            <p className="text-[#CC0008] text-xl font-bold mt-5">
                <sup>Rp.</sup>
                {Math.floor(Math.random() * 100000)}
            </p>
            <div className="mt-3">
                <p className="text-[#484848] font-bold text-xs break-words">
                    09 Jan 2024 - 21 Mar 2024
                </p>
                <p className="text-[#484848] text-xs break-words italic">
                    atau selama persediaan masih ada
                </p>
            </div>
            <div className="flex mt-3 justify-between">
                <div className="text-[#484848] text-xs break-words">
                    <p>Tersedia lebih banyak pilihan</p>
                    <div className="flex mt-1">
                        <Star />
                        <Star />
                        <Star />
                        <Star />
                        <Star />
                        <p className="ml-2">0 (0)</p>
                    </div>
                </div>
                <div className={`w-[40px] cursor-pointer h-[40px] rounded-full ${cart ? 'flex' : 'hidden'} justify-center items-center bg-[#004f93]`}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6 text-white"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                        />
                    </svg>
                </div>
            </div>
        </div>
    );
}

export default Product;
