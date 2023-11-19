interface Props {
    titleBanner : string;
    imageBanner : string
}

function ItemBanner(props : Props) {
    return (
        <div className="w-[180px] h-[200px] hover:shadow-[0px_5px_15px_rgba(0,0,0,0.35)] rounded-lg overflow-hidden cursor-pointer">
            <div className="h-[120px] transition duration-300 delay-300 hover:scale-105  bg-blue-400 rounded-b-lg overflow-hidden">
                <img src={props.imageBanner} alt="Sofa" />
            </div>
            <div className="h-[80px] flex items-center justify-center">
                {props.titleBanner}
            </div>
        </div>
    )
}

export default ItemBanner;
