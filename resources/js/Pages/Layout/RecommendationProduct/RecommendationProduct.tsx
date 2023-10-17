import { Link } from '@inertiajs/react';

interface Component {
    productImage : string;
    productName : string;
    productFact : string;
    productPrice: number;
    productLink : string;
}

function RecommendationProduct(props : Component) {
    return (
        <>
            <div className="flex mt-2 flex-wrap gap-2 min-h-[112.988px]">
                <div className='w-[112.988px] h-[112.988px] rounded-lg overflow-hidden'>
                    <img className='h-[112.988px] object-center w-full' src={props.productImage} alt="Product Image" />
                </div>
                <div className='grid'>
                    <div>
                        <Link href={props.productLink}>
                            <h6 className='font-semibold text-base text-[#111111]'>{props.productName}</h6>
                        </Link>
                        <p className='text-[#484848] text-sm'>{props.productFact}</p>
                        <p><sup className='text-xs font-bold text-[#111111]'>Rp. </sup><span className='font-bold text-2xl text-[#111111]'>{props.productPrice}</span></p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default RecommendationProduct;
