import InstgramIcon from "../../../../../img/SocialMedia/instagram.png";
import FacebookIcon from "../../../../../img/SocialMedia/social-media.png";
import PinterestIcon from "../../../../../img/SocialMedia/pinterest.png";
import TwitterIcon from "../../../../../img/SocialMedia/twitter.png";
import YoutubeIcon from "../../../../../img/SocialMedia/youtube.png";
import TiktokIcon from "../../../../../img/SocialMedia/video.png";
import Visa from "../../../../../img/PaymentCard/visaFooter.svg";
import MasterCard from "../../../../../img/PaymentCard/masterCardFooter.svg";
import VisaElectron from "../../../../../img/PaymentCard/visaElectronFooter.svg";
import Maestro from "../../../../../img/PaymentCard/maestroFooter.svg";

import NetworkCard from "./NetworkCard/NetworkCard";
import PaymentCard from "./PaymentCard/PaymentCard";

function SocialMedia() {
    return (
        <div className="w-full mt-6 flex justify-center gap-4 ty:flex-wrap bg-red-300">
            <NetworkCard iconURL={FacebookIcon} />
            <NetworkCard iconURL={InstgramIcon} />
            <NetworkCard iconURL={PinterestIcon} />
            <NetworkCard iconURL={TwitterIcon} />
            <NetworkCard iconURL={YoutubeIcon} />
            <NetworkCard iconURL={TiktokIcon} />
            <PaymentCard url={Visa} />
            <PaymentCard url={VisaElectron} />
            <PaymentCard url={MasterCard} />
            <PaymentCard url={Maestro} />
        </div>
    );
}

export default SocialMedia;
