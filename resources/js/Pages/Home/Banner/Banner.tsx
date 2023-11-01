import { useEffect, useState, useRef, Dispatch, SetStateAction } from 'react'
import BannerImageOne from '../../../../img/banner/alexandra-gorn-JIUjvqe2ZHg-unsplash.jpg'
import BannerImageTwo from '../../../../img/banner/michael-warf-f8egRYt5RGk-unsplash.jpg'
import BannerImageThree from '../../../../img/banner/nathan-fertig-FBXuXp57eM0-unsplash.jpg'

interface ImageSliderProps {
    imageOne : string,
    imageTwo : string,
    effectOne : string,
    effectTwo : string,
    setButtonNext : Dispatch<SetStateAction<boolean>>
}
function ImageSlider(props : ImageSliderProps) {

    const animationOne = useRef<HTMLInputElement>(null);
    const animationTwo = useRef<HTMLInputElement>(null);

    useEffect(() => {
        setTimeout(() => {
            props.setButtonNext(false);
        }, 1000)
    })

    return (
        <>
            <div ref={animationOne} className={`w-full ${props.effectOne} inline-block bg-yellow-300 h-full`}>
                {/* animate-[slideShow_1s_linear] */}
                <img className='w-full h-full object-cover' src={props.imageOne} alt="" />
            </div>
            <div ref={animationTwo} className={`w-full ${props.effectTwo} absolute bg-green-500 h-full`}>
                {/* animate-[slideNext_1s_linear] */}
                <img className='w-full h-full object-cover' src={props.imageTwo} alt="" />
            </div>
        </>
    )
}

function Banner() {

    const [slickPrev, setSlickPrev] = useState<boolean>(false);

    const [buttonPrev, setButtonPrev] = useState<boolean>(false);
    const [buttonNext, setButtonNext] = useState<boolean>(false);
    const [countPrev, setCountPrev] = useState<number>(0);
    const [countNext, setCountNext] = useState<number>(0);

    const imageSlide = [BannerImageOne, BannerImageTwo, BannerImageThree]

    useEffect(() => {
        console.log(countPrev);
        console.log('Next : ' + buttonNext);
    });

    const isNext = () => {
        setButtonNext(true);
    };

    // ${slideShow ? 'animate-[slideShow_1s_linear] translate-x-full' : ''}
    return (
        <>
            <div onMouseEnter={() => setSlickPrev(true)} onMouseLeave={() => setSlickPrev(false)} className="h-[369.013px] cursor-pointer relative overflow-hidden bg-red-400 w-[100%] xl:w-[95%]">
                <div className='w-full flex h-[369.013px] bg-orange-800'>

                    {

                        (   buttonPrev === false
                            &&
                            buttonNext === false
                        ) ?
                        <>
                            <div className='w-full inline-block bg-yellow-300 h-full'>
                                <img className='w-full h-full object-cover' src={BannerImageOne} alt="" />
                            </div>
                        </>
                        :
                        <>
                            {
                                (buttonNext === true) &&
                                <ImageSlider setButtonNext={setButtonNext} imageOne={imageSlide[countPrev - 1]} imageTwo={imageSlide[countNext > 2 ? 0 : countNext]} effectOne='animate-[slideShow_1s_ease-in-out] translate-x-full' effectTwo='animate-[slideNext_1s_ease-in-out] translate-x-0'/>
                                // <>
                                //     <div className='w-full animate-[slideShow_1s_linear] inline-block bg-yellow-300 h-full'>
                                //         <img className='w-full h-full object-cover' src={imageSlide[countPrev - 1]} alt="" />
                                //     </div>
                                //     <div className='w-full animate-[slideNext_1s_linear] absolute bg-green-500 h-full'>
                                //         <img className='w-full h-full object-cover' src={imageSlide[countNext]} alt="" />
                                //     </div>
                                // </>
                            }
                            {
                                (buttonPrev === true) &&
                                <>
                                    <div className='w-full animate-[slidePrev_1s_linear] inline-block bg-yellow-300 h-full'>
                                        <img className='w-full h-full object-cover' src={imageSlide[countNext]} alt="" />
                                    </div>
                                    <div className='w-full animate-[slidePrev2_1s_linear] absolute bg-green-500 h-full'>
                                        <img className='w-full h-full object-cover' src={imageSlide[countPrev - 1]} alt="" />
                                    </div>
                                </>
                            }
                        </>
                    }
                </div>
                <div className={`${slickPrev ? 'flex' : 'hidden'} bg-transparent justify-between items-center absolute inset-0 w-full h-full`}>
                    <svg onClick={() => {setButtonPrev(true); setButtonNext(false)}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-[40px] h-[40px] cursor-pointer">
                    <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-4.28 9.22a.75.75 0 000 1.06l3 3a.75.75 0 101.06-1.06l-1.72-1.72h5.69a.75.75 0 000-1.5h-5.69l1.72-1.72a.75.75 0 00-1.06-1.06l-3 3z" clipRule="evenodd" />
                    </svg>
                    <svg onClick={() => {isNext(); setButtonPrev(false); setCountPrev(countPrev + 1); setCountNext(countNext + 1)}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-[40px] h-[40px] cursor-pointer">
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
