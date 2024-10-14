import InstgramIcon from "../../../../../img/SocialMedia/instagram.png";
import FacebookIcon from "../../../../../img/SocialMedia/social-media.png";
import PinterestIcon from "../../../../../img/SocialMedia/pinterest.png";
import TwitterIcon from "../../../../../img/SocialMedia/twitter.png";
import YoutubeIcon from "../../../../../img/SocialMedia/youtube.png";
import TiktokIcon from "../../../../../img/SocialMedia/video.png";

import NetworkCard from "./NetworkCard/NetworkCard";

function SocialMedia() {
    return (
        <div className="w-full mt-6 flex justify-center gap-4">
            <NetworkCard iconURL={FacebookIcon} />
            <NetworkCard iconURL={InstgramIcon} />
            <NetworkCard iconURL={PinterestIcon} />
            <NetworkCard iconURL={TwitterIcon} />
            <NetworkCard iconURL={YoutubeIcon} />
            <NetworkCard iconURL={TiktokIcon} />
        </div>
    );
}

export default SocialMedia;
