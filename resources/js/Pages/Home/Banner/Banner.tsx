import { useEffect, useState, useRef } from 'react'
import BannerImageOne from '../../../../img/banner/alexandra-gorn-JIUjvqe2ZHg-unsplash.jpg'
import BannerImageTwo from '../../../../img/banner/michael-warf-f8egRYt5RGk-unsplash.jpg'
import BannerImageThree from '../../../../img/banner/nathan-fertig-FBXuXp57eM0-unsplash.jpg'

function Banner() {

    const [slickPrev, setSlickPrev] = useState<boolean>(false);
    const [countPrev, setCountPrev] = useState<number>(0);
    const [countNext, setCountNext] = useState<number>(0);
    const imageRef = useRef<HTMLInputElement>(null);
    const imageRef2 = useRef<HTMLInputElement>(null);

    const imageSlide = [BannerImageOne, BannerImageTwo, BannerImageThree]

    useEffect(() => {
        // console.log('Prev : ' + countPrev);
        console.log('PREV : ' + countPrev);
        console.log('NEXT : ' + (countNext));
    });

    const clickNext = () => {

        if (countPrev === 2 && countNext === 0) {
            setCountNext(1);
            setCountPrev(0);
        } else {
            setCountNext(countNext > 1 ? 0 : countNext + 1);
            setCountPrev(countPrev + countNext > 2 ? 2 : countPrev + countNext);
        }

        imageRef.current?.classList.remove('animate-[slideShow_1s_linear]');
        imageRef2.current?.classList.remove('animate-[slideNext_1s_linear]');

        void imageRef.current?.offsetWidth;
        imageRef.current?.classList.add('animate-[slideShow_1s_linear]');

        void imageRef2.current?.offsetWidth;
        imageRef2.current?.classList.add('animate-[slideNext_1s_linear]');
    }

    return (
        <>
            <div onMouseEnter={() => setSlickPrev(true)} onMouseLeave={() => setSlickPrev(false)} className="h-[369.013px] cursor-pointer relative overflow-hidden w-[100%] xl:w-[95%]">
                <div className='w-full flex h-[369.013px]'>
                    <div ref={imageRef} className={`w-full inline-block h-full`}>
                        <img className='w-full h-full object-cover' src={imageSlide[countPrev]} alt="" />
                    </div>
                    <div ref={imageRef2} className={`w-full absolute h-full`}>
                        <img className='w-full h-full object-cover' src={imageSlide[countNext]} alt="" />
                    </div>
                </div>
                <div className={`${slickPrev ? 'flex' : 'hidden'} bg-transparent justify-between items-center absolute inset-0 w-full h-full`}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-[40px] h-[40px] cursor-pointer">
                    <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-4.28 9.22a.75.75 0 000 1.06l3 3a.75.75 0 101.06-1.06l-1.72-1.72h5.69a.75.75 0 000-1.5h-5.69l1.72-1.72a.75.75 0 00-1.06-1.06l-3 3z" clipRule="evenodd" />
                    </svg>
                    <svg onClick={clickNext} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-[40px] h-[40px] cursor-pointer">
                    <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z" clipRule="evenodd" />
                    </svg>
                </div>
            </div>
            <div className="flex pt-3 items-center">
                <div className="w-[426.358px] bg-[#7A7A7A] h-[5px] rounded-l"></div>
                <div className="w-[426.358px] bg-[#F5F5F5] h-[5px]"></div>
                <div className="w-[426.358px] bg-[#F5F5F5] h-[5px] rounded-r"></div>
            </div>
        </>
    )
}

export default Banner;
