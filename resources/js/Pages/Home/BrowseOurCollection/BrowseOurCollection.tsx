import BannerOne from "../../../../img/BrowseImage/shche_-team-0dszrg9-V1o-unsplash.jpg";
import BannerTwo from "../../../../img/BrowseImage/veronique-trudel-KsXifvHh5Vo-unsplash.jpg";
import BannerThree from "../../../../img/BrowseImage/dan-gold-4HG3Ca3EzWw-unsplash.jpg";
import BannerFour from "../../../../img/BrowseImage/clark-street-mercantile-P3pI6xzovu0-unsplash.jpg";
import BannerFive from "../../../../img/BrowseImage/roberto-nickson-bwIqQ5qQhXs-unsplash.jpg";
import ComponentBrowser from "./ComponentBrowser/ComponentBrowser";

function BrowseOurCollection() {
    return (
        <div>
            <h1 className="text-[28px] text-center font-bold">
                Telusuri koleksi kami
            </h1>
            <div className="h-[677.412px] w-[100%]">
                <div className="h-[581.412px] grid gap-2 grid-flow-col overflow-y-scroll scrollbar-hide w-full">
                    <ComponentBrowser
                        image={BannerOne}
                        title={"GOKVÄLLÅ"}
                        text={
                            "Biarkan GOKVÄLLÅ mengatur panggung untuk semua makanan lezat, dan Anda dapat menikmati kebersamaan dalam kenyamanan dan gaya."
                        }
                        background={"bg-[#6C83B7]"}
                    />
                    <ComponentBrowser
                        image={BannerTwo}
                        title={"DAKSJUS"}
                        text={
                            "Koleksi ini menyediakan perlengkapan berkebun, pot, stand tanaman hingga vas untuk merawat tanaman serta memajang koleksi favorit Anda  - bahkan di tempat yang terbatas."
                        }
                        background={"bg-[#B7B495]"}
                    />
                    <ComponentBrowser
                        image={BannerThree}
                        title={"NYTILLVERKAD"}
                        text={
                            "Dalam koleksi Nytillverkad edisi terbaru ini, kami menghadirkan kembali karya klasik yang dibuat oleh desainer berpengaruh seperti Karin Mobring dan Gillis Lundgren. Selamat menjelajahi nuansa santai dan menyenangkan tahun 60an dan 70an!"
                        }
                        background={"bg-[#00B050]"}
                    />
                    <ComponentBrowser
                        image={BannerFour}
                        title={"DAJLIEN"}
                        text={
                            "DAJLIEN adalah koleksi perabot olahraga cerdas multifungsi baru dan terbatas yang mudah digunakan dan dirancang agar pas di rumah."
                        }
                        background={"bg-[#02896F]"}
                    />
                    <ComponentBrowser
                        image={BannerFive}
                        title={"FÖSSTA"}
                        text={
                            "Terinspirasi oleh kesederhanaan gaya Dinasti Song, FÖSSTA membuat rumah Anda lebih menarik di Tahun Baru Imlek ini. Jadi, nikmati momen kebersamaan dengan keluarga serta sahabat Anda dan sambut tahun baru dengan penuh gaya.​"
                        }
                        background={"bg-[#9C080A]"}
                    />
                </div>
            </div>
        </div>
    );
}

export default BrowseOurCollection;
