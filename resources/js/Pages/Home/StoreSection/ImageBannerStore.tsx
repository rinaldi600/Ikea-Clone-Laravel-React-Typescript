interface Props {
    image : string;
}

function ImageBannerStore(props : Readonly<Props>) {
    return (
        <div className="w-full h-[238.75px] max-h-[238.75px]">
            <img
                src={props.image}
                alt="Ikea Factory"
                className="bg-cover bg-no-repeat bg-center w-full h-full"
            />
        </div>
    );
}

export default ImageBannerStore;
