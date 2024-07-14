import CardService from "./CardService/CardService";

function ConvenienceNew() {
    return (
        <div>
            <h1 className="text-2xl font-bold text-center mb-8">
                Layanan untuk kenyamanan Anda
            </h1>
            <div className="sm:p-2 ty:p-2 flex flex-wrap md:gap-2 xl:gap-2 gap-4 justify-center">
                <CardService
                    source="https://d2xjmi1k71iy2m.cloudfront.net/dairyfarm/id/pageImages/page__en_us_1672653243514_3_3.png"
                    title="Pengataran"
                    description="Kami bantu antar belanjaan Anda ke rumah atau kantor."
                />
                <CardService
                    source="https://d2xjmi1k71iy2m.cloudfront.net/dairyfarm/id/pageImages/page__en_us_1672653243454_3_2.png"
                    title="Perakitan"
                    description="Kami dapat merakit satu perabot hingga sistem lemari pakaian PAX."
                />
                <CardService
                    source="https://d2xjmi1k71iy2m.cloudfront.net/dairyfarm/id/pageImages/page__en_us_1672653243418_3_1.png"
                    title="Desain Interior"
                    description="Dapatkan solusi ruang dari ahli desain interior kami."
                />
                <CardService
                    source="https://d2xjmi1k71iy2m.cloudfront.net/dairyfarm/id/pageImages/page__en_us_1672653243573_3_4.png"
                    title="Lacak pesanan saya"
                    description="Periksa tanggal dan rincian pengantaran Anda di sini."
                />
                <CardService
                    source="https://d2xjmi1k71iy2m.cloudfront.net/dairyfarm/id/pageImages/page__en_us_1672653243599_3_5.png"
                    title="Click and collect"
                    description="Ambil belanjaan online Anda di IKEA Pick-up Point atau toko IKEA terdekat."
                />
                <CardService
                    source="https://d2xjmi1k71iy2m.cloudfront.net/dairyfarm/id/pageImages/page__en_us_1672653243314_3_0.png"
                    title="Hubungi kami"
                    description="Tanyakan pada kami, kami siap membantu Anda."
                />
            </div>
        </div>
    );
}

export default ConvenienceNew;
