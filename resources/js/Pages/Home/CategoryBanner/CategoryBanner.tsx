import ImageBannerSofa from '../../../../img/Category/paul-weaver-nWidMEQsnAQ-unsplash.jpg';
import ImageBannerMattress from '../../../../img/Category/mitchell-luo-o_O6lKAggww-unsplash.jpg';
import ImageBannerWorkspace from '../../../../img/Category/hutomo-abrianto-9ZvuWg8deho-unsplash.jpg';
import ImageBannerSeatCushion from '../../../../img/Category/calvin-hanson-duuX5iVcBiw-unsplash.jpg';
import ImageBannerSeatChair from '../../../../img/Category/andrea-davis-7450hH--84M-unsplash.jpg';
import ImageBannerCupboard from '../../../../img/Category/zoe-van-poetsprins-nl-x5-tEdHLqRo-unsplash.jpg';
import ItemBanner from './ItemBanner/ItemBanner';

function CategoryBanner() {
    return (
        <div className="mt-5 w-[100%] xl:w-[95%]">
            <h1 className="text-center font-bold text-3xl">Kategori Pilihan</h1>
            <div className="flex flex-wrap justify-between gap-2 lg:gap-3 pt-11">
                <ItemBanner imageBanner={ImageBannerSofa} titleBanner='Sofa'/>
                <ItemBanner imageBanner={ImageBannerWorkspace} titleBanner='Meja Kerja Rumah'/>
                <ItemBanner imageBanner={ImageBannerSeatCushion} titleBanner='Bantal Kursi'/>
                <ItemBanner imageBanner={ImageBannerSeatChair} titleBanner='Kursi Tanpa Pelapis'/>
                <ItemBanner imageBanner={ImageBannerCupboard} titleBanner='Lemari Berlaci'/>
                <ItemBanner imageBanner={ImageBannerMattress} titleBanner='Kasur'/>
            </div>
        </div>
    )
}

export default CategoryBanner;
