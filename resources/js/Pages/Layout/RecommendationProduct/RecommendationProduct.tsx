import ProductImage from '../../../../img/daniil-silantev-1P6AnKDw6S8-unsplash.jpg';

function RecommendationProduct() {
    return (
        <>
            <div className="flex mt-2 flex-wrap gap-2 min-h-[112.988px]">
                <div className='w-[112.988px] h-[112.988px] rounded-lg overflow-hidden'>
                    <img className='h-[112.988px] object-center w-full' src={ProductImage} alt="Product Image" />
                </div>
                <div className='grid'>
                    <div>
                        <h6 className='font-semibold text-base text-[#111111]'>ADDE/SANDSBERG</h6>
                        <p className='text-[#484848] text-sm'>meja dan 4 kursi</p>
                        <p><sup className='text-xs font-bold text-[#111111]'>Rp. </sup><span className='font-bold text-2xl text-[#111111]'>1369000</span></p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default RecommendationProduct;
