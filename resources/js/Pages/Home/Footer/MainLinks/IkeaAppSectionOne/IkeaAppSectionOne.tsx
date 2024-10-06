import ImagePhone from "../../../../../../img/home-footer-iphone.png";
import ButtonSectionOne from "./ButtonSectionOne";


function IkeaAppSectionOne() {
    return (
        <div className="lg:w-[50%] w-full flex gap-8 items-center">
            <div className="max-w-[170px] lg:block hidden">
                <img src={ImagePhone} alt="Image Phone" />
            </div>
            <div className="w-full lg:max-w-[318px]">
                <h4 className="text-xl font-semibold text-[#111111] mb-[16px]">
                    Aplikasi IKEA Indonesia
                </h4>
                <p className="text-sm text-[#484848] mb-[16px] leading-[1.3rem]">
                    Melalui aplikasi IKEA Indonesia, Anda dapat bergabung
                    menjadi IKEA Family dan mendapatkan banyak reward spesial.
                    Download dan daftar sekarang. GRATIS!
                </p>
                <div className="">
                    <ButtonSectionOne link="/" title="Download di iOS"/>
                    <div className="mb-[16px]"></div>
                    <ButtonSectionOne link="/" title="Download di Android"/>
                </div>
            </div>
        </div>
    );
}

export default IkeaAppSectionOne;
