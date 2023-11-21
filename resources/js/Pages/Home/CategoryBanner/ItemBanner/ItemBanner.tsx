import { Link } from "@inertiajs/react";

interface Props {
    titleBanner : string;
    imageBanner : string
}

function ItemBanner(props : Props) {
    return (
        <div className="ty:w-[120px] w-[180px] h-[200px] hover:shadow-[0px_5px_15px_rgba(0,0,0,0.35)] rounded-lg overflow-hidden cursor-pointer">
            <div className="h-[120px] transition duration-300 delay-300 hover:scale-105  bg-blue-400 rounded-b-lg overflow-hidden">
                <img className="object-cover h-full object-center" src={props.imageBanner} alt="Sofa" />
            </div>
            <div className="ty:text-sm h-[80px] flex items-center text-center justify-center">
                <Link href="/">{props.titleBanner}</Link>
            </div>
        </div>
    )
}

export default ItemBanner;
