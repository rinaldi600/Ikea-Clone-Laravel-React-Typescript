import StoreSection from "../StoreSection";

function StoreCard() {
    return (
        <div className="grid ty:grid-cols-1 grid-cols-3 w-full gap-4">
            <StoreSection store={true} />
            <StoreSection store={false} />
            <StoreSection store={false} />
        </div>  
    )
}

export default StoreCard;