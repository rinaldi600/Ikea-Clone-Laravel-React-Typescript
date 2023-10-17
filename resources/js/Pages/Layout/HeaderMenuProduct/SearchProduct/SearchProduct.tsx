import { useState } from "react";
import React, {Dispatch, SetStateAction, Suspense, lazy} from "react";
import ImageBannerOne from '../../../../../img/juan-burgos-Dp2xzrdXrNs-unsplash.jpg'
import ImageBannerTwo from '../../../../../img/suchit-poojari-ljRiZl00n18-unsplash.jpg'
import ProductImageTrial from '../../../../../img/daniil-silantev-1P6AnKDw6S8-unsplash.jpg'

interface PropsInterface {
    setValueSearchProduct : Dispatch<SetStateAction<boolean>>
}

const RecommendationProduct = React.lazy(() => import('../../RecommendationProduct/RecommendationProduct'));

function SearchProduct(props : PropsInterface) {

    const [toggleBorder, setBorderToggle] = useState<boolean>(false);

    return (
        <>
            <div className={`w-full absolute z-[9999999] inset-0 ${toggleBorder ? 'h-[600px] bg-white overflow-y-scroll' : ''} p-2 rounded-lg`}>
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
                <div className={`w-full h-fit mt-2 ${toggleBorder ? 'flex flex-wrap' : 'hidden'}`}>
                    <div className="h-[400px] xl:h-[700px] w-full xl:w-[70%] overflow-y-scroll">
                        <div className="pl-4 pt-2">
                            <div>
                                <h1 className="font-semibold text-base">Produk</h1>
                            </div>
                            <Suspense fallback={<h1>Loading....</h1>}>
                                <div className="flex gap-16 flex-wrap">
                                    <RecommendationProduct productImage={ProductImageTrial} productName={'ADDE/SANDSBERG'} productFact={'meja dan 4 kursi'} productPrice={1369000} productLink="/"/>
                                    <RecommendationProduct productImage={ProductImageTrial} productName={'ADDE/SANDSBERG'} productFact={'meja dan 4 kursi'} productPrice={1369000} productLink="/"/>
                                    <RecommendationProduct productImage={ProductImageTrial} productName={'ADDE/SANDSBERG'} productFact={'meja dan 4 kursi'} productPrice={1369000} productLink="/"/>
                                    <RecommendationProduct productImage={ProductImageTrial} productName={'ADDE/SANDSBERG'} productFact={'meja dan 4 kursi'} productPrice={1369000} productLink="/"/>
                                    <RecommendationProduct productImage={ProductImageTrial} productName={'ADDE/SANDSBERG'} productFact={'meja dan 4 kursi'} productPrice={1369000} productLink="/"/>
                                </div>
                            </Suspense>
                        </div>
                    </div>
                    <div className="h-[700px] w-full xl:w-[30%] overflow-y-scroll">
                        <div>
                            <img className="w-full" src={ImageBannerOne} alt="Banner Image One" />
                        </div>
                        <div>
                            <img className="w-full" src={ImageBannerTwo} alt="Banner Image Two" />
                        </div>
                    </div>
                </div>
            </div>
            <div onClick={() => setBorderToggle(false)} className={`${toggleBorder ? 'w-full z-[9999] bg-[#E1E1E1]/50 fixed inset-0' : ''}`}>

            </div>
        </>
    )
}

export default SearchProduct;
