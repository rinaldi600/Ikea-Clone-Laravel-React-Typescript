import React, {useEffect, useState} from "react";
import { Head, Link } from "@inertiajs/react";
import HeaderMenuService from "./HeaderMenuService/HeaderMenuService";
import HeaderMenuProduct from "./HeaderMenuProduct/HeaderMenuProduct";
import Footer from "../Home/Footer/Footer";

function Layout(props : Readonly<{ children : React.ReactNode }>) {

    const [valueFixedNavbar, setValueFixedNavbar] = useState<boolean>(false);

    useEffect(() => {
    })

    return (
        <>
            <Head title="IKEA Indonesia - Jual Perabot Rumah & Furnitur Kantor Online" />
            <div className="min-h-[37.6px] font-['ikea'] hidden lg:flex items-center text-center bg-[#111111] text-white">
                <HeaderMenuService/>
            </div>
            <div>
                <HeaderMenuProduct setValueFixedNavbar={setValueFixedNavbar}/>
            </div>
            <div className="min-h-[41.2px] font-['ikea'] hidden font-bold text-sm text-[#111111] pl-32 xl:flex items-center gap-5">
                <Link href="/">Produk</Link>
                <Link href="/">Ruangan</Link>
                <Link className="text-[#CC0008]" href="/">
                    🏷️Promo
                </Link>
                <Link href="/">Solusi kurangi polusi</Link>
                <Link href="/">Rumahmu, perlengkapanmu, caramu!</Link>
            </div>
            <div className={`${valueFixedNavbar ? 'fixed' : ''}`}>
                {props.children}
            </div>
            <div className="w-full min-h-[600px] bg-[#F5F5F5] mt-16">
                <div className="xl:w-[95%] pt-[50px] xl:pl-32 w-[100%]">
                    <Footer />
                </div>
            </div>
        </>
    )
}

export default Layout;
