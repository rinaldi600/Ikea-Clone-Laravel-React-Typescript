interface Props {
    url : string;
}

function PaymentCard(props : Readonly<Props>) {
    return (
        <div className="w-[43px] h-[33px] border flex justify-center items-center border-[#dfdfdf] rounded-sm">
            <img src={props.url} alt="Payment" />
        </div>
    );
}

export default PaymentCard;
