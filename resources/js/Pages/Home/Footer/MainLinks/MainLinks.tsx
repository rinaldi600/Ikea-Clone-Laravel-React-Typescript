import IkeaAppSectionOne from "./IkeaAppSectionOne/IkeaAppSectionOne";
import IkeaAppSectionTwo from "./IkeaAppSectionTwo/IkeaAppSectionTwo";

function MainLinks() {
    return (
        <div className="min-h-[343.8px] w-[100%] flex bg-red-300 mx-auto flex-wrap">
            <IkeaAppSectionOne/>
            <IkeaAppSectionTwo/>
        </div>
    )
}

export default MainLinks;