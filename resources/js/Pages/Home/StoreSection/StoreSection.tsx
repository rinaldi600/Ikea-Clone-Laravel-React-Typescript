interface Store {
    store : boolean;
};

function StoreSection(props : Readonly<Store>) {
    return (
        <div className="h-[424.675px] max-h-[424.675px] w-full bg-red-300">
            {
                props.store ?
                <div>
                    store
                </div>
                :
                <div>
                    not store
                </div>
            }
        </div>
    )
}

export default StoreSection;