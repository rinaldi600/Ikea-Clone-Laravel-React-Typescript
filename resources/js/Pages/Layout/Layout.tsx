import React, {useEffect, useState} from "react";
import { Head } from "@inertiajs/react";
import HeaderMenuService from "./HeaderMenuService/HeaderMenuService";
import HeaderMenuProduct from "./HeaderMenuProduct/HeaderMenuProduct";

function Layout(props : { children : React.ReactNode }) {

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
            <div className={`${valueFixedNavbar ? 'fixed' : ''}`}>
                {props.children}
            </div>
        </>
    )
}

export default Layout;
