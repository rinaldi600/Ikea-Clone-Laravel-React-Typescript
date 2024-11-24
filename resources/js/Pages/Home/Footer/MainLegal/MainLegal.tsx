import { Link } from "@inertiajs/react";

function MainLegal() {
    return (
        <div className="flex flex-wrap ty:gap-2 min-h-[69px]">
            <div className="w-full lg:w-[30%] sm:p-3 ty:w-full ty:p-4 xl:w-[40%] grid items-center">
                <p className="tracking-[0.023em] text-[11.9px] text-[#111111]">
                    &copy; Inter IKEA Systems B.V. 2014 - 2024
                </p>
            </div>
            <div className="w-full lg:w-[70%] ty:w-full ty:p-4 xl:w-[60%] grid items-center">
                <ul className="tracking-[0.023em] sm:flex-col md:flex-row sm:p-3 text-[11.9px] flex ty:flex-col md:justify-start md:gap-5 ty:gap-1 justify-around text-[#111111]">
                    <li>
                        <Link href="">Kebijakan Privasi</Link>
                    </li>
                    <li>
                        <Link href="">Pembatasan Tanggung Jawab</Link>
                    </li>
                    <li>
                        <Link href="">Pengungkapan yang Bertanggung Jawab</Link>
                    </li>
                    <li>
                        <Link href="">Kebijakan Cookie</Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default MainLegal;
