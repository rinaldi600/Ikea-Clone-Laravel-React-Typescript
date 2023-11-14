import SidebarHeader from "../SidebarHeader/SidebarHeader";
import SearchProduct from "./SearchProduct/SearchProduct";
import { Link } from "@inertiajs/react";
import { useState, Dispatch, SetStateAction } from "react";

interface PropsInterface {
    setValueFixedNavbar : Dispatch<SetStateAction<boolean>>
}

function HeaderMenuProduct(props : PropsInterface) {

    const [valueToggle, setToggle] = useState<boolean>(false);
    const [valueToggleSearchProduct, setValueSearchProduct] = useState<boolean>(false);

    return (
        <>
            <div className="h-[97.1px] font-['ikea'] flex items-center ty:h-[73px]">
                <div className="flex justify-between lg:justify-normal mx-auto w-[90%] gap-2 min-h-fit">
                    <div className="flex items-center gap-5">
                        <div onClick={() => {setToggle(true); props.setValueFixedNavbar(true)}} className="w-[40px] hidden lg:flex items-center justify-center cursor-pointer h-[40px] hover:bg-[#F5F5F5] rounded-full">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="#111111" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-[24px] text-[#111111] h-[24px]">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                            </svg>
                        </div>
                        <div className="w-[90px] flex items-center cursor-pointer h-[65px]">
                            <img className="w-full" src="https://d2xjmi1k71iy2m.cloudfront.net/dairyfarm/id/logos/IKEA_logo.svg" alt="Ikea Logo" />
                        </div>
                    </div>
                    <div className="w-full hidden lg:flex items-center relative">
                        <SearchProduct setValueSearchProduct={setValueSearchProduct} />
                    </div>
                    <div className="flex flex-wrap justify-center lg:justify-normal lg:flex-nowrap items-center lg:gap-2">
                        <div  onClick={() => setValueSearchProduct(true)} className="w-[40px] flex lg:hidden items-center justify-center cursor-pointer h-[40px] hover:bg-[#F5F5F5] rounded-full">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 text-center mx-auto font-bold">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                            </svg>
                        </div>
                        <Link href="/in/client">
                            <div className="w-[40px] flex items-center justify-center cursor-pointer h-[40px] hover:bg-[#F5F5F5] rounded-full">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                                </svg>
                            </div>
                        </Link>
                        <Link href="/in/guest/shoppinglist">
                            <div className="w-[40px] flex items-center justify-center cursor-pointer h-[40px] hover:bg-[#F5F5F5] rounded-full">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                                </svg>
                            </div>
                        </Link>
                        <Link href="/in/shoppingcart">
                            <div className="w-[40px] flex items-center justify-center cursor-pointer h-[40px] hover:bg-[#F5F5F5] rounded-full">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                                </svg>
                            </div>
                        </Link>
                        <div onClick={() => setToggle(true)} className="w-[40px] flex lg:hidden items-center justify-center cursor-pointer h-[40px] hover:bg-[#F5F5F5] rounded-full">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="#111111" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-[24px] text-[#111111] h-[24px]">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`w-full ${valueToggleSearchProduct ? 'lg:hidden' : 'hidden'} flex items-center relative`}>
                <SearchProduct setValueSearchProduct={setValueSearchProduct}/>
            </div>
            {
                valueToggle && <SidebarHeader setValueFixedNavbar={props.setValueFixedNavbar} valueToggle={setToggle}/>
            }
        </>
    )

}

export default HeaderMenuProduct;
