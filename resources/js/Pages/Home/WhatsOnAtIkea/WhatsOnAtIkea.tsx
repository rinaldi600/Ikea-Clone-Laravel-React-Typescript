import ImageBanner from "../../../../img/edu-lauton-TyQ-0lPp6e4-unsplash.jpg";
import ImageBannerOne from "../../../../img/alexander-simonsen-44al1GlFVxo-unsplash.jpg";
import ImageBannerTwo from "../../../../img/jonas-leupe-wK-elt11pF0-unsplash.jpg";
import ImageBannerThree from "../../../../img/national-cancer-institute-VJVsEnR_vNE-unsplash.jpg";
import ImageBannerFour from "../../../../img/r-architecture-TRCJ-87Yoh0-unsplash.jpg";

function WhatsOnAtIkea() {
    return (
        <div className="mx-auto">
            <h1 className="text-center font-bold text-[28px] mb-16 break-words">
                Ada ada di IKEA
            </h1>
            <div className="flex justify-center">
                <div className="min-h-[397.3px] flex flex-wrap justify-center">
                    <div className="lg:min-h-full lg:mb-0 mb-2 ty:w-full w-[50%] flex items-center">
                        <img
                            className="object-cover h-full"
                            src={ImageBanner}
                            alt="Image Banner"
                        />
                    </div>
                    <div className="ty:w-full md:pl-2 lg:min-h-full grid ty:grid-cols-1 sm:grid-cols-2 gap-2 justify-center">
                        <div className="ty:w-full w-[220.225px] h-[227.4px] bg-blue-200">
                            {" "}
                            <img
                                className="object-cover ty:w-full h-full"
                                src={ImageBannerOne}
                                alt="Image Banner One"
                            />
                        </div>
                        <div className="ty:w-full w-[220.225px] h-[227.4px] bg-blue-200">
                            {" "}
                            <img
                                className="object-cover ty:w-full h-full"
                                src={ImageBannerTwo}
                                alt="Image Banner Two"
                            />
                        </div>
                        <div className="ty:w-full w-[220.225px] h-[227.4px] bg-blue-200">
                            {" "}
                            <img
                                className="object-cover ty:w-full h-full"
                                src={ImageBannerThree}
                                alt="Image Banner Three"
                            />
                        </div>
                        <div className="ty:w-full w-[220.225px] h-[227.4px] bg-blue-200">
                            {" "}
                            <img
                                className="object-cover ty:w-full h-full"
                                src={ImageBannerFour}
                                alt="Image Banner Four"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default WhatsOnAtIkea;
