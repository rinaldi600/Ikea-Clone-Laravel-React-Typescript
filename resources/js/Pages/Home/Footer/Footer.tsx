import MainLegal from "./MainLegal/MainLegal";
import MainLinks from "./MainLinks/MainLinks";
import SocialMedia from "./SocialMedia/SocialMedia";

function Footer() {
    return (
        <div className="w-full">
            <MainLinks />
            <SocialMedia />
            <div className="text-sm mt-5 text-[#484848] flex gap-1 flex-wrap justify-center content-center">
                <p>EN</p>
                <span>|</span>
                <p>ID</p>
            </div>
            <div className="h-[0.5px] bg-[#DFDFDF] mt-[20px]"></div>
            <MainLegal />
        </div>
    )
}

export default Footer;