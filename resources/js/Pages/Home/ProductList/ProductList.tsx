import React, { useRef, useState, useEffect } from "react";

function ProductList() {

    const parentRef = useRef<HTMLInputElement>(null)
    const [number, setNumber] = useState<number>(0);
    const [isLeft, setLeft] = useState<boolean>(false);
    const [isRight, setRight] = useState<boolean>(false);

    useEffect(() => {
        console.log('LEFT : ', isLeft);
        console.log('RIGHT : ', isRight);
        // console.log(number);
        // console.log(parentRef.current?.children[number]);
    }, [number, isLeft, isRight]);

    const leftArrow = () => {
        parentRef.current?.children[0].classList.add('hidden');
        parentRef.current?.children[1].classList.add('hidden');
        console.log(parentRef.current?.clientHeight)
        setLeft(true);
        setNumber(number + 1);
    }

    const rightArrow = () => {
        setRight(true);
        setNumber(number - 1);
    }

    return (
        <div className="pt-7 relative">
            <h1 className="text-3xl pb-5 font-bold xl:text-left text-center">Produk Pilihan</h1>

            <div onClick={leftArrow} className="absolute inset-y-0 left-0 cursor-pointer flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-[40px] h-[40px]">
                <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-4.28 9.22a.75.75 0 000 1.06l3 3a.75.75 0 101.06-1.06l-1.72-1.72h5.69a.75.75 0 000-1.5h-5.69l1.72-1.72a.75.75 0 00-1.06-1.06l-3 3z" clipRule="evenodd" />
                </svg>
            </div>

            <div ref={parentRef} className="h-[466.175px] xl:justify-around overflow-y-hidden xl:gap-5 justify-center flex flex-wrap w-[100%] gap-4 xl:w-[95%]">

                <div className="h-[466.175px] w-[268px] bg-yellow-400">
                    1
                </div>
                <div className="h-[466.175px] w-[268px] bg-blue-400">
                    2
                </div>
                <div className="h-[466.175px] w-[268px] bg-green-400">
                    3
                </div>
                <div className="h-[466.175px] w-[268px] bg-amber-400">
                    4
                </div>
                <div className="h-[466.175px] w-[268px] bg-blue-400">
                    5
                </div>
                <div className="h-[466.175px] w-[268px] bg-green-400">
                    6
                </div>

            </div>

            <div onClick={rightArrow} className="absolute inset-y-0 right-0 cursor-pointer flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-[40px] h-[40px]">
                <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z" clipRule="evenodd" />
                </svg>
            </div>
        </div>
    );
}

export default ProductList;
