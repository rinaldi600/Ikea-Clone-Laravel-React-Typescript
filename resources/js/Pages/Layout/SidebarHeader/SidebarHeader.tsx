import { Link } from "@inertiajs/react";

function SidebarHeader() {
    return (
        <div className="w-full inline-flex h-full z-[9999] fixed overflow-hidden bg-[#DCDCDC]/50 top-0 right-0 bottom-0 left-0">
            <div className="w-full font-['ikea'] lg:w-[30%] bg-white min-h-screen overflow-y-scroll overflow-x-hidden">
                <div className="h-[85px] w-ful flex justify-start gap-12 pl-7 items-center">
                    <div className="w-[40px] flex items-center justify-center cursor-pointer h-[40px] hover:bg-[#F5F5F5] rounded-full">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-[24px] h-[24px] text-[#111111]">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </div>
                    <div className="w-[90px] flex items-center cursor-pointer h-[65px]">
                        <img className="w-full" src="https://d2xjmi1k71iy2m.cloudfront.net/dairyfarm/id/logos/IKEA_logo.svg" alt="Ikea Logo" />
                    </div>
                </div>
                <div className="pl-28">
                    <ul className="text-[#111111] mt-9">
                        <li>
                            <h1 className="text-3xl font-bold mb-11">Produk</h1>
                        </li>
                        <li>
                            <h1 className="text-3xl font-bold">Ruangan</h1>
                        </li>
                    </ul>

                    <ul className="mt-9 text-[#111111] font-bold text-sm">
                        <li>
                            <p>Promo</p>
                        </li>
                        <li className="mt-3">
                            <p>Solusi kurangi polusi</p>
                        </li>
                        <li className="mt-3">
                            <p>Rumahmu, perlengkapanmu, caramu!</p>
                        </li>
                    </ul>

                    <ul className="text-[#111111] text-sm mt-9">
                        <ul>Inspirasi</ul>
                        <ul className="mt-5">Program perencanaan</ul>
                        <ul className="mt-5">Kebijakan Pengembalian 90 Hari</ul>
                        <ul className="mt-5">Lacak Pengiriman Online</ul>
                        <ul className="mt-5">Informasi Toko</ul>
                        <ul className="mt-5">Layanan Desain Interior</ul>
                        <ul className="mt-5">Desain ruang gratis</ul>
                        <ul className="mt-5">IKEA Family Rewards</ul>
                    </ul>

                    <ul className="mt-16 mb-7">
                        <li>
                            <Link className="text-[#111111] hover:underline hover:decoration-solid text-sm" href="/in/client">
                                Masuk atau Daftar
                            </Link>
                        </li>
                        <li className="mt-5">
                            <button className="text-[#484848] w-[130px] text-sm rounded-full p-2 hover:border-[#929292] font-bold border-[1px] border-[#DFDFDF]">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="inline-block w-6 h-6 mr-2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
                                </svg>
                                Bahasa
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="inline-block w-[16px] font-bold ml-1 h-[16px]">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                </svg>
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default SidebarHeader;
