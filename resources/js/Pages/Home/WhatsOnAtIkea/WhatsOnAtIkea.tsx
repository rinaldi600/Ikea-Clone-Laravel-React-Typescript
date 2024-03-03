import ImageBanner from "../../../../img/edu-lauton-TyQ-0lPp6e4-unsplash.jpg";
import ImageBannerOne from "../../../../img/alexander-simonsen-44al1GlFVxo-unsplash.jpg";
import ImageBannerTwo from "../../../../img/jonas-leupe-wK-elt11pF0-unsplash.jpg";
import ImageBannerThree from "../../../../img/national-cancer-institute-VJVsEnR_vNE-unsplash.jpg";
import ImageBannerFour from "../../../../img/r-architecture-TRCJ-87Yoh0-unsplash.jpg";
import { Link } from "@inertiajs/react";
import Content from "./Content/Content";

function WhatsOnAtIkea() {
    return (
        <div className="mx-auto">
            <h1 className="text-center font-bold text-[28px] mb-16 break-words">
                Ada ada di IKEA
            </h1>
            <div className="flex justify-center">
                <div className="min-h-[397.3px] flex flex-wrap justify-center">
                    <div className="lg:min-h-full lg:mb-0 mb-2 ty:w-full w-[50%] flex items-center relative">
                        <img
                            className="object-cover h-full"
                            src={ImageBanner}
                            alt="Image Banner"
                        />
                        <div className="absolute grid min-h-full min-w-full bg-black/20 items-end">
                            <Link href="/" className="w-full flex p-4 h-fit items-center justify-between">
                                <h1 className="text-2xl font-bold text-white break-words">
                                    Sedia payung sebelum hujan
                                </h1>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                    className="w-6 h-6 fill-white text-white"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                                    />
                                </svg>
                            </Link>
                        </div>
                    </div>
                    <div className="ty:w-full md:pl-2 lg:min-h-full grid ty:grid-cols-1 sm:grid-cols-2 gap-2 justify-center">
                        
                        <Content image={ImageBannerOne}/>
                        <Content image={ImageBannerTwo}/>
                        <Content image={ImageBannerThree}/>
                        <Content image={ImageBannerFour}/>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default WhatsOnAtIkea;
