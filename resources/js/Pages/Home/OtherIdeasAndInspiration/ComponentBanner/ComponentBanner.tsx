import { Link } from "@inertiajs/react";

function ComponentBanner(props : Readonly<{
    image : string,
    text : string,
    textLink : string,
    widthButton : string,
}>) {
    return (
        <div className="ty:w-full w-[50%] min-h-[601.325px]">
            <div className="h-[493.375px] p-4">
                <img
                    className="object-cover w-full h-full object-center"
                    src={props.image}
                    alt="Banner"
                />
            </div>
            <div className="p-4 pt-0">
                <p className="break-words text-sm text-[#484848]">
                    {props.text}
                </p>
                <button className={`hover:bg-[#333333] mt-5 overflow-hidden underline underline-offset-1 w-[${props.widthButton}] h-[40px] text-white text-xs font-black rounded-full bg-[#111111]`}>
                    <Link
                        className="w-full h-full px-6 break-words grid items-center justify-center"
                        href="/"
                    >
                        {props.textLink}
                    </Link>
                </button>
            </div>
        </div>
    );
}

export default ComponentBanner;
