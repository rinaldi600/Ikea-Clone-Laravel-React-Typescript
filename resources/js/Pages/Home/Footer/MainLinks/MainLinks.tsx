import IkeaAppSectionOne from "./IkeaAppSectionOne/IkeaAppSectionOne";
import IkeaAppSectionTwo from "./IkeaAppSectionTwo/IkeaAppSectionTwo";

function MainLinks() {
    return (
        <>
            <div className="min-h-[343.8px] lg:p-0 p-3 w-[100%] flex mx-auto flex-wrap">
                <IkeaAppSectionOne />
                <IkeaAppSectionTwo />
            </div>
            <div>
                <h1>WORK</h1>
            </div>
        </>
    );
}

export default MainLinks;
