import { Link } from "@inertiajs/inertia-react";

function HeaderMenuService() {
    return (
        <ul className="[&>*]:inline [&>*]:ml-3 w-full">
            <li>
                <Link className="text-xs font-bold hover:underline" href="/in">
                    ID | EN
                </Link>
            </li>
            <li>
                <Link className="text-xs hover:underline" href="/in">
                    Inspirasi
                </Link>
            </li>
            <li>
                <Link className="text-xs hover:underline" href="/in">
                    <span>Program Perencanaan</span>
                </Link>
            </li>
            <li>
                <Link className="text-xs hover:underline" href="/in">
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="inline w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                        </svg>
                        Kebijakan Pengembalian 90 Hari
                    </span>
                </Link>
            </li>
            <li>
                <Link className="text-xs hover:underline" href="/in">
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 inline h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                        </svg>
                        Lacak Pengiriman Online
                    </span>
                </Link>
            </li>
            <li>
                <Link className="text-xs hover:underline" href="/in">
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 inline h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                        </svg>
                        Informasi Toko
                    </span>
                </Link>
            </li>
            <li>
                <Link className="text-xs hover:underline" href="/in">
                    <span>Layanan Desain Interior</span>
                </Link>
            </li>
            <li>
                <Link className="text-xs hover:underline" href="/in">
                    <span>Desain ruang gratis</span>
                </Link>
            </li>
            <li>
                <Link className="text-xs hover:underline" href="/in">
                    <span>Ikea Family Rewards</span>
                </Link>
            </li>
    </ul>
    )
}

export default HeaderMenuService;
