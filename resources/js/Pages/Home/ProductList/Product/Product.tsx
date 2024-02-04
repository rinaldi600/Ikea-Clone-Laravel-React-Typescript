interface Props {
    image: string
}

function Product(props : Readonly<Props>) {

    return (
        <div className="h-[466.175px] float-left w-[268px] bg-yellow-400">
            <div className="h-[286.95px]">
                <img
                    className="object-center h-full w-full mx-auto object-cover"
                    src={props.image}
                    alt="Product Image"
                />
            </div>
            <p className="text-[#484848] text-sm break-words mt-3">Lemari 4 laci, putih, 67x102 cm</p>
            <p className="text-[#CC0008] text-xl font-bold mt-5"><sup>Rp.</sup>{Math.floor(Math.random() * 100000)}</p>
            <div className="mt-5">
                <p className="text-[#484848] font-bold text-xs break-words">09 Jan 2024 - 21 Mar 2024</p>
                <p className="text-[#484848] text-xs break-words"> atau selama persediaan masih ada</p>
            </div>
        </div>
    )
}

export default Product;