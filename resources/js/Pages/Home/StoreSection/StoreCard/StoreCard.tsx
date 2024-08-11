import StoreSection from "../StoreSection";
import BusinessFactory from "../../../../../img/lycs-architecture-U2BI3GMnSSE-unsplash.jpg";
import FoodFactory from "../../../../../img/emma-houghton-k4cTDcGE6Bo-unsplash.jpg";

function StoreCard() {
    return (
        <div className="grid ty:grid-cols-1 grid-cols-3 w-full gap-4 p-1">
            <StoreSection store={true} />
            <StoreSection
                store={false}
                image={BusinessFactory}
                title="Tingkatkan bisnis Anda ke level selanjutnya!"
                text="Apa pun keperluan bisnisnya, kami punya semua yang Anda butuhkan di sini. <b>Registrasi online sekarang</b>"
                titleLink="Cek halaman IKEA untuk Bisnis"
                link="/"
            />
            <StoreSection
                store={false}
                image={FoodFactory}
                title="Perut kenyang, hati senang"
                text="Nikmati cita rasa khas Swedia atau coba menu terbaru kami yang tak kalah lezat."
                titleLink="Cek halaman Makanan IKEA"
                link="/"
            />
        </div>
    );
}

export default StoreCard;
