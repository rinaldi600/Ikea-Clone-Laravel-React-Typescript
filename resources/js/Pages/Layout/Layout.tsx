import React from "react";
import { Link } from "@inertiajs/inertia-react";

function Layout(props : { children : React.ReactNode }) {
    return (
        <>
            <div className="min-h-[37.6px] font-['ikea'] text-center bg-[#111111] text-white">
                <ul className="[&>*]:inline [&>*]:ml-3 w-full">
                    <li>
                        <Link className="text-xs font-bold" href="/in">
                            ID | EN
                        </Link>
                    </li>
                    <li>
                        <Link className="text-xs" href="/in">
                            Inspirasi
                        </Link>
                    </li>
                    <li>
                        <Link className="text-xs" href="/in">
                            <span>Program Perencanaan</span>
                        </Link>
                    </li>
                    <li>
                        <Link className="text-xs" href="/in">
                            <span>
                                Kebijakan Pengembalian 90 Hari
                            </span>
                        </Link>
                    </li>
                    <li>
                        <Link className="text-xs" href="/in">
                            <span>Lacak Pengiriman Online</span>
                        </Link>
                    </li>
                    <li>
                        <Link className="text-xs" href="/in">
                            <span>Informasi Toko</span>
                        </Link>
                    </li>
                    <li>
                        <Link className="text-xs" href="/in">
                            <span>Layanan Desain Interior</span>
                        </Link>
                    </li>
                    <li>
                        <Link className="text-xs" href="/in">
                            <span>Desain ruang gratis</span>
                        </Link>
                    </li>
                    <li>
                        <Link className="text-xs" href="/in">
                            <span>Ikea Family Rewards</span>
                        </Link>
                    </li>
                </ul>
            </div>
            <div>
                {props.children}
            </div>
        </>
    )
}

export default Layout;
