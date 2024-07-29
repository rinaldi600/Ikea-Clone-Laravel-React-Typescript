import IkeaFactory from "../../../../img/adam-kolmacka-DQiJZa3LKwY-unsplash.jpg";
import ImageBannerStore from "./ImageBannerStore";
import SelectStore from "./SelectStore";
import DOMPurify from 'dompurify';

interface Store {
    store: boolean;
    image?: string;
    text?: string;
    title?: string;
}

function StoreSection(props: Readonly<Store>) {

    const htmlParse = (parse : string) => {
        return (
            <div dangerouslySetInnerHTML={{__html : DOMPurify.sanitize(parse)}}/>
        )
    }

    return (
        <div className="h-[424.675px] max-h-[424.675px] w-full grid grid-rows-2">
            {props.store ? (
                <>
                    <ImageBannerStore image={IkeaFactory} />
                    <div className="w-full grid justify-between h-full pt-9">
                        <div>
                            <h3 className="text-xl font-bold">
                                Sampai jumpa di toko
                            </h3>
                            <p className="text-sm text-[#484848] leading-5 pt-3">
                                Sebelum berkunjung, lihat halaman Toko dan
                                Pick-up Point IKEA untuk mengetahui informasi
                                seputar penawaran, event dan lainnya.
                            </p>
                        </div>
                        <div>
                            <SelectStore />
                        </div>
                    </div>
                </>
            ) : (
                <>
                    <ImageBannerStore image={props.image} />
                    <div className="w-full grid justify-between h-full pt-9">
                        <div>
                            <h3 className="text-xl font-bold">
                                {props.title}
                            </h3>
                            <p className="text-sm text-[#484848] leading-5 pt-3">
                                {htmlParse(props.text)}
                            </p>
                        </div>
                        <div>
                            <SelectStore />
                        </div>
                    </div>
                </>
            )}
        </div>
    );
}

export default StoreSection;
