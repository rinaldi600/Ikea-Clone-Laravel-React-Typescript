import { Link } from "@inertiajs/react";

function ButtonSectionOne(props : Readonly<{link : string, title : string}>) {
    return (
        <Link
        className="w-full lg:w-[270px] h-[40px] text-[#111111] font-bold text-xs rounded-full border border-[#929292] hover:border-[#111111]"
        href={props.link}
        as="button"
        type="button"
    >
        {props.title}
    </Link>
    )
}

export default ButtonSectionOne;