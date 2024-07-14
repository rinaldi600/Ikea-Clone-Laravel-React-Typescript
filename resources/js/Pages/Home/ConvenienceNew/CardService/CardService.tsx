interface Props {
    source: string;
    title: string;
    description: string;
}

function CardService(props: Readonly<Props>) {
    return (
        <div className="ty:w-[100%] sm:w-[100%] md:w-[350px] lg:w-[320px] 2xl:w-[422.125px] h-[180px] flex text-center mx-auto items-center bg-[#F5F5F5]">
            <div className="grid justify-items-center items-center w-full p-2">
                <div>
                    <img
                        className="mx-auto text-center"
                        data-src={props.source}
                        src={props.source}
                        alt="icons"
                    />
                </div>
                <div className="grid justify-center items-center">
                    <h4 className="font-bold mx-auto justify-self-center mb-2">{props.title}</h4>
                    <p className="text-sm text-center mx-auto mb-1">
                        {props.description}
                    </p>
                    <p className="text-sm text-center">Baca Selengkapnya</p>
                </div>
            </div>
        </div>
    );
}

export default CardService;
