import { useState } from "react";
import React, {Dispatch, SetStateAction} from "react";

interface PropsInterface {
    setValueSearchProduct : Dispatch<SetStateAction<boolean>>
}

function SearchProduct(props : PropsInterface) {

    const [toggleBorder, setBorderToggle] = useState<boolean>(false);

    return (
        <>
            <div className={`w-full absolute z-[9999999] inset-0 ${toggleBorder ? 'min-h-[400px] bg-red-300' : ''} p-2 rounded-lg`}>
                <div className={`max-w-[1000px] flex items-center mx-auto h-[60px] overflow-hidden bg-[#F5F5F5] rounded-full ${toggleBorder ? 'border-2 border-[#0058A3]' : ''}`}>
                    <div className="w-[11%] md:w-[8%] lg:w-[5%] pl-2 text-center mx-auto">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 text-center mx-auto font-bold">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                        </svg>
                    </div>
                    <div className="w-[89%] md:w-[92%] lg:w-[95%]">
                        <input onFocus={() => setBorderToggle(true)} type="text" placeholder="Cari..." className="w-full h-full border-none outline-none bg-[#F5F5F5] border-transparent focus:border-transparent focus:ring-0" />
                    </div>
                    <div onClick={() => props.setValueSearchProduct(false)} className="pr-5 cursor-pointer lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </div>
                </div>
                <div className={`w-full min-h-[300px] ${toggleBorder ? '' : 'hidden'}`}>
                    <button>TESTf</button>
                </div>
            </div>
            <div onClick={() => setBorderToggle(false)} className={`${toggleBorder ? 'w-full z-[9999] bg-[#E1E1E1]/50 fixed inset-0' : ''}`}>

            </div>
        </>
    )
}

export default SearchProduct;
