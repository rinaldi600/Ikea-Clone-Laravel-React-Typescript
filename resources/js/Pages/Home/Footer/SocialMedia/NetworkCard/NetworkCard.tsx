import { Link } from "@inertiajs/react";

interface Prop {
    iconURL : string;
}

function NetworkCard(_props : Readonly<Prop>) {
    return (
        <div className="w-[32px] h-[32px] overflow-hidden rounded-full border border-[#dfdfdf] hover:border-[#929292]">
            <Link className="w-full h-full flex justify-center items-center" href="">
                <img
                    className="w-[16px] h-[16px]"
                    src={_props.iconURL}
                    alt="Icon"
                />
            </Link>
        </div>
    );
}

export default NetworkCard;
