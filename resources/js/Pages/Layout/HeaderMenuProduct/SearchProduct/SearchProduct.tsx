function SearchProduct() {
    return (
        <div className="w-full absolute z-30 inset-0 bg-red-300 min-h-[400px] p-2 rounded-lg">
            <div className="max-w-[1000px] flex items-center mx-auto h-[60px] overflow-hidden bg-[#F5F5F5] rounded-full">
                <div className="w-[5%] pl-2 text-center mx-auto">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 text-center mx-auto font-bold">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                    </svg>
                </div>
                <div className="w-[95%] bg-green-300">
                    <input type="text" placeholder="Cari..." className="w-full h-full border-none outline-none bg-[#F5F5F5] border-transparent focus:border-transparent focus:ring-0" />
                </div>
            </div>
            <div className="max-w-[1000px]">
                <h1>WORK</h1>
            </div>
        </div>
    )
}

export default SearchProduct;
