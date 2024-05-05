import BannerOne from "../../../../img/BrowseImage/shche_-team-0dszrg9-V1o-unsplash.jpg";
import BannerTwo from "../../../../img/BrowseImage/veronique-trudel-KsXifvHh5Vo-unsplash.jpg";
import BannerThree from "../../../../img/BrowseImage/dan-gold-4HG3Ca3EzWw-unsplash.jpg";
import BannerFour from "../../../../img/BrowseImage/clark-street-mercantile-P3pI6xzovu0-unsplash.jpg";
import BannerFive from "../../../../img/BrowseImage/roberto-nickson-bwIqQ5qQhXs-unsplash.jpg";
import ComponentBrowser from "./ComponentBrowser/ComponentBrowser";
import { useRef, useState } from "react";

function BrowseOurCollection() {
    const divBrowseElementCollectionRef = useRef<HTMLDivElement>(null);
    const leftButtonElement = useRef<HTMLButtonElement>(null);
    const rightButtonElement = useRef<HTMLButtonElement>(null);
    const swiperScrollbar = useRef<HTMLDivElement>(null);
    const [isEnd, setIsEnd] = useState<boolean>(false);

    const rightButton = () => {
        divBrowseElementCollectionRef.current.scrollBy({
            top: 0,
            left: 400,
            behavior: "smooth",
        });
    };

    const leftButton = () => {
        divBrowseElementCollectionRef.current.scrollBy({
            top: 0,
            left: -400,
            behavior: "smooth",
        });
    };

    const checkIsEnd = (e) => {
        console.log("e.target.scrollLeft : ", e.target.scrollLeft);
        console.log("e.target.scrollWidth - e.target.clientWidth : ", e.target.scrollWidth - e.target.clientWidth);
        if (e.target.scrollLeft <= 0) {
            leftButtonElement.current?.classList.remove("flex");
            leftButtonElement.current?.classList.add("hidden");

            rightButtonElement.current?.classList.add("flex");
            rightButtonElement.current?.classList.remove("hidden");

            setIsEnd(false);
        }

        if ((e.target.scrollLeft > 0) && (e.target.scrollLeft <
            e.target.scrollWidth - e.target.clientWidth)) {
                leftButtonElement.current?.classList.remove("hidden");
                leftButtonElement.current?.classList.add("flex");
    
                rightButtonElement.current?.classList.remove("hidden");
                rightButtonElement.current?.classList.add("flex");
        }

        if (
            e.target.scrollLeft >=
            e.target.scrollWidth - e.target.clientWidth
        ) {
            leftButtonElement.current?.classList.remove("hidden");
            leftButtonElement.current?.classList.add("flex");

            rightButtonElement.current?.classList.add("hidden");
            rightButtonElement.current?.classList.remove("flex");
            setIsEnd(true);
        }
    };

    const showHideButton = (type: string) => {
        if (type == "show") {
            rightButtonElement.current.classList.remove("hidden");
            rightButtonElement.current.classList.add("flex");
            if (isEnd) {
                leftButtonElement.current?.classList.remove("hidden");
                leftButtonElement.current?.classList.add("flex");

                rightButtonElement.current?.classList.remove('flex');
                rightButtonElement.current?.classList.add('hidden');
            } else {
                leftButtonElement.current?.classList.remove("flex");
                leftButtonElement.current?.classList.add("hidden");

                rightButtonElement.current?.classList.remove('hidden');
                rightButtonElement.current?.classList.add('flex');
            }
        } else if (type == "hide") {
            rightButtonElement.current.classList.remove("flex");
            rightButtonElement.current.classList.add("hidden");

            if (leftButtonElement.current?.classList.contains("flex")) {
                leftButtonElement.current?.classList.remove("flex");
                leftButtonElement.current?.classList.add("hidden");
            }
        }
    };

    return (
        <div>
            <h1 className="text-[28px] text-center font-bold">
                Telusuri koleksi kami
            </h1>
            <div
                onMouseEnter={() => showHideButton("show")}
                onMouseLeave={() => showHideButton("hide")}
                className="h-[677.412px] w-[100%] relative flex items-center"
            >
                <button
                    ref={leftButtonElement}
                    onClick={leftButton}
                    className="w-[40px] h-[40px] hover:bg-[#111111] cursor-pointer hidden justify-center items-center bg-[#111111]/75 rounded-full absolute z-50 2xl:left-[-10px] left-0"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6 text-white"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15.75 19.5 8.25 12l7.5-7.5"
                        />
                    </svg>
                </button>
                <div
                    onScroll={(e) => checkIsEnd(e)}
                    ref={divBrowseElementCollectionRef}
                    className="h-[581.412px] grid gap-2 grid-flow-col overflow-y-scroll scrollbar-hide w-full"
                >
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
                <button
                    onClick={rightButton}
                    ref={rightButtonElement}
                    className="w-[40px] hidden items-center justify-center h-[40px] hover:bg-[#111111] cursor-pointer bg-[#111111]/75 rounded-full absolute z-50 2xl:right-[-10px] right-0"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6 text-white"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="m8.25 4.5 7.5 7.5-7.5 7.5"
                        />
                    </svg>
                </button>
            </div>
            <div className="h-[5px] mt-[-20px] bg-[#E5E5E5] rounded-full">
                <div
                    ref={swiperScrollbar}
                    className="bg-[#464646] h-[5px] rounded-full max-w-[325.25px]"
                ></div>
            </div>
        </div>
    );
}

export default BrowseOurCollection;
