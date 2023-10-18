import React from "react";
import Layout from "../Layout/Layout";
import { Link } from "@inertiajs/react";
import Banner from "./Banner/Banner";

function Home() {
    return (
        <>
            <div className="min-h-screen w-full lg:pt-0 font-['ikea']">
                <div className="min-h-[41.2px] hidden font-bold text-sm text-[#111111] pl-32 xl:flex items-center gap-5">
                    <Link href="/">Produk</Link>
                    <Link href="/">Ruangan</Link>
                    <Link className="text-[#CC0008]" href="/">🏷️Promo</Link>
                    <Link href="/">Solusi kurangi polusi</Link>
                    <Link href="/">Rumahmu, perlengkapanmu, caramu!</Link>
                </div>
                <div className="xl:pl-32 pt-20">
                    <div className="min-h-[50px] rounded flex items-center gap-6 p-2 bg-[#EFEFEF] w-[100%] xl:w-[95%]">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-[24px] text-[#484848] fill-[#484848] h-[24px]">
                        <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z" clipRule="evenodd" />
                        </svg>
                        <Link className="text-sm hover:no-underline underline decoration-1 text-[#121416]" href="/">Selalu pastikan iklan promosi IKEA Indonesia yang valid, berasal dari website IKEA Indonesia. Klik untuk detailnya</Link>
                    </div>
                    <div className="pt-9">
                        <Banner/>
                    </div>
                </div>
            </div>
        </>
    )
}

Home.layout = (page : React.ReactNode) => <Layout children={page} />
export default Home;
