import ImageBannerOne from "../../../../img/jana-heinemann-6iypUIK1MlU-unsplash.jpg";
import ImageBannerTwo from "../../../../img/ivy-aralia-nizar-UovnNJOG9Vw-unsplash.jpg";
import ComponentBanner from "./ComponentBanner/ComponentBanner";

function OtherIdeasAndInspiration() {
    return (
        <div className="mx-auto">
            <h1 className="text-center font-bold text-[28px] mb-16 break-words">
                Ide dan inspirasi lainnya
            </h1>
            <div className="flex flex-wrap">
                <ComponentBanner
                    text="Tidur nyaman bebas lembap dengan rangkaian produk kami yang
                    menyejukkan."
                    image={ImageBannerOne}
                    textLink="Lihat lebih lanjut"
                    widthButton='152.062px'
                />
                <ComponentBanner
                    text="Temukan beragam produk berkualitas buatan produsen lokal Indonesia di sini."
                    image={ImageBannerTwo}
                    textLink="Mari jelajahi semua produknya"
                    widthButton='235.837px'
                />
            </div>
        </div>
    );
}

export default OtherIdeasAndInspiration;
