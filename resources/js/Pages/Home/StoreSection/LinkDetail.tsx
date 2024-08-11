import { Link } from "@inertiajs/react";

interface Props {
    link: string;
    title: string;
}

function LinkDetail(_props: Readonly<Props>) {
    return (
        <button className="text-xs font-black border border-[#DFDFDF] rounded-full w-full h-[40px] relative overflow-hidden hover:border-[#929292]">
            <Link className="absolute inset-0 text-center grid justify-center items-center" href={_props.link}>
                {_props.title}
            </Link>
        </button>
    );
}

export default LinkDetail;
