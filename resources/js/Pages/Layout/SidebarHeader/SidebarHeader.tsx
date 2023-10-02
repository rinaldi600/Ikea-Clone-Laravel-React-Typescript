function SidebarHeader() {
    return (
        <div className="w-full inline-flex h-full z-[9999] fixed overflow-hidden bg-[#DCDCDC]/50 top-0 right-0 bottom-0 left-0">
            <div className="w-full lg:w-[30%] bg-white min-h-screen overflow-y-scroll overflow-x-hidden">
                <div className="h-[85px] w-ful flex justify-start gap-12 pl-7 items-center">
                    <div className="w-[40px] flex items-center justify-center cursor-pointer h-[40px] hover:bg-[#F5F5F5] rounded-full">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-[24px] h-[24px] text-[#111111]">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </div>
                    <div className="w-[90px] flex items-center cursor-pointer h-[65px]">
                        <img className="w-full" src="https://d2xjmi1k71iy2m.cloudfront.net/dairyfarm/id/logos/IKEA_logo.svg" alt="Ikea Logo" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SidebarHeader;
