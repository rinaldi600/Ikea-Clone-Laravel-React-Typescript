import React from "react";
import Layout from "../Layout/Layout";
import { Link } from "@inertiajs/react";

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
                <div className="xl:pl-32">
                    <div className="min-h-[50px] w-[100%] xl:w-[95%] bg-blue-300">
                        <h1>WORK</h1>
                    </div>
                </div>
            </div>
        </>
    )
}

Home.layout = (page : React.ReactNode) => <Layout children={page} />
export default Home;
