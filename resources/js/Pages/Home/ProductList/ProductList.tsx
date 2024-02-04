import { useRef } from "react";
import ProductImageOne from "../../../../img/DummyProductImage/eugenivy_now-1JJJIHh7-Mk-unsplash.jpg";
import ProductImageTwo from "../../../../img/DummyProductImage/jean-philippe-delberghe-Ry9WBo3qmoc-unsplash.jpg";
import ProductImageThree from "../../../../img/DummyProductImage/jeffery-ho-TIN_Lh9-Y7g-unsplash.jpg";
import ProductImageFour from "../../../../img/DummyProductImage/jose-losada-xHS9wbNga5s-unsplash.jpg";
import ProductImageFive from "../../../../img/DummyProductImage/khloe-arledge-8Rz_RIyp5FM-unsplash.jpg";
import ProductImageSix from "../../../../img/DummyProductImage/scopic-ltd-NLlWwR4d3qU-unsplash.jpg";
import Product from "./Product/Product";

function ProductList() {
    const parentRef = useRef<HTMLInputElement>(null);

    const leftArrow = () => {
        parentRef.current?.scrollBy(-400, 0);
    };

    const rightArrow = () => {
        parentRef.current?.scrollBy(400, 0);
    };

    return (
        <div className="pt-7 relative w-[100%] xl:w-[95%]">
            <h1 className={`text-3xl pb-5 font-bold xl:text-left text-center`}>
                Produk Pilihan
            </h1>

            <div
                onClick={leftArrow}
                className="z-50 absolute inset-y-0 left-0 cursor-pointer flex items-center"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-[40px] h-[40px]"
                >
                    <path
                        fillRule="evenodd"
                        d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-4.28 9.22a.75.75 0 000 1.06l3 3a.75.75 0 101.06-1.06l-1.72-1.72h5.69a.75.75 0 000-1.5h-5.69l1.72-1.72a.75.75 0 00-1.06-1.06l-3 3z"
                        clipRule="evenodd"
                    />
                </svg>
            </div>
            <div
                ref={parentRef}
                className={`duration-300 p-0.5 grid grid-flow-col xl:gap-5 overflow-x-scroll no-scrollbar justify-normal scroll-smooth no-scrollbar w-[100%] gap-4 xl:w-[95%]`}
            >
                <Product image={ProductImageOne} />
                <Product image={ProductImageTwo} />
                <Product image={ProductImageThree} />
                <Product image={ProductImageFour} />
                <Product image={ProductImageFive} />
                <Product image={ProductImageSix} />
            </div>

            <div
                onClick={rightArrow}
                className="z-50 absolute inset-y-0 right-0 cursor-pointer flex items-center"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-[40px] h-[40px]"
                >
                    <path
                        fillRule="evenodd"
                        d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z"
                        clipRule="evenodd"
                    />
                </svg>
            </div>
        </div>
    );
}

export default ProductList;
